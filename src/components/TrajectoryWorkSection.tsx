import { MapPin, Briefcase, Stethoscope } from "lucide-react";

const bullets = [
  { icon: MapPin, text: "Origem no interior de Minas" },
  { icon: Briefcase, text: "Experiência em gestão pública" },
  { icon: Stethoscope, text: "Atuação firme na valorização da Odontologia" },
];

export default function TrajectoryWorkSection() {
  return (
    <section className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="animate-on-scroll-left">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Trajetória</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Uma trajetória que nasceu do{" "}
            <span className="text-gradient-gold">trabalho</span>
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Antes dos grandes debates, das entidades nacionais e das decisões difíceis, existe uma história construída no serviço público, no interior de Minas e no contato direto com a realidade das pessoas.
            </p>
            <p>
              Raphael Mota conhece a Odontologia por dentro. Viveu os desafios da profissão, da gestão pública e da representação de classe. Sua caminhada foi formada na prática, enfrentando problemas reais e buscando soluções concretas.
            </p>
          </div>
        </div>

        <div className="space-y-4 animate-on-scroll-right">
          {bullets.map((b, i) => (
            <div
              key={b.text}
              className="flex items-center gap-4 bg-card border border-border rounded-sm p-5 hover:border-gold/40 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: 'hsl(var(--green-accent) / 0.12)' }}>
                <b.icon className="w-5 h-5 text-green-accent" />
              </div>
              <span className="font-heading font-semibold text-foreground text-base md:text-lg">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
