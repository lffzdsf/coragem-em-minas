export default function ManifestoSection() {
  return (
    <section className="bg-navy min-h-[70vh] flex items-center justify-center section-padding py-24 md:py-36">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll-scale">
        <div className="w-12 h-0.5 mx-auto mb-10" style={{ backgroundColor: 'hsl(var(--green-accent))' }} />
        <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-snug md:leading-tight">
          "Hoje, Raphael Castro Mota chega a um novo momento com a mesma essência que o trouxe até aqui:{" "}
          <span className="text-gradient-gold">firmeza, responsabilidade</span>{" "}
          e disposição para fazer o que é certo, mesmo quando não é o mais fácil."
        </blockquote>
        <div className="w-12 h-0.5 mx-auto mt-10" style={{ backgroundColor: 'hsl(var(--green-accent))' }} />
      </div>
    </section>
  );
}
