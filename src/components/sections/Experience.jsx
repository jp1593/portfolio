const experiences = [
    {
        period: "Feb 2025 - Present",
        role: "Freelance Full Stack Developer",
        company: "Ubymed",
        description: "At Ubymed SA., I worked as a Full Stack Developer. Contributing to the development and maintenance of the mobile application on both Android and iOS platforms. I implemented new features and refactored existing code using React Native and Python/Django, improving app stability and performance. I managed deployment processes through Apple Developer and Google Play Console, maintained backend services with Docker and Nginx, and optimized token management between frontend and backend. Additionally, I developed a maps feature with directions, autocomplete, and place search, and built production and testing versions using Expo EAS. During one month, I reviewed and approved pull requests and proposed a branch management strategy that enhanced team collaboration and reduced merge conflicts.",
        technologies: ["React Native", "Django", "PostgreSQL", "Amazon Web Services (AWS)", "Docker", "Nginx", "Google API", "Python", "Javascript", "Expo"],
        current: true,
    },
    {
        period: "Jun 2024 - Jul 2024",
        role: "Full Stack Developer - Internship",
        company: "Suministros & Alimentos SA.",
        description: "After being on a period of internship on Suministros & Alimentos SA. I proposed a project to develop a web application aimed at ensuring the accuracy and transparency of data registered by supervisors across various factory areas. This agilize the analitics made by the continues improvent area in which I was working on. Key features of the application included secure logins with company email accounts, efficient data management and transformation capabilities, and responsive views for both mobile and laptop devices.",
        technologies: ["React", "Javascript", "Django", "Python", "Google API", "SQL"],
        current: false,
    },
    {
        period: "May 2023 - Jul 2023",
        role: "IT Analyst - Internship",
        company: "Tribal Worldwide Guatemala - Internship",
        description: "During my internship at Tribal Worldwide, I gained experience in various areas. I primarily focused on administrative tasks, such as improving the work distribution process, participating on infrastructure projects and identifying suitable suppliers for internal projects. Additionally, I worked as an IT analyst, providing necessary services and support to users. In the DevOps area, I assisted with website renewals and the migration of development environment",
        technologies: ["AWS"],
        current: false,
    },
    {
        period: "Jun 2022 - Jul 2022",
        role: "Full Stack Developer - Internship",
        company: "WAU",
        description: "I settled during an internship at WAU company, with the task of contributing to the initial development of a CRM system that would contribute to the objectives and needs of the company regarding customer contact. I contibute to the system development using Node.Js, JavaScript, MySql, Boostrap and Jquery. In addition to the development, I made the documentation and mockups previously, going through the evaluation process of both of them. Then I was followed up in the assigned activities through daily meetings using the SCRUM methodology.I settled during an internship at WAU company, with the task of contributing to the initial development of a CRM system that would contribute to the objectives and needs of the company regarding customer contact. I contibute to the system development using Node.Js, JavaScript, MySql, Boostrap and Jquery. In addition to the development, I made the documentation and mockups previously, going through the evaluation process of both of them. Then I was followed up in the assigned activities through daily meetings using the SCRUM methodology.",
        technologies: ["Node.js", "React.js", "MySQL"],
        current: false,
    }
]

export const Experience = () => {
    return (
        <section id="experience"
            className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Engineering Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        My professional roadmap: <span className="font-sans italic font-normal text-white"> solving problems and shipping code.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        From internships to professional roles.
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/50 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(138, 0, 196, 0.8)]" />
                    {/* Experiences */}
                    <div className="space-y-12">
                        {experiences.map((exp, id) => (
                            <div key={id} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(id + 1) * 150}ms` }}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-85" />}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${id % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
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