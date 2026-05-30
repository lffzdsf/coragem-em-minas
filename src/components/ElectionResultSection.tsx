import InstagramEmbed from "./InstagramEmbed";

export default function ElectionResultSection() {
  return (
    <section className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Urnas</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Resultado nas urnas,{" "}
            <span className="text-blue-vibrant">responsabilidade na prática</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A vitória da Chapa 4 mostrou que a categoria queria mudança, representatividade e um Conselho mais próximo dos profissionais. Com <strong className="text-foreground">60,99% dos votos</strong> e <strong className="text-foreground">12.502 votos de confiança</strong>, o resultado confirmou uma mensagem clara: a Odontologia queria ser ouvida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div className="animate-on-scroll-left max-w-md mx-auto w-full">
            <InstagramEmbed url="https://www.instagram.com/p/DSmpZhPDtaW/" />
          </div>

          <div className="animate-on-scroll-right">
            <div className="bg-card border border-gold/30 rounded-sm p-8 md:p-10 space-y-6">
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold leading-none">60,99%</p>
                <p className="text-muted-foreground text-sm mt-2">dos votos</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-gradient-gold leading-none">12.502</p>
                <p className="text-muted-foreground text-sm mt-2">votos de confiança</p>
              </div>
              <div className="h-px bg-border" />
              <p className="font-heading text-lg md:text-xl text-foreground font-semibold">
                Uma vitória histórica da mudança
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto animate-on-scroll">
          A partir dali, a responsabilidade ficou ainda maior: transformar confiança em trabalho, presença e entrega.
        </p>
      </div>
    </section>
  );
}
