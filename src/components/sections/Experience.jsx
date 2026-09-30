import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/useLanguage";

const experiences = [
    {
        company: "Ubymed S.A.",
        technologies: ["React Native", "Django", "PostgreSQL", "Amazon Web Services (AWS)", "Docker", "Nginx", "Google API", "Python", "Javascript", "Expo"],
        current: true,
    },
    {
        company: "Suministros & Alimentos S.A.",
        technologies: ["React", "Javascript", "Django", "Python", "Google API", "SQL"],
        current: false,
    },
    {
        company: "Tribal Worldwide Guatemala",
        technologies: ["AWS"],
        current: false,
    },
    {
        company: "WAU",
        technologies: ["Node.js", "React.js", "MySQL"],
        current: false,
    }
]

export const Experience = () => {
    const { t } = useLanguage();

    const [sectionRef, isVisible] = useInView({
        threshold: 0.15,
    });

    return (
        <section id="experience"
            className="py-32 relative overflow-hidden"
            ref={sectionRef}>
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div
                    className={`
    max-w-3xl mb-16
    transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"}
  `}
                >
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">{t.experience.eyebrow}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t.experience.headingStart} <span className="font-sans italic font-normal text-white"> {t.experience.headingEnd}</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        {t.experience.intro}
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/50 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(138, 0, 196, 0.8)]" />
                    {/* Experiences */}
                    <div className="space-y-12">
                        {experiences.map((exp, id) => (
                            <div
                                key={id}
                                className={`
    relative grid md:grid-cols-2 gap-8
    transform transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                        ? "opacity-100 translate-x-0"
                                        : id % 2 === 0
                                            ? "opacity-0 -translate-x-16"
                                            : "opacity-0 translate-x-16"
                                    }
  `}
                                style={{ transitionDelay: `${id * 200}ms` }}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-85" />}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${id % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{t.experience.periods[id]}</span>
                                        <h3 className="text-xl font-semibold mt-2">{t.experience.roles[id]}</h3>
                                        <p className="text-muted-foreground">{exp.company}{t.experience.companySuffixes[id]}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{t.experience.descriptions[id]}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${id % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, id) => (
                                                <span key={id} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                            ))}</div>
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