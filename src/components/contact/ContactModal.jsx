import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLanguage } from "../../i18n/useLanguage";

const emptyForm = { name: "", email: "", company: "", project: "", message: "", website: "" };
const limits = { name: 120, email: 254, company: 160, project: 200, message: 5000 };
const fields = ["name", "email", "company", "project", "message"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactModal = ({ open, onClose, triggerRef }) => {
  const { t, language } = useLanguage();
  const c = t.contact;
  const titleId = useId();
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const requestPending = useRef(false);
  const handleClose = useCallback(() => {
    setStatus((current) => current === "success" || current === "error" ? "idle" : current);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const pageRoot = document.getElementById("root");
    const wasInert = pageRoot?.inert;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    if (pageRoot) pageRoot.inert = true;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
      if (event.key !== "Tab") return;
      const focusable = [...dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled])')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      } else if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (pageRoot) pageRoot.inert = wasInert;
      document.removeEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => trigger?.focus());
    };
  }, [open, handleClose, triggerRef]);

  useEffect(() => {
    if (open && status === "success") dialogRef.current?.querySelector('button[aria-label]')?.focus();
  }, [open, status]);

  if (!open) return null;

  const validate = () => {
    const next = {};
    for (const field of fields) {
      const value = form[field].trim();
      if (field !== "company" && !value) next[field] = c.required;
      else if (value.length > limits[field]) next[field] = c.tooLong;
    }
    if (!next.email && !emailPattern.test(form.email.trim())) next.email = c.invalidEmail;
    return next;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (requestPending.current) return;
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      dialogRef.current?.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }
    requestPending.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language, submissionId: crypto.randomUUID() }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setForm(emptyForm);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      requestPending.current = false;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) handleClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="glass w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-2xl bg-background/95 p-5 shadow-2xl shadow-primary/20 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-2xl font-bold text-foreground">{c.title}</h2>
          <button type="button" aria-label={c.close} onClick={handleClose} className="rounded-full p-2 text-foreground hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-primary"><X size={22} /></button>
        </div>
        {status === "success" ? (
          <div className="mt-6 space-y-6" role="status">
            <p className="text-foreground">{c.success}</p>
            <button type="button" onClick={handleClose} className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{c.close}</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-6 space-y-4">
            <div hidden aria-hidden="true">
              <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => setForm({ ...form, website: event.target.value })} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.filter((field) => field !== "message").map((field) => (
                <div key={field}>
                  <label htmlFor={`${titleId}-${field}`} className="mb-1 block text-sm font-medium">{c[field]}{field !== "company" && " *"}</label>
                  <input ref={field === "name" ? firstFieldRef : undefined} id={`${titleId}-${field}`} name={field} type={field === "email" ? "email" : "text"} autoComplete={field === "name" ? "name" : field === "email" ? "email" : field === "company" ? "organization" : "off"} required={field !== "company"} maxLength={limits[field]} value={form[field]} placeholder={c[`${field}Placeholder`]} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${titleId}-${field}-error` : undefined} onChange={(event) => setForm({ ...form, [field]: event.target.value })} className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary" />
                  {errors[field] && <p id={`${titleId}-${field}-error`} className="mt-1 text-sm text-red-300">{errors[field]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label htmlFor={`${titleId}-message`} className="mb-1 block text-sm font-medium">{c.message} *</label>
              <textarea id={`${titleId}-message`} name="message" required rows={5} maxLength={limits.message} value={form.message} placeholder={c.messagePlaceholder} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${titleId}-message-error` : undefined} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-y rounded-lg border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary" />
              {errors.message && <p id={`${titleId}-message-error`} className="mt-1 text-sm text-red-300">{errors.message}</p>}
            </div>
            <div role="status" aria-live="polite">{status === "error" && <p className="text-sm text-red-300">{c.error}</p>}{status === "sending" && <p className="sr-only">{c.sending}</p>}</div>
            <div className="flex flex-wrap justify-end gap-3">
              <button type="button" onClick={handleClose} className="rounded-full border border-border px-5 py-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-primary">{c.cancel}</button>
              <button type="submit" disabled={status === "sending"} className="rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 disabled:cursor-wait disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{status === "sending" ? c.sending : c.send}</button>
            </div>
          </form>
        )}
      </div>
    </div>, document.body
  );
};
