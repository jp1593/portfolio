import Ubymed from "../../assets/projects/Ubymed.mp4"
import UbymedPartners from "../../assets/projects/UbymedPartners.png"

const projects = [
    {
        title: "Ubymed — Client App",
        description:
            "Mobile healthcare application built for patients and users to request and manage medical services. I developed and refactored features for both Android and iOS using React Native and Django, improved app stability and performance, and implemented secure token management between frontend and backend. I also maintained backend services with Docker and Nginx and contributed to code quality by reviewing pull requests and improving team workflows.",
        media: { type: "video", src: Ubymed },
        tags: ["React Native", "Expo", "Django", "Python", "Docker", "Nginx", "AWS"],
        link: "#",
        github: "#"
    },
    {
        title: "Ubymed Partners — Provider App",
        description:
            "Mobile platform built for healthcare providers (doctors and laboratories) to accept and manage service requests. I led feature development including maps with directions, autocomplete, and place search, optimized provider workflows, and improved system reliability. I also implemented secure token synchronization, maintained backend services with Docker and Nginx, and strengthened collaboration through pull request reviews and a branch management strategy that reduced conflicts and improved delivery speed.",
        media: { type: "image", src: UbymedPartners },
        tags: ["React Native", "Expo", "Django", "Python", "Docker", "Nginx", "AWS"],
        link: "#",
        github: "#"
    }
]


export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/70 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/85 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 reltive z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
                        Real-World
                        <span className="font-sans italic font-normal text-white">
                            {" "}
                            Projects.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        This is where you’ll find some of the projects I’ve built,
                        from full-stack apps to backend systems. Each one reflects what I enjoy most: solving problems, learning new things, and turning ideas into working software.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((item, id) => (
                        <div key={id} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(id + 1) * 100}ms` }}>
                            <div className="relative overflow-hidden aspect-video">
                                {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /> */}
                                {item.media.type === "video" ? (
                                    <video
                                        src={item.media.src}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={item.media.src}
                                        alt={item.title}
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
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
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
        </section >
    )
}