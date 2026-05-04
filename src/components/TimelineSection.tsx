const timelineItems = [
  { year: "Formação", text: "Formado em Odontologia pela PUC Minas, Raphael inicia sua trajetória profissional com olhar voltado para a saúde, o cuidado e a realidade das pessoas." },
  { year: "Interior de Minas", text: "Aproxima-se de municípios, comunidades vulneráveis, regiões de difícil acesso e populações que enfrentam ausência de assistência básica." },
  { year: "Compromisso social", text: "Participa, incentiva e fortalece mutirões, campanhas preventivas, atendimentos itinerantes e ações humanitárias voltadas a quem mais precisa." },
  { year: "Liderança institucional", text: "Assume funções de representação e gestão, ampliando sua atuação pública e fortalecendo sua presença em defesa da Odontologia mineira." },
  { year: "Presidência do CRO-MG", text: "Conduz uma gestão marcada por descentralização, interiorização, defesa profissional e presença social em todo o estado." },
  { year: "Momentos de enfrentamento", text: "Enfrenta disputas institucionais, defende a autonomia da representação mineira e reafirma sua postura de firmeza diante das pressões." },
  { year: "Novo momento público", text: "Projeta sua experiência, sua presença e sua coragem para uma nova etapa: a construção de uma representação federal por Minas Gerais." },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Linha do tempo</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Uma caminhada construída em{" "}
            <span className="text-blue-vibrant">etapas reais</span>
          </h2>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-6" />
        </div>

        <div className="relative">
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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" style={{ backgroundColor: 'hsl(var(--green-accent))' }} />

                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="font-heading text-green-accent font-bold text-lg md:text-xl block mb-2">{item.year}</span>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>

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
