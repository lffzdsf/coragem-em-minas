const highlights = [
  "Saúde pública de verdade",
  "Valorização profissional",
  "Desenvolvimento do interior",
  "Transparência e combate à corrupção",
  "Educação e prevenção",
  "Presença nos municípios",
];

export default function MinasRepresentationSection() {
  return (
    <section className="py-24 md:py-32 bg-navy-deep section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Minas</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight mb-8">
            Minas precisa de representação{" "}
            <span className="text-gradient-gold">com atitude</span>
          </h2>
          <div className="space-y-4 text-on-dark-muted text-base md:text-lg leading-relaxed">
            <p>
              Minas Gerais precisa de lideranças que conheçam o interior, entendam a saúde pública, valorizem os profissionais e tenham coragem para enfrentar problemas difíceis.
            </p>
            <p>
              A caminhada de Raphael nasce da Odontologia, mas não se limita a ela. É uma trajetória ligada à gestão, à saúde, à educação, ao interior, à transparência e ao compromisso com uma Minas mais ouvida, mais respeitada e mais forte.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 animate-on-scroll">
          {highlights.map((h, i) => (
            <div
              key={h}
              className="border border-blue-vibrant/30 bg-navy-light/30 rounded-sm px-5 py-4 hover:border-gold/50 hover:bg-navy-light/60 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <p className="text-on-dark text-sm md:text-base font-medium">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
