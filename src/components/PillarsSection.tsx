import { Sword, Users, Heart, Briefcase, ShieldCheck, Mountain } from "lucide-react";

const pillars = [
  { icon: Sword, title: "Coragem para enfrentar", desc: "Não se omite diante dos problemas e não escolhe o silêncio quando é preciso defender o que é certo." },
  { icon: Users, title: "Presença na vida real", desc: "Liderança construída no contato com pessoas, municípios, comunidades e profissionais." },
  { icon: Heart, title: "Compromisso social", desc: "A saúde como instrumento de dignidade, cidadania e cuidado com quem mais precisa." },
  { icon: Briefcase, title: "Experiência pública", desc: "Atuação consolidada na gestão, na representação institucional e na defesa de causas coletivas." },
  { icon: ShieldCheck, title: "Responsabilidade para decidir", desc: "Firmeza sem improviso. Posição clara, consciência pública e compromisso com as consequências." },
  { icon: Mountain, title: "Minas em primeiro lugar", desc: "Uma trajetória voltada para defender o estado, seus municípios, sua gente e suas necessidades reais." },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Valores</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O que orienta essa{" "}
            <span className="text-blue-vibrant">caminhada</span>
          </h2>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group bg-card border border-border rounded-sm p-8 hover:border-green-accent/40 hover:shadow-xl hover:shadow-green-accent/5 hover:-translate-y-1 transition-all duration-500 animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-colors duration-500" style={{ backgroundColor: 'hsl(var(--green-accent) / 0.1)' }}>
                <pillar.icon className="w-6 h-6 text-green-accent group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
