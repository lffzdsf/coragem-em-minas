import { Sword, Trophy, Heart, Users } from "lucide-react";

const cards = [
  { icon: Sword, title: "Coragem", desc: "Enfrentou estruturas antigas e defendeu a moralização da Odontologia." },
  { icon: Trophy, title: "Resultado", desc: "Participou de avanços concretos em pautas nacionais e estaduais." },
  { icon: Heart, title: "Valorização", desc: "Defende piso, insalubridade, reconhecimento e dignidade profissional." },
  { icon: Users, title: "Presença", desc: "Está próximo da categoria, ouvindo demandas e transformando pautas em ação." },
];

export default function SynthesisSection() {
  return (
    <section className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll max-w-3xl mx-auto">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Síntese</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Uma liderança{" "}
            <span className="text-blue-vibrant">testada na prática</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Os vídeos, as ações e os resultados mostram uma liderança que não se limita a opiniões ou promessas. Raphael Mota tem atuado onde as decisões acontecem: nos Conselhos, no Congresso, nos municípios, nas articulações institucionais e na defesa direta dos profissionais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group bg-card border border-border rounded-sm p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5" style={{ backgroundColor: 'hsl(var(--green-accent) / 0.1)' }}>
                <c.icon className="w-6 h-6 text-green-accent group-hover:text-gold transition-colors duration-500" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
