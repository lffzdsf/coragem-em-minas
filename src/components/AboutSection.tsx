import { Shield, Target, Award, Handshake, Crown, Scale } from "lucide-react";

const attributes = [
  { icon: Shield, label: "Coragem", desc: "Para enfrentar o que é preciso" },
  { icon: Target, label: "Firmeza", desc: "Posição clara e consistente" },
  { icon: Award, label: "Experiência", desc: "Construída na prática" },
  { icon: Handshake, label: "Compromisso", desc: "Com a classe e com Minas" },
  { icon: Crown, label: "Liderança", desc: "Reconhecida e testada" },
  { icon: Scale, label: "Responsabilidade", desc: "Em cada decisão" },
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
                Raphael Castro Mota construiu sua trajetória com <strong className="text-foreground">coragem, firmeza e compromisso</strong> com a Odontologia mineira.
              </p>
              <p>
                Cirurgião-dentista, nascido em Belo Horizonte e formado pela PUC Minas, Raphael conhece de perto a realidade da profissão, os desafios da saúde e a importância de ter representantes que não se calam diante das injustiças.
              </p>
              <p>
                Sua história pública foi construída com trabalho, presença e disposição para <strong className="text-foreground">enfrentar problemas de frente</strong>.
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
