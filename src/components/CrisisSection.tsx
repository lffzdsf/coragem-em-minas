const keywords = ["Coragem", "Firmeza", "Legitimidade", "Autonomia", "Defesa de Minas"];

export default function CrisisSection() {
  return (
    <section className="relative py-24 md:py-36 bg-navy-deep section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep opacity-80" />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(var(--green-accent) / 0.4), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(var(--green-accent) / 0.4), transparent)' }} />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Teste de caráter</span>
        </div>

        <div className="text-center mb-16 animate-on-scroll-scale">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark leading-tight max-w-4xl mx-auto">
            Coragem nos{" "}
            <span className="text-gradient-gold">momentos difíceis.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mb-16 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Toda liderança é revelada nos momentos de pressão. Em um dos períodos mais delicados da história recente do CRO-MG, Raphael esteve à frente de uma resistência institucional em defesa da autonomia, da legitimidade e do respeito à representação mineira.
          </p>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Diante das intervenções e disputas que atingiram o Conselho, manteve posição firme, buscou os caminhos institucionais e jurídicos cabíveis e se tornou uma das principais vozes na defesa da Odontologia de Minas Gerais.
          </p>
          <p className="text-on-dark text-lg md:text-xl leading-relaxed font-medium">
            Quando o silêncio poderia ser mais cômodo, Raphael escolheu se posicionar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
          {keywords.map((word, i) => (
            <span
              key={word}
              className="border border-green-accent/40 text-green-accent px-5 py-2.5 text-sm font-semibold tracking-wide rounded-sm hover:bg-green-accent/10 transition-all duration-300 cursor-default"
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
