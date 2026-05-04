export default function ClosingSection() {
  return (
    <section id="closing" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Um novo caminho</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Uma liderança que Minas já conhece.{" "}
            <span className="text-blue-vibrant">Um novo caminho que começa agora.</span>
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            <p>
              Raphael Mota chega a este novo momento com a força de uma trajetória construída na prática: ouvindo pessoas, enfrentando desafios, liderando instituições e levando cuidado a quem mais precisa.
            </p>
            <p>
              Sua história não cabe em um cargo. Ela nasce da vida real, passa pela saúde, atravessa o interior de Minas e agora se projeta para uma missão maior: representar o estado com coragem, responsabilidade e compromisso.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <a href="https://instagram.com/raphamota" target="_blank" rel="noopener noreferrer" className="bg-navy text-on-dark px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm text-center">
            ACOMPANHE RAPHAEL MOTA
          </a>
          <a href="https://wa.me/38999826886" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm text-center">
            FAÇA PARTE DESSA CAMINHADA
          </a>
        </div>
      </div>
    </section>
  );
}
