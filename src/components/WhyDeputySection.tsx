export default function WhyDeputySection() {
  return (
    <section id="why" className="bg-background py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-on-scroll mb-10">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Novo momento</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Por que esse{" "}
            <span className="text-blue-vibrant">novo momento?</span>
          </h2>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-6" />
        </div>
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <p>
            Depois de anos atuando na saúde, na representação profissional, nas ações sociais e na defesa de Minas, Raphael Mota chega a uma nova etapa de sua vida pública.
          </p>
          <p>
            Sua pré-candidatura a deputado federal nasce da convicção de que <strong className="text-foreground">Minas precisa de representantes com coragem</strong> para enfrentar problemas reais, presença para ouvir as pessoas e experiência para transformar demandas em ação.
          </p>
          <p>
            Raphael conhece a realidade dos profissionais, dos municípios, das comunidades vulneráveis e das regiões que ainda esperam por políticas públicas mais eficientes.
          </p>
          <p className="text-foreground font-medium">
            Essa caminhada não é um salto no vazio. É a continuidade de uma trajetória construída com trabalho, responsabilidade e compromisso com Minas Gerais.
          </p>
        </div>
      </div>
    </section>
  );
}
