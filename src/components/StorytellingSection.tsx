const blocks = [
  {
    type: "quote" as const,
    text: "Uma liderança testada na prática.",
  },
  {
    type: "paragraph" as const,
    text: "À frente do Conselho Regional de Odontologia de Minas Gerais, Raphael Mota ampliou sua atuação pública e consolidou uma gestão marcada por presença, descentralização, responsabilidade e defesa da classe.",
  },
  {
    type: "paragraph" as const,
    text: "Sua liderança aproximou o Conselho dos municípios, dos profissionais, das instituições de ensino, dos voluntários e das demandas reais da sociedade. O resultado foi uma atuação mais próxima, mais humana e mais conectada com Minas Gerais.",
  },
  {
    type: "paragraph" as const,
    text: "No CRO-MG, Raphael enfrentou decisões difíceis, fortaleceu ações sociais, defendeu prerrogativas profissionais e mostrou capacidade de gestão em momentos de pressão.",
  },
  {
    type: "quote" as const,
    text: "Essa experiência não resume sua trajetória. Mas comprova sua capacidade de liderar.",
  },
];

export default function StorytellingSection() {
  return (
    <section className="bg-navy py-24 md:py-36 section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        {blocks.map((block, i) =>
          block.type === "quote" ? (
            <div
              key={i}
              className={`animate-on-scroll ${i % 2 === 0 ? "animate-on-scroll-left" : "animate-on-scroll-right"}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="border-l-2 pl-6 md:pl-10" style={{ borderColor: 'hsl(var(--green-accent) / 0.6)' }}>
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-snug">
                  {block.text}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="animate-on-scroll max-w-2xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
                {block.text}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
