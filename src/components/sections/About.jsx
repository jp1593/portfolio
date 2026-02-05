import { Code2, Lightbulb, Search, Users } from "lucide-react"

const highlights = [
    {
        icon: Search,
        title: "Problem Solving",
        description: "Analyzing complex challenges to engineer efficient, scalable, and creative technical solutions."
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, well-documented, and performant code that follows industry best practices."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Committed to a culture of collective growth, sharing knowledge through documentation and contributing to a supportive, high-performing dev environment."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead of the curve by integrating modern frameworks and emerging technologies into production."
    }

]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Seeking the depth
                            <br />
                            <span className="font-sans italic font-normal text-white">
                                {" "}
                                on technology
                            </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I’m a Software Engineer specializing in backend development, with full stack experience that allows me to understand the entire product lifecycle.
                                I’m a fast learner who enjoys working with new technologies and finding the best way to apply them to real-world problems.
                                I’ve been involved in both technical and non-technical aspects of projects, which helps me build systems that are not only functional, but well-structured, scalable, and reliable.
                            </p>
                            <p>
                                My long-term goal is to become a Tech Lead, leading teams and building solid backend systems while staying close to the code.
                                Every day, I focus on improving my skills, learning from challenges, and staying curious about how technology can create real impact.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-200">
                            <p className="text-lg font-medium italic text-secondary-foreground">
                                My mission is to build solid backend systems that help great ideas come to life. I focus on learning every day, writing clean and reliable code, and creating software that actually makes a difference.
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, id) => (
                            <div key={id} className="glass rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${(id + 1) * 100}ms` }}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}