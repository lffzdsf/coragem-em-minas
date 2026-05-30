import { ShieldCheck, GraduationCap, HeartPulse, Sparkles } from "lucide-react";
import InstagramEmbed from "./InstagramEmbed";

const pillars = [
  { icon: ShieldCheck, label: "Prevenção" },
  { icon: GraduationCap, label: "Educação" },
  { icon: HeartPulse, label: "Saúde pública" },
  { icon: Sparkles, label: "Futuro das crianças" },
];

export default function SchoolHealthSection() {
  return (
    <section className="py-24 md:py-32 bg-navy section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Prevenção</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight mb-6">
            Saúde bucal{" "}
            <span className="text-gradient-gold">nas escolas</span>
          </h2>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed mb-4">
            A luta de Raphael também passa pela defesa da prevenção. A retirada da saúde bucal da lista de prioridades do Programa Saúde na Escola representa um grave retrocesso para as crianças e para o futuro da saúde pública.
          </p>
          <p className="text-on-dark-muted text-base md:text-lg leading-relaxed">
            Quem viveu as décadas de 80 e 90 sabe o quanto o atendimento odontológico nas escolas foi essencial para reduzir índices de cárie e ampliar o acesso à orientação. Em Minas Gerais, existe legislação estadual garantindo a saúde bucal nas escolas, e essa pauta precisa continuar sendo cobrada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-14">
          <div className="grid grid-cols-2 gap-4 animate-on-scroll-left">
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className="bg-navy-light/60 border border-blue-vibrant/20 rounded-sm p-6 text-center hover:border-gold/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <p.icon className="w-6 h-6 text-blue-vibrant mx-auto mb-3" />
                <p className="text-on-dark text-sm font-semibold">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="animate-on-scroll-right max-w-md mx-auto w-full">
            <InstagramEmbed url="https://www.instagram.com/p/DVqNiFykcsg/" />
          </div>
        </div>

        <p className="text-center font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-dark leading-tight max-w-3xl mx-auto animate-on-scroll">
          Prevenção não pode ser tratada como detalhe.{" "}
          <span className="text-gradient-gold">Saúde bucal nas escolas é cuidado com o futuro.</span>
        </p>
      </div>
    </section>
  );
}
