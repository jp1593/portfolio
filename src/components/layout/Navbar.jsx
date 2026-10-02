import { Button } from "../buttons/Button"
import jpLogo from "../../assets/jp1593logo.png"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../../i18n/useLanguage"

export const NavBar = ({ onContactClick }) => {
    const { language, setLanguage, t } = useLanguage()
    const navLinks = [
        { href: "#about", label: t.nav.about },
        { href: "#certifications", label: t.nav.certifications },
        { href: "#projects", label: t.nav.projects },
        { href: "#experience", label: t.nav.experience },
    ]
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${isScrolled ? "glass-strong" : "bg-transparent shadow-none"}`}
        >
            <nav className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center h-18">

                {/* Logo */}
                <div className="relative flex items-center h-full">
                    <a href="#">
                        <img
                            src={jpLogo}
                            alt={t.nav.logo}
                            fetchPriority="high"
                            loading="eager"
                            className="h-28 w-auto absolute top-1/2 -translate-y-1/2 -left-6 md:left-0 cursor-pointer"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center">
                    <div className="glass rounded-full px-0 py-1/2 flex items-center gap-0 lg:gap-2">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-2 lg:px-4 py-2 text-muted-foreground hover:text-foreground rounded-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Button */}

                <div className="hidden md:flex justify-end items-center gap-4">
                    <LanguageSelector language={language} setLanguage={setLanguage} t={t} />
                    <Button onClick={onContactClick} size="sm">
                        {t.nav.contact}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden justify-end col-span-2">
                    <button type="button" aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div id="mobile-navigation" className="md:hidden px-6 pb-6">
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
                        <LanguageSelector language={language} setLanguage={setLanguage} t={t} />
                        <Button onClick={onContactClick} size="sm" className="mt-2">
                            {t.nav.contact}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

const LanguageSelector = ({ language, setLanguage, t }) => (
    <div role="group" aria-label={t.nav.language} className="flex items-center gap-1 text-sm text-muted-foreground">
        <button type="button" lang="en" aria-label={t.nav.english} aria-pressed={language === "en"} onClick={() => setLanguage("en")} className={`px-2 py-1 rounded focus-visible:outline-2 focus-visible:outline-primary ${language === "en" ? "text-foreground font-semibold" : "hover:text-foreground"}`}>EN</button>
        <span aria-hidden="true">|</span>
        <button type="button" lang="es" aria-label={t.nav.spanish} aria-pressed={language === "es"} onClick={() => setLanguage("es")} className={`px-2 py-1 rounded focus-visible:outline-2 focus-visible:outline-primary ${language === "es" ? "text-foreground font-semibold" : "hover:text-foreground"}`}>ES</button>
    </div>
);
