import backGroundImage from "../../assets/liquid-purple.jpg"
import hawk from "../../assets/hawk.jpeg"
import { Button } from "../buttons/Button"
import { AnimatedBorderButton } from "../buttons/AnimatedBorderButton"
import { ChevronDown, Download, Github, Linkedin, X } from "lucide-react"

const skills = [
    "JavaScript",
    "Python", "SQL", "React", "React Native", "Django",
    "Nginx", "Docker", "Postgres"
];

export const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/my-cv.pdf';
        link.download = 'Juan_Pablo_Estrada_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0">
                <img src={backGroundImage} alt="Background Image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>
            {/* Floating Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#8a00c4",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }} />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-fade-in animation-delay-100">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer
                            </span>
                        </div>
                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                                Transforming <span className="text-primary glow-text italic">ideas</span>
                                <br />
                                into <span className="text-amber-200 italic">reality</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                                Welcome to the digital workspace of Juan Pablo Estrada Lucero
                                - A Software Engineer focused on Backend Engineering and Full-Stack Development. With a core proficiency in Python
                                (Django) and JavaScript (React), I build seamless, high-performance web and mobile applications.
                            </p>
                        </div>
                        {/* Call to action - Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me
                            </Button>
                            <AnimatedBorderButton onClick={handleDownload}>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-300">
                            <span> Follow:</span>
                            {[
                                { icon: Github, href: "https://github.com/jp1593" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/juan-pablo-estrada-lucero-18936b247/" },
                                { icon: X, href: "https://x.com/JpEL_" }

                            ].map((social, id) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={id}
                                        href={social.href}
                                        className="p-2  rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    {/* Right Column - Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Avatar */}
                        <div className="rlative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src={hawk} alt="Hawk Avatar" className="w-full aspect-4/5 object-cover rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tech Stack */}
                <div className="mt-20 animate-fade-in  animation-delay-300">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Tech Stack:</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee w-max flex-nowrap">
                            {[...skills, ...skills, ...skills].map((skill, index) => (
                                <div key={index} className="shrink-0 px-8 py-4">
                                    <span> {skill}</span>
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
                    </div>

                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-300">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section >
    )
}
