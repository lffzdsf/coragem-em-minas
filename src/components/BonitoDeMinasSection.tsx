import { Calendar, MapPin, Stethoscope, Heart, Compass, ArrowDown } from "lucide-react";

const milestones = [
  { icon: Calendar, label: "2003", desc: "Início da trajetória" },
  { icon: MapPin, label: "Bonito de Minas", desc: "Origem do propósito" },
  { icon: Stethoscope, label: "Saúde no sertão", desc: "Atendimento onde mais precisava" },
  { icon: Heart, label: "Dignidade", desc: "Cuidado além do consultório" },
  { icon: Compass, label: "Missão", desc: "Transformar vidas pela saúde" },
];

export default function BonitoDeMinasSection() {
  const scrollToProposals = () => {
    document.getElementById("propostas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="bonito" className="relative py-24 md:py-32 bg-surface-dark section-padding overflow-hidden">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--blue-vibrant)) 0%, transparent 40%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center animate-on-scroll mb-16">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Raízes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight mb-5">
            O começo da trajetória em{" "}
            <span className="text-gradient-gold">Bonito de Minas</span>
          </h2>
          <p className="text-on-dark-muted text-lg md:text-xl italic">
            Onde nasceu um propósito de transformação
          </p>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-8" />
        </div>

        {/* Narrative blocks */}
        <div className="space-y-14">
          {/* Block 1 */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-gold mb-5">
              O começo da minha trajetória
            </h3>
            <div className="space-y-4 text-on-dark-muted text-base md:text-lg leading-relaxed">
              <p>
                O ano era 2003. Raphael Mota havia acabado de se formar em Odontologia quando foi aprovado em um concurso público para atuar em <strong className="text-on-dark">Bonito de Minas</strong>, um pequeno município do Norte de Minas Gerais, próximo à cidade de seus pais, Januária.
              </p>
              <p>
                Bonito de Minas é uma cidade simples, marcada por construções históricas, pela força do povo sertanejo e pela identidade do <strong className="text-on-dark">Grande Sertão Veredas</strong>, região eternizada por Guimarães Rosa. Localizada na divisa entre Minas Gerais e Bahia, a cidade também carrega desafios profundos, como baixo índice de desenvolvimento humano, dificuldades de acesso e limitações de infraestrutura.
              </p>
              <p>
                Naquele período, muitas estradas ainda não tinham asfalto. As viagens eram longas, muitas vezes por estradas de terra, atravessando paisagens fortes e exuberantes do sertão mineiro.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="animate-on-scroll border-l-2 border-gold/40 pl-6 md:pl-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-gold mb-5">
              O compromisso com quem mais precisava
            </h3>
            <div className="space-y-4 text-on-dark-muted text-base md:text-lg leading-relaxed">
              <p>
                Grande parte dos deslocamentos era feita em carros simples, muitas vezes com apoio de bandeirantes e moradores da região. Em cada comunidade visitada, as equipes montavam verdadeiros acampamentos para levar atendimento odontológico à população.
              </p>
              <p>
                Eram muitas pessoas para atender. Gente simples, trabalhadora, muitas vezes sem nunca ter tido a oportunidade de consultar um dentista.
              </p>
              <p>
                Cada atendimento representava mais do que um procedimento odontológico. Era <strong className="text-on-dark">acolhimento, dignidade, cuidado e respeito</strong>.
              </p>
              <p>
                Ao final de cada dia, depois de longas jornadas, ficava o sentimento de dever cumprido. Muitas vezes, o banho era em um riacho, e o dia terminava ao redor de uma comida feita no fogão a lenha. Por onde Raphael passava, era recebido com carinho e confiança, como parte da família.
              </p>
              <p>
                Foi ali que ele construiu amizades verdadeiras, companheiros fiéis de estrada e aprendizados que carrega até hoje.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="animate-on-scroll">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-gold mb-5">
              Uma missão que transformou minha vida
            </h3>
            <div className="space-y-4 text-on-dark-muted text-base md:text-lg leading-relaxed">
              <p>
                A experiência em Bonito de Minas trouxe algo ainda maior: <strong className="text-on-dark">um propósito</strong>.
              </p>
              <p>
                Raphael recebeu o desafio de ajudar a transformar a vida de centenas de pessoas daquela região. E esse desafio mudou o rumo da sua trajetória.
              </p>
              <p>
                Foi ali que ele entendeu que a Odontologia vai muito além do consultório. Ela tem o poder de devolver autoestima, promover saúde, gerar oportunidades e transformar vidas.
              </p>
              <p>
                No sertão mineiro nasceu a missão que acompanha Raphael até hoje: <strong className="text-on-dark">trabalhar para transformar a Odontologia, ampliar o acesso à saúde e levar cuidado, dignidade e qualidade de vida para cada vez mais pessoas</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4 animate-on-scroll">
          {milestones.map((m, i) => (
            <div
              key={m.label}
              className="group bg-navy-light/40 border border-gold/20 rounded-sm p-5 text-center hover:border-gold/60 hover:bg-navy-light/60 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <m.icon className="w-6 h-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-heading font-bold text-on-dark text-sm mb-1">{m.label}</h4>
              <p className="text-on-dark-muted text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact quote */}
        <div className="mt-16 animate-on-scroll-scale text-center">
          <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-on-dark leading-snug italic max-w-3xl mx-auto">
            "Porque servir pessoas sempre foi, e continuará sendo, o{" "}
            <span className="text-gradient-gold">maior propósito</span> da minha caminhada."
          </blockquote>
        </div>

        {/* CTA to proposals */}
        <div className="mt-12 text-center animate-on-scroll">
          <button
            onClick={scrollToProposals}
            className="inline-flex items-center gap-2 bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm"
          >
            CONHEÇA MINHAS PROPOSTAS PARA O NORTE DE MINAS
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
