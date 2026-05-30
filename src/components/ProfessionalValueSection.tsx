import InstagramEmbed from "./InstagramEmbed";

const blocks = [
  {
    tag: "Piso salarial e dignidade",
    text: "Em Brasília, Raphael acompanhou avanços importantes para o piso salarial da Odontologia e para os projetos que tratam da valorização dos profissionais. A defesa é clara: ninguém fica para trás.",
    highlight: "Piso justo é respeito a quem cuida.",
    url: "https://www.instagram.com/p/DXJfBuUJuse/",
  },
  {
    tag: "Reconhecimento de ASBs e TSBs",
    text: "A movimentação em Brasília ajudou a destravar projetos relacionados aos auxiliares e técnicos em saúde bucal. Com relatoria assumida no Senado, a pauta ganhou novo fôlego e uma chance real de avançar.",
    highlight: "Toda a equipe de saúde bucal merece reconhecimento.",
    url: "https://www.instagram.com/p/DXeG5lzjgHd/",
  },
];

export default function ProfessionalValueSection() {
  return (
    <section className="py-24 md:py-32 bg-navy section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Valorização</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight mb-6">
            Valorização profissional{" "}
            <span className="text-gradient-gold">não é discurso</span>
          </h2>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Valorizar a Odontologia é reconhecer todos que fazem o cuidado acontecer. Cirurgiões-dentistas, auxiliares e técnicos caminham juntos. Uma categoria forte não se constrói isolando profissionais, mas unindo quem está na ponta, na gestão, no atendimento e na luta por dignidade.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20 mb-16">
          {blocks.map((b, i) => (
            <div
              key={b.tag}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="animate-on-scroll-left">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-vibrant mb-3">
                  {b.tag}
                </span>
                <p className="text-on-dark-muted text-base md:text-lg leading-relaxed mb-5">{b.text}</p>
                <div className="border-l-2 pl-5 py-1" style={{ borderColor: 'hsl(var(--gold))' }}>
                  <p className="text-on-dark font-heading text-lg md:text-xl font-semibold leading-snug">
                    {b.highlight}
                  </p>
                </div>
              </div>
              <div className="animate-on-scroll-right max-w-md mx-auto w-full">
                <InstagramEmbed url={b.url} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10 animate-on-scroll">
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-dark leading-tight max-w-3xl mx-auto">
            A Odontologia sempre foi trabalho em equipe. E quem sustenta o cuidado diário merece{" "}
            <span className="text-gradient-gold">respeito, salário digno e reconhecimento.</span>
          </p>
        </div>

        <div className="flex justify-center animate-on-scroll">
          <a
            href="https://www.instagram.com/channel/AbYTSLzsSRFTuT2c/?igsh=YWo3dXdqZTh2MWl6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm"
          >
            QUERO APOIAR ESSA LUTA
          </a>
        </div>
      </div>
    </section>
  );
}
