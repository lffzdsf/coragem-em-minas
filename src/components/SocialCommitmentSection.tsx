export default function SocialCommitmentSection() {
  return (
    <section className="bg-background py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-on-scroll mb-10">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Compromisso social</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Cuidado como política pública.{" "}
            <span className="text-blue-vibrant">Presença como compromisso.</span>
          </h2>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-6" />
        </div>
        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <p>
            Ao longo de sua caminhada, Raphael defendeu uma ideia simples e poderosa: <strong className="text-foreground">saúde não pode ser privilégio de quem mora perto dos grandes centros</strong>.
          </p>
          <p>
            Essa visão se traduziu em ações concretas, como mutirões, campanhas preventivas, atendimentos itinerantes, projetos de escovação supervisionada, distribuição de kits de higiene bucal e iniciativas voltadas a crianças, famílias vulneráveis, comunidades rurais e povos tradicionais.
          </p>
          <p>
            A <strong className="text-foreground">Caravana Resgatando Sorrisos</strong> simboliza esse compromisso: levar atendimento, orientação e acolhimento a quem mais precisa, especialmente em regiões onde o poder público muitas vezes chega tarde ou não chega — incluindo localidades como São João das Missões e comunidades indígenas do Norte de Minas.
          </p>
          <p>
            Mais do que uma ação social, essa experiência revelou um modelo de liderança: <strong className="text-foreground">descentralizar, aproximar, ouvir e agir</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
