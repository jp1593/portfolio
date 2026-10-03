const en = {
  meta: {
    title: "Juan Pablo Estrada Lucero | Software Engineer",
    description: "Juan Pablo Estrada Lucero is a software engineer focused on backend engineering and full-stack development. Explore his projects, certifications, and experience.",
  },
  nav: {
    about: "About", certifications: "Certifications", projects: "Projects", experience: "Experience",
    contact: "Contact Me", openMenu: "Open menu", closeMenu: "Close menu", logo: "JP Logo",
    language: "Language", english: "English", spanish: "Spanish",
  },
  contact: {
    title: "Contact Juan Pablo", name: "Name", email: "Email", company: "Company / Organization",
    project: "Project / Role", message: "Message", namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com", companyPlaceholder: "Your organization (optional)",
    projectPlaceholder: "Project name or job title", messagePlaceholder: "Tell me why you're reaching out",
    send: "Send message", sending: "Sending…", close: "Close", cancel: "Cancel",
    success: "Message sent. Thank you for reaching out!", error: "The message could not be sent. Please try again.",
    required: "This field is required.", invalidEmail: "Enter a valid email address.", tooLong: "This field is too long.",
  },
  hero: {
    role: "Software Engineer", headlineStart: "Transforming", ideas: "ideas", headlineMiddle: "into", reality: "reality",
    intro: "Welcome to the digital workspace of Juan Pablo Estrada Lucero - A Software Engineer focused on Backend Engineering and Full-Stack Development. With a core proficiency in Python (Django) and JavaScript (React), I build seamless, high-performance web and mobile applications.",
    download: "Download CV", follow: "Follow:", techStack: "Tech Stack:", scroll: "Scroll", avatar: "Hawk Avatar",
    github: "GitHub profile", linkedin: "LinkedIn profile", x: "X profile",
  },
  about: {
    eyebrow: "About Me", headingStart: "Diving deep", headingEnd: "into technology",
    paragraphOne: "I’m a Software Engineer specializing in backend development, with full stack experience that allows me to understand the entire product lifecycle. I’m a fast learner who enjoys working with new technologies and finding the best way to apply them to real-world problems. I’ve been involved in both technical and non-technical aspects of projects, which helps me build systems that are not only functional, but well-structured, scalable, and reliable.",
    paragraphTwo: "My long-term goal is to become a Tech Lead, leading teams and building solid backend systems while staying close to the code. Every day, I focus on improving my skills, learning from challenges, and staying curious about how technology can create real impact.",
    mission: "My mission is to build solid backend systems that help great ideas come to life. I focus on learning every day, writing clean and reliable code, and creating software that actually makes a difference.",
    highlights: [
      { title: "Problem Solving", description: "Analyzing complex challenges to engineer efficient, scalable, and creative technical solutions." },
      { title: "Clean Code", description: "Writing maintainable, well-documented, and performant code that follows industry best practices." },
      { title: "Collaboration", description: "Committed to a culture of collective growth, sharing knowledge through documentation and contributing to a supportive, high-performing dev environment." },
      { title: "Innovation", description: "Staying ahead of the curve by integrating modern frameworks and emerging technologies into production." },
    ],
  },
  certs: {
    eyebrow: "Certifications", headingStart: "Knowledge", headingEnd: "that gives me the lead.",
    intro: "Continuous learning turned into action. These certifications validate my commitment to building better, faster, and smarter.",
    issuedBy: "Issued by:", credentialId: "Credential ID:", linkLabel: "Certification Link",
    other: "Checkout my other certifications",
    descriptions: [
      "Solid understanding of Git, GitHub workflows, branching strategies, and collaborative development best practices.",
      "Foundational Python skills focused on data analysis, problem-solving, and working with structured datasets.",
      "Stanford’s introductory programming course covering problem-solving, algorithms, and core programming principles.",
      "Fundamentals of Scrum framework, agile principles, team roles, and iterative product development.",
      "Core project management concepts including planning, risk management, stakeholder communication, and execution strategies.",
    ],
  },
  projects: {
    eyebrow: "My Work", headingStart: "Real-World", headingEnd: "Projects.",
    intro: "This is where you’ll find some of the projects I’ve built, from full-stack apps to backend systems. Each one reflects what I enjoy most: solving problems, learning new things, and turning ideas into working software.",
    titles: ["Ubymed — Client App", "Ubymed Partners — Provider App"],
    descriptions: [
      "Mobile healthcare application built for patients and users to request and manage medical services. I developed and refactored features for both Android and iOS using React Native and Django, improved app stability and performance, and implemented secure token management between frontend and backend. I also maintained backend services with Docker and Nginx and contributed to code quality by reviewing pull requests and improving team workflows.",
      "Mobile platform built for healthcare providers (doctors and laboratories) to accept and manage service requests. I led feature development including maps with directions, autocomplete, and place search, optimized provider workflows, and improved system reliability. I also implemented secure token synchronization, maintained backend services with Docker and Nginx, and strengthened collaboration through pull request reviews and a branch management strategy that reduced conflicts and improved delivery speed.",
    ],
    videoLabel: "Ubymed client app preview", playVideo: "Play project video", theory: "From Theory to Practice",
    application: "See how I apply these skills to build real-world solutions and scalable applications.",
    explore: "Explore My Code", github: "View GitHub Projects",
  },
  experience: {
    eyebrow: "Engineering Journey", headingStart: "My professional roadmap:", headingEnd: "solving problems and shipping code.",
    intro: "From internships to professional roles.",
    companySuffixes: ["", "", " - Internship", ""],
    periods: ["Feb 2025 - Present", "Jun 2024 - Jul 2024", "May 2023 - Jul 2023", "Jun 2022 - Jul 2022"],
    roles: ["Freelance Full Stack Developer", "Full Stack Developer - Internship", "IT Analyst - Internship", "Full Stack Developer - Internship"],
    descriptions: [
      "At Ubymed S.A., I worked as a Full Stack Developer. Contributing to the development and maintenance of the mobile application on both Android and iOS platforms. I implemented new features and refactored existing code using React Native and Python/Django, improving app stability and performance. I managed deployment processes through Apple Developer and Google Play Console, maintained backend services with Docker and Nginx, and optimized token management between frontend and backend. Additionally, I developed a maps feature with directions, autocomplete, and place search, and built production and testing versions using Expo EAS. During one month, I reviewed and approved pull requests and proposed a branch management strategy that enhanced team collaboration and reduced merge conflicts.",
      "After being on a period of internship on Suministros & Alimentos S.A. I proposed a project to develop a web application aimed at ensuring the accuracy and transparency of data registered by supervisors across various factory areas. This agilize the analitics made by the continues improvent area in which I was working on. Key features of the application included secure logins with company email accounts, efficient data management and transformation capabilities, and responsive views for both mobile and laptop devices.",
      "During my internship at Tribal Worldwide, I gained experience in various areas. I primarily focused on administrative tasks, such as improving the work distribution process, participating on infrastructure projects and identifying suitable suppliers for internal projects. Additionally, I worked as an IT analyst, providing necessary services and support to users. In the DevOps area, I assisted with website renewals and the migration of development environment",
      "I settled during an internship at WAU company, with the task of contributing to the initial development of a CRM system that would contribute to the objectives and needs of the company regarding customer contact. I contibute to the system development using Node.Js, JavaScript, MySql, Boostrap and Jquery. In addition to the development, I made the documentation and mockups previously, going through the evaluation process of both of them. Then I was followed up in the assigned activities through daily meetings using the SCRUM methodology.",
    ],
  },
};

export default en;
