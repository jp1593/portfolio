import { ExternalLink } from "lucide-react";
import ghFoundations from "../../assets/certs/ghFoundations.png";
import ibmDatascience from "../../assets/certs/ibmDatascience.png";
import ibmPm from "../../assets/certs/ibmPm.png";
import scrumLab from "../../assets/certs/scrumlab.png";
import stanfordCodeinplace from "../../assets/certs/stanfordCodeinplace.png";

const certs = [
    {
        title: "GitHub Foundations",
        description:
            "Solid understanding of Git, GitHub workflows, branching strategies, and collaborative development best practices.",
        img: ghFoundations,
        issuedby: "GitHub",
        credetialid: "",
        link: "https://www.credly.com/badges/e4efc712-0170-4db7-9597-28baeb1c9dfe/linked_in_profile",
    },
    {
        title: "IBM PY0101EN: Python 101 for Data Science",
        description:
            "Foundational Python skills focused on data analysis, problem-solving, and working with structured datasets.",
        img: ibmDatascience,
        issuedby: "IBM",
        credetialid: "",
        link: "https://www.credly.com/badges/a7f7e338-24c3-4df3-99c0-99ff6e30dade/linked_in_profile",
    },
    {
        title: "CS106A: Code in Place",
        description:
            "Stanford’s introductory programming course covering problem-solving, algorithms, and core programming principles.",
        img: stanfordCodeinplace,
        issuedby: "Stanford University - Code In Place",
        credetialid: "",
        link: "https://codeinplace.stanford.edu/cip5/certificate/axvh13",
    },
    {
        title: "Registered Scrum Basics",
        description:
            "Fundamentals of Scrum framework, agile principles, team roles, and iterative product development.",
        img: scrumLab,
        issuedby: "Scrum Inc.",
        credetialid: "#RSB-2627533",
        link: "",
    },
    {
        title: "Project Management Fundamentals",
        description:
            "Core project management concepts including planning, risk management, stakeholder communication, and execution strategies.",
        img: ibmPm,
        issuedby: "IBM",
        credetialid: "",
        link: "https://www.credly.com/badges/d2ed6ac8-58b6-4ea8-8402-9e94f82fa72c/linked_in_profile",
    },
]



export const Certs = () => {
    return (

        <section id="certifications"
            className="py-31 relative overflow-hidden">

            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/70 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/85 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 reltive z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Certifications
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
                        Knowledge
                        <span className="font-sans italic font-normal text-white">
                            {" "}
                            that gives me the lead.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Continuous learning turned into action. These certifications validate my commitment to building better, faster, and smarter.
                    </p>
                </div>
                <div className="">
                    <div className="flex flex-wrap gap-20 gap-y-20 justify-center">
                        {certs.map((cert, id) => (
                            <div className="max-w-82 w-full rounded-3xl border border-primary glass glow-border animate-fade-in flex flex-col transition-transform duration-300 ease-out hover:scale-105" style={{ animationDelay: `${(id + 1) * 200}ms` }}>
                                <div className="flex w-full justify-center mt-4 mb-4" >
                                    <img className="max-w-48" src={cert.img} />
                                </div>
                                <div className="flex flex-col flex-1 mx-10 text-muted-foreground text-sm">
                                    <p className="text-center text-secondary-foreground text-base">{cert.title}</p>
                                    <div className="flex flex-col gap-2 mt-2 text-center">
                                        <p>Issued by: {cert.issuedby}</p>
                                        <p>{cert.description}</p>
                                        {cert.credetialid != "" &&
                                            <p className="text-secondary-foreground">Credential ID: {cert.credetialid}</p>}
                                    </div>
                                    <div className="mt-auto flex justify-end mb-4">
                                        {cert.link != "" &&
                                            <div className="-mr-5 flex w-10 h-10 rounded-xl bg-primary/10  items-center justify-center  hover:bg-primary/20">
                                                <a href={cert.link} abel="Certification Link">
                                                    <ExternalLink className="text-primary mb-1"></ExternalLink>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
