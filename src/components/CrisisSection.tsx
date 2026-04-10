const keywords = ["Resistência", "Coragem", "Firmeza", "Legitimidade", "Autonomia", "Defesa"];

export default function CrisisSection() {
  return (
    <section className="relative py-24 md:py-36 bg-navy-deep section-padding overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep opacity-80" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">Nos momentos mais difíceis</span>
        </div>

        {/* Central quote */}
        <div className="text-center mb-16 animate-on-scroll-scale">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark leading-tight max-w-4xl mx-auto">
            Quando a luta ficou mais dura,{" "}
            <span className="text-gradient-gold">ele não recuou.</span>
          </h2>
        </div>

        {/* Text blocks */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Em um dos períodos mais conturbados da história recente do CRO-MG, Raphael esteve no centro de um grande enfrentamento institucional. Diante das intervenções promovidas pelo CFO no Conselho Mineiro, ele não recuou. Ao contrário: se manteve firme, enfrentou o conflito, defendeu a autonomia do CRO-MG e lutou para restabelecer a legitimidade da instituição.
          </p>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Enquanto muitos poderiam ter escolhido o silêncio ou a acomodação, Raphael decidiu enfrentar. Foi à luta política, institucional e judicial. Se posicionou publicamente, sustentou sua defesa com coragem e se tornou o principal nome na resistência em favor do Conselho mineiro e de sua autonomia.
          </p>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
          {keywords.map((word, i) => (
            <span
              key={word}
              className="border border-gold/30 text-gold px-5 py-2.5 text-sm font-semibold tracking-wide rounded-sm hover:bg-gold/10 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
