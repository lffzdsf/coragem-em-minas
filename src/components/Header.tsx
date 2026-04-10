import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import logoImg from "@/assets/logo-raphael-mota.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Quem é", href: "#about" },
  { label: "Trajetória", href: "#timeline" },
  { label: "Valores", href: "#pillars" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
        <button onClick={() => handleClick("#hero")}>
          <img src={logoImg} alt="Raphael Mota" className="h-8 md:h-10 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-on-dark-muted hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://instagram.com/raphamota"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold/10 border border-gold/30 text-gold px-5 py-2 text-sm font-medium rounded-sm hover:bg-gold/20 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Instagram size={16} />
            Acompanhe
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-on-dark p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/10">
          <nav className="flex flex-col py-4 section-padding gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-on-dark-muted hover:text-gold text-left py-3 text-base font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
