import { Code2, Lightbulb, Search, Users } from "lucide-react"
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/useLanguage";

const highlightIcons = [Search, Code2, Users, Lightbulb];

export const About = () => {
    const { t } = useLanguage();

    const [sectionRef, isVisible] = useInView({
        threshold: 0.2,
    });

    return (
        <section className="py-32 relative overflow-hidden" ref={sectionRef}>
            <div id="about" className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div
                        className={`
    space-y-8
    transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"}
  `}
                    >
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">{t.about.eyebrow}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            {t.about.headingStart}
                            <br />
                            <span className="font-sans italic font-normal text-white">
                                {" "}
                                {t.about.headingEnd}
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                {t.about.paragraphOne}
                            </p>
                            <p>
                                {t.about.paragraphTwo}
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200">
                            <p className="text-lg font-medium italic text-secondary-foreground">
                                {t.about.mission}
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlightIcons.map((Icon, id) => (
                            <div
                                key={id}
                                className={`
    glass rounded-2xl p-6
    transform transition-all duration-700 ease-out
    ${isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"}
  `}
                                style={{ transitionDelay: `${id * 150}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{t.about.highlights[id].title}</h3>
                                <p className="text-sm text-muted-foreground">{t.about.highlights[id].description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}