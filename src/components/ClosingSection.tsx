export default function ClosingSection() {
  return (
    <section id="closing" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Novo momento</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Uma liderança{" "}
            <span className="text-blue-vibrant">testada na prática.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A trajetória de Raphael Castro Mota é a trajetória de alguém que conhece a realidade, construiu sua liderança por dentro das instituições, enfrentou desafios reais e não fugiu quando a luta ficou mais dura. É essa experiência, essa coragem e esse compromisso que marcam este novo momento de sua caminhada pública.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <a href="https://wa.me/38999826886" target="_blank" rel="noopener noreferrer" className="bg-navy text-on-dark px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-navy-light transition-all duration-300 rounded-sm text-center">
            CONHEÇA MAIS
          </a>
          <a href="https://wa.me/38999826886" target="_blank" rel="noopener noreferrer" className="border border-navy text-navy px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-navy hover:text-on-dark transition-all duration-300 rounded-sm text-center">
            ACOMPANHE AS PRÓXIMAS ETAPAS
          </a>
          <a href="https://wa.me/38999826886" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm text-center">
            FAÇA PARTE
          </a>
        </div>
      </div>
    </section>
  );
}
