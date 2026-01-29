// Button Imports
import { Button } from "../buttons/Button"

// Navigation Links
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#hero", label: "Hero" },
    { href: "#projects", label: "Projects" },

]

export const NavBar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent py-5 right-0 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    JP<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="flex items-center gap-1">
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