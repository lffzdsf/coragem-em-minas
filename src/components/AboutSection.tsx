import { Shield, Users, Heart, Handshake, MapPin, Stethoscope } from "lucide-react";

const attributes = [
  { icon: Shield, label: "Coragem", desc: "Para enfrentar o que é preciso" },
  { icon: Users, label: "Presença", desc: "Perto das pessoas e comunidades" },
  { icon: Stethoscope, label: "Saúde como causa", desc: "Cuidado como cidadania" },
  { icon: Handshake, label: "Compromisso", desc: "Com Minas e sua gente" },
  { icon: MapPin, label: "Interior de Minas", desc: "Atuação em todo o estado" },
  { icon: Heart, label: "Responsabilidade", desc: "Em cada decisão" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="animate-on-scroll">
            <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Quem é</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Raphael Castro{" "}
              <span className="text-blue-vibrant">Mota</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Raphael Castro Mota é cirurgião-dentista, nascido em Belo Horizonte, formado pela PUC Minas e reconhecido por uma trajetória construída com <strong className="text-foreground">presença, coragem e compromisso social</strong>.
              </p>
              <p>
                Sua atuação pública nasceu do contato direto com realidades que muitos preferem não enxergar: comunidades vulneráveis, municípios do interior, regiões de difícil acesso, famílias sem assistência básica e profissionais que lutam diariamente por respeito e dignidade.
              </p>
              <p>
                Antes de ocupar cargos, Raphael já havia escolhido um lado: <strong className="text-foreground">estar perto das pessoas</strong>, ouvir suas necessidades e transformar sua profissão em um caminho de cuidado, cidadania e ação pública.
              </p>
            </div>
          </div>

          {/* Attribute cards */}
          <div className="grid grid-cols-2 gap-4 animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            {attributes.map((attr, i) => (
              <div
                key={attr.label}
                className="group bg-card border border-border rounded-sm p-5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500 cursor-default"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <attr.icon className="w-5 h-5 text-green-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-1">{attr.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
