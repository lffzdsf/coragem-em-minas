const timelineItems = [
  { year: "2019", text: "Atuou como Diretor-Secretário na diretoria efetiva do Conselho, aprofundando seu conhecimento sobre gestão, representação institucional e defesa da classe." },
  { year: "2020", text: "Assume a presidência do CRO-MG e inicia uma gestão marcada por presença, firmeza e defesa da Odontologia mineira." },
  { year: "2021", text: "Fortalece a atuação pública do Conselho com foco em ética, orientação profissional e valorização da categoria." },
  { year: "2022", text: "Amplia a presença institucional do CRO-MG em ações sociais, articulações estratégicas e agendas de interesse da classe odontológica." },
  { year: "2023", text: "Consolida uma gestão combativa, com forte atuação em fiscalização, ética profissional e defesa das prerrogativas da Odontologia." },
  { year: "2024", text: "Mantém protagonismo institucional e fortalece a presença do CRO-MG em debates importantes para os profissionais de Minas Gerais." },
  { year: "2024–25", text: "Enfrenta um dos períodos mais difíceis da história recente do CRO-MG, marcado por intervenções e forte disputa institucional com o CFO." },
  { year: "Jul 2025", text: "Retoma a presidência em um momento simbólico de resistência e reafirmação de sua liderança." },
  { year: "2026", text: "É reconduzido à presidência e consolida seu nome como uma das principais lideranças da história recente do CRO-MG." },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Linha do tempo</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Uma trajetória de{" "}
            <span className="text-blue-vibrant">liderança</span>
          </h2>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{ background: 'linear-gradient(to bottom, hsl(var(--green-accent)), hsl(var(--blue-vibrant)), hsl(var(--green-accent)))' }} />

          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 animate-on-scroll ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" style={{ backgroundColor: 'hsl(var(--green-accent))' }} />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="font-heading text-green-accent font-bold text-lg md:text-xl block mb-2">{item.year}</span>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
