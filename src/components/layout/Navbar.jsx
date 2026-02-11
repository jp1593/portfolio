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
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : " bg-transparent py-5"} z-50`}>
            <nav className="container ml-50 px-6 flex items-center justify-between">
                <a href="#" className="relative flex items-center h-8 w-30">
                    <img
                        src={jpLogo}
                        alt="JP Logo"
                        className="h-30 w-auto absolute left-12 top-1/2 -translate-y-1/2"
                    />
                </a>



                {/* Desktop Nav */}
                <div className="flex items-center gap-1 mr-8">
                    <div className="glass rounded-full px-2 py-1 items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full ">{link.label}</a>
                        ))}
                    </div>
                </div>
                {/* Call to action - BTN */}
                <div>
                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>
            </nav>
        </header>

    )
}