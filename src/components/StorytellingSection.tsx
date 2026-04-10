const blocks = [
  {
    type: "quote" as const,
    text: "Raphael Mota não é apenas um nome. É uma história de coragem.",
  },
  {
    type: "paragraph" as const,
    text: "Uma trajetória construída com trabalho de verdade, enfrentando desafios reais e tomando decisões difíceis quando muitos escolheram se calar.",
  },
  {
    type: "paragraph" as const,
    text: "Nascido em Belo Horizonte, cirurgião-dentista formado pela PUC Minas, Raphael conhece de perto a realidade de quem luta todos os dias. Sabe o que é estar na linha de frente, sabe o que é ser cobrado, sabe o que é não poder recuar.",
  },
  {
    type: "quote" as const,
    text: "Enquanto muitos silenciaram, ele lutou.",
  },
  {
    type: "paragraph" as const,
    text: "Antes de chegar à presidência do Conselho Regional de Odontologia, percorreu cada etapa com responsabilidade. Aprendeu por dentro, viveu os desafios da autarquia e se preparou para liderar com consciência e firmeza.",
  },
  {
    type: "quote" as const,
    text: "Esse é o tipo de liderança que não se constrói em discurso. Se constrói na prática.",
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
