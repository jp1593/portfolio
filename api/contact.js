import { Resend } from "resend";
import process from "node:process";

const limits = { name: 120, email: 254, company: 160, project: 200, message: 5000 };
const required = ["name", "email", "project", "message"];
const allowed = new Set([...Object.keys(limits), "website", "language", "submissionId"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const json = (response, status, body) => response.status(status).json(body);

export default async function handler(request, response) {
  response.setHeader("Allow", "POST");
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "POST") return json(response, 405, { error: "Method not allowed" });
  if (!/^application\/json(?:\s*;|\s*$)/i.test(request.headers["content-type"] || "")) {
    return json(response, 415, { error: "JSON required" });
  }
  const length = Number(request.headers["content-length"]);
  if (Number.isFinite(length) && length > 8192) return json(response, 413, { error: "Request too large" });

  let body = request.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return json(response, 400, { error: "Invalid JSON" }); }
  }
  if (!body || typeof body !== "object" || Array.isArray(body) || Object.keys(body).some((key) => !allowed.has(key))) {
    return json(response, 400, { error: "Invalid request" });
  }
  if (JSON.stringify(body).length > 8192) return json(response, 413, { error: "Request too large" });
  if (body.website !== undefined && typeof body.website !== "string") return json(response, 400, { error: "Invalid request" });
  if (body.website?.trim()) return json(response, 200, { ok: true });
  const values = {};
  for (const [field, max] of Object.entries(limits)) {
    const input = body[field];
    if (input === undefined && field === "company") { values[field] = ""; continue; }
    if (typeof input !== "string") return json(response, 400, { error: "Invalid request" });
    values[field] = input.trim();
    if (values[field].length > max) return json(response, 400, { error: "Field too long" });
  }
  if (required.some((field) => !values[field])) return json(response, 400, { error: "Required field missing" });
  if (!emailPattern.test(values.email)) return json(response, 400, { error: "Invalid email" });
  if (body.language !== undefined && !["en", "es"].includes(body.language)) return json(response, 400, { error: "Invalid request" });
  if (body.submissionId !== undefined && (typeof body.submissionId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(body.submissionId))) {
    return json(response, 400, { error: "Invalid request" });
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) return json(response, 503, { error: "Contact service unavailable" });
  const spanish = body.language === "es";
  const subject = `${spanish ? "Consulta sobre proyecto/puesto" : "Project/Role Inquiry"}: ${values.project.replace(/[\r\n]+/g, " ")}`;
  const text = spanish
    ? `Hola Juan Pablo:\n\nTe escribo en relación con: ${values.project}\nEmpresa/organización: ${values.company || "No indicada"}\n\nMensaje:\n${values.message}\n\nPuedes contactarme en: ${values.email}\n\nSaludos cordiales,\n${values.name}`
    : `Hello Juan Pablo,\n\nI am reaching out regarding: ${values.project}\nCompany/Organization: ${values.company || "Not provided"}\n\nMessage:\n${values.message}\n\nYou can best reach me at: ${values.email}\n\nBest regards,\n${values.name}`;
  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: values.email,
      subject,
      text,
    }, body.submissionId ? { idempotencyKey: `contact/${body.submissionId}` } : undefined);
    if (error || !data?.id) return json(response, 502, { error: "Unable to send message" });
    return json(response, 200, { ok: true });
  } catch {
    return json(response, 502, { error: "Unable to send message" });
  }
}
