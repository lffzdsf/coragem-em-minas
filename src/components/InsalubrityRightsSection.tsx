import { Calculator, Building2, Shield, Landmark } from "lucide-react";
import InstagramEmbed from "./InstagramEmbed";

const cards = [
  { icon: Calculator, text: "Insalubridade calculada de forma correta" },
  { icon: Building2, text: "Orientação a municípios e órgãos públicos" },
  { icon: Shield, text: "Defesa dos profissionais da Odontologia" },
  { icon: Landmark, text: "Articulação com Câmaras Municipais" },
];

export default function InsalubrityRightsSection() {
  return (
    <section className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Direitos</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Insalubridade, direito e{" "}
            <span className="text-blue-vibrant">respeito</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            A valorização também passa pela defesa de direitos concretos. Com base no novo entendimento do STF, o CRO-MG e o SINPRODONTO/MG emitiram a <strong className="text-foreground">Nota Técnica 004/2025</strong> orientando gestores públicos sobre o cálculo correto do adicional de insalubridade.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A medida fortalece a proteção dos profissionais expostos a agentes insalubres e inicia uma nova fase de articulação com municípios e Câmaras Municipais para atualização das legislações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4 animate-on-scroll-left">
            {cards.map((c, i) => (
              <div
                key={c.text}
                className="bg-card border border-border rounded-sm p-5 hover:border-green-accent/40 transition-all duration-500"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <c.icon className="w-5 h-5 text-green-accent mb-3" />
                <p className="text-foreground text-sm font-medium leading-snug">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="animate-on-scroll-right max-w-md mx-auto w-full">
            <InstagramEmbed url="https://www.instagram.com/p/DR1mCuEjZoi/" />
          </div>
        </div>
      </div>
    </section>
  );
}
