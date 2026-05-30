import InstagramEmbed from "./InstagramEmbed";

export default function FightCorruptionSection() {
  return (
    <section className="py-24 md:py-32 bg-navy section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Enfrentamento</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight mb-6">
            Quando a coragem virou{" "}
            <span className="text-gradient-gold">enfrentamento</span>
          </h2>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Toda mudança real exige coragem para enfrentar estruturas antigas. Raphael esteve ao lado de lideranças que denunciaram irregularidades, questionaram abusos e ajudaram a abrir um novo capítulo para a Odontologia brasileira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="animate-on-scroll-left order-2 md:order-1">
            <p className="text-on-dark-muted text-base md:text-lg leading-relaxed mb-4">
              Essa não foi uma luta de bastidores. Foi uma defesa pública por moralização, transparência e reconstrução.
            </p>
            <p className="text-on-dark text-base md:text-lg leading-relaxed">
              Depois de quase um ano de enfrentamento, a decisão judicial marcou uma vitória histórica para quem acreditava que era possível reconstruir a Odontologia com dignidade, verdade e transparência.
            </p>
          </div>
          <div className="animate-on-scroll-right order-1 md:order-2 max-w-md mx-auto w-full">
            <InstagramEmbed url="https://www.instagram.com/p/DRgG8U8kTUA/" />
          </div>
        </div>

        <div className="text-center animate-on-scroll mb-10">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-dark leading-tight">
            Não foi promessa. <span className="text-gradient-gold">Foi enfrentamento. Foi resultado.</span>
          </p>
        </div>

        <div className="flex justify-center animate-on-scroll">
          <a
            href="https://www.instagram.com/raphamota/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/60 text-gold px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-gold hover:text-navy-deep transition-all duration-300 rounded-sm"
          >
            CONHEÇA A TRAJETÓRIA
          </a>
        </div>
      </div>
    </section>
  );
}
