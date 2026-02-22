import { Button } from "../buttons/Button"
import jpLogo from "../../assets/jp1593logo.png"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const recipient = 'juanpablo08082002@hotmail.com'
    const subject = '[Project/Role Inquiry] - Juan Pablo | [Your Company Name]';
    const body = `Hello Juan Pablo,

I am reaching out regarding: [Project Name / Job Title]

Company/Organization: [Enter Name]
Message: [Briefly describe why you are reaching out]

You can best reach me at: [Phone/Email]

Best regards,
[Your Name]`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-300 u${isScrolled ? "glass-strong" : "bg-transparent"} z-50`}
        >
            <nav className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center h-18">

                {/* Logo */}
                <div className="relative flex items-center h-full">
                    <a href="#">
                        <img
                            src={jpLogo}
                            alt="JP Logo"
                            className="h-28 w-auto absolute top-1/2 -translate-y-1/2 -left-6 md:left-0 cursor-pointer"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center">
                    <div className="glass rounded-full px-0 py-1/2 flex items-center gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Button */}

                <div className="hidden md:flex justify-end">
                    <a href={mailtoUrl}>
                        <Button size="sm">
                            Contact Me
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden justify-end col-span-2">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6">
                    <div className="glass rounded-2xl p-4 flex flex-col gap-3 mt-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="px-4 py-3 rounded-lg hover:bg-white/10"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href={mailtoUrl}>
                            <Button size="sm" className="mt-2">
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
