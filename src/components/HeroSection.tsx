import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Raphael Mota"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding pb-20 md:pb-0 pt-32 w-full">
        <div className="max-w-2xl">
           {/* Pre-candidate label */}
          <p className="text-on-dark-muted text-xs sm:text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-up font-medium">
            Pré-Candidato a Deputado Federal
          </p>

          {/* Gold accent line */}
          <div className="w-16 h-0.5 mb-8 animate-fade-up" style={{ background: 'linear-gradient(to right, hsl(var(--green-accent)), hsl(var(--gold)))' }} />

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-dark leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Minas não precisa de mais promessas.{" "}
            <span className="text-gradient-gold">Precisa de coragem.</span>
          </h1>

          <p className="text-on-dark-muted text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Uma trajetória construída com trabalho, firmeza e disposição para enfrentar o que muitos preferiram evitar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => scrollTo("#timeline")}
              className="bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm"
            >
              TRAJETÓRIA NO CRO-MG
            </button>
            <button
              onClick={() => scrollTo("#closing")}
              className="border border-on-dark/30 text-on-dark px-8 py-3.5 font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300 rounded-sm"
            >
              QUERO SABER MAIS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        
        <div className="w-px h-8 animate-scroll-bounce" style={{ background: 'linear-gradient(to bottom, hsl(var(--green-accent) / 0.6), transparent)' }} />
      </div>
    </section>
  );
}
