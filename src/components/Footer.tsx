const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quem é", href: "#about" },
  { label: "Trajetória", href: "#timeline" },
  { label: "Valores", href: "#pillars" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-on-dark mb-2">
              Raphael <span className="text-gold">Mota</span>
            </h3>
            <p className="text-on-dark-muted text-sm max-w-xs">
              Coragem, experiência e compromisso com Minas Gerais.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-on-dark-muted hover:text-gold text-sm transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'hsl(var(--green-accent) / 0.2)' }}>
          <p className="text-on-dark-muted text-xs">
            © {new Date().getFullYear()} Raphael Castro Mota. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Twitter", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-on-dark-muted hover:text-gold text-xs transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
