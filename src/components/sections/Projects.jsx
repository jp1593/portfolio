import Ubymed from "../../assets/projects/Ubymed.mp4"
import UbymedPoster from "../../assets/projects/Ubymed-poster.webp"
import UbymedPartners from "../../assets/projects/UbymedPartners.png"
import { ArrowDown, ExternalLink, Github } from "lucide-react"
import { Button } from "../buttons/Button"
import { useInView } from "../../hooks/useInView";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/useLanguage";

const ProjectVideo = ({ src }) => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isNear, setIsNear] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);
    const [manualPlay, setManualPlay] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateMotion = () => setReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", updateMotion);
        return () => mediaQuery.removeEventListener("change", updateMotion);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsNear(true);
            setIsInView(entry.isIntersecting);
        }, { rootMargin: "800px 0px" });
        const node = containerRef.current;
        if (node) observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (isInView && !reducedMotion && isNear) {
            video.play().catch(() => {});
        } else if (!isInView || reducedMotion) {
            video.pause();
        }
    }, [isInView, isNear, reducedMotion]);

    useEffect(() => {
        if (manualPlay && reducedMotion && isInView) {
            videoRef.current?.play().catch(() => {});
        }
    }, [manualPlay, reducedMotion, isInView]);

    return (
        <div ref={containerRef} className="relative w-full h-full">
            <video
                ref={videoRef}
                src={isNear && (!reducedMotion || manualPlay) ? src : undefined}
                preload="none"
                autoPlay={isInView && !reducedMotion}
                muted
                loop
                playsInline
                onPlaying={() => setHasPlayed(true)}
                controls={reducedMotion && manualPlay}
                aria-label={t.projects.videoLabel}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <img
                src={UbymedPoster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${hasPlayed ? "opacity-0" : "opacity-100"}`}
            />
            {reducedMotion && !manualPlay && (
                <button type="button" onClick={() => setManualPlay(true)} className="absolute inset-0 z-20 flex items-center justify-center text-white font-medium bg-black/20">
                    {t.projects.playVideo}
                </button>
            )}
        </div>
    );
};

const projects = [
    {
        media: { type: "video", src: Ubymed },
        tags: ["React Native", "Expo", "Django", "Python", "Docker", "Nginx", "AWS"],
        link: "#",
        github: "#"
    },
    {
        media: { type: "image", src: UbymedPartners },
        tags: ["React Native", "Expo", "Django", "Python", "Docker", "Nginx", "AWS"],
        link: "#",
        github: "#"
    }
]


export const Projects = () => {
    const { t } = useLanguage();
    const [sectionRef, isVisible] = useInView({
        threshold: 0.2,
    });

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={sectionRef}>
            {/* Background */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/70 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/85 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 reltive z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase
    ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                        {t.projects.eyebrow}
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground
    ${isVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}`}>
                        {t.projects.headingStart}
                        <span className="font-sans italic font-normal text-white">
                            {" "}
                            {t.projects.headingEnd}
                        </span>
                    </h2>
                    <p className={`text-muted-foreground
    ${isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"}`}>
                        {t.projects.intro}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((item, id) => (
                        <div
                            key={id}
                            className={`group glass rounded-2xl overflow-hidden md:row-span-1
    transition-all duration-700 ease-out
    ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"}
    `}
                            style={{ animationDelay: `${(id + 1) * 150}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                {item.media.type === "video" ? (
                                    <ProjectVideo src={item.media.src} />
                                ) : (
                                    <img
                                        src={item.media.src}
                                        alt={t.projects.titles[id]}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}

                                <div
                                    className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                                />
                            </div>
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {t.projects.titles[id]}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{t.projects.descriptions[id]}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, index) => (
                                        <span key={index}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-boder/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-500"
                                        >
                                            {tag}</span>
                                    ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-6">
                {/* Enhanced Text: Connecting Certs to Projects */}
                <h3 className="text-secondary-foreground font-medium mb-2">
                    {t.projects.theory}
                </h3>
                <p className="text-muted-foreground max-w-md mb-4 text-sm">
                    {t.projects.application}
                </p>

                {/* The Animated Pointer */}
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                    {t.projects.explore}
                </span>
                <ArrowDown className="text-primary animate-bounce h-5 w-5" />

                <div className="flex items-center justify-center gap-4 mt-1">
                        <Button href="https://github.com/jp1593" target="_blank" rel="noopener noreferrer" className="bg-surface hover:text-white flex gap-2 items-center">
                            {t.projects.github} <Github size={18} />
                        </Button>
                </div>
            </div>
        </section >
    )
}
