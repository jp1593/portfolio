// Button Imports
import { Button } from "../buttons/Button"
import jpLogo from "../../assets/jp1593logo.png"
import { useEffect, useState } from "react"

// Navigation Links
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-strong" : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center h-20 relative">

                {/* LEFT — Logo */}
                <div className="relative flex items-center h-full">
                    <a
                    href="#">
                    <img
                        src={jpLogo}
                        alt="JP Logo"
                        className="h-28 w-auto absolute top-1/2 -translate-y-1/2"
                        href="#"
                    />
                    </a>
                </div>

                {/* Navigation Links*/}
                <div className="flex justify-center">
                    <div className="glass rounded-full px-1 py-1/2 flex items-center gap-2">
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

                {/* Call to action - BTN */}
                <div className="flex justify-end">
                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>

            </nav>
        </header>

    )
}