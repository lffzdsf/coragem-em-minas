export default function RootsSection() {
  return (
    <section className="bg-navy py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll mb-10">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Origem</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-dark leading-tight">
            Uma trajetória que nasceu no{" "}
            <span className="text-gradient-gold">chão de Minas</span>
          </h2>
        </div>
        <div className="space-y-6 text-on-dark-muted text-base md:text-lg leading-relaxed animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
          <p>
            A história pública de Raphael Mota não começou em gabinetes. Começou no contato direto com a realidade de Minas Gerais.
          </p>
          <p>
            Em cidades afastadas, distritos rurais, comunidades tradicionais, aldeias indígenas e regiões historicamente esquecidas pelo poder público, Raphael conheceu de perto o impacto da ausência de serviços básicos de saúde.
          </p>
          <p>
            Essa vivência moldou sua forma de atuar: <strong className="text-on-dark">menos discurso, mais presença; menos promessa, mais entrega; menos distância, mais compromisso</strong> com a vida real.
          </p>
          <p>
            Foi nesse caminho que a Odontologia deixou de ser apenas uma profissão e se tornou, para Raphael, uma ferramenta de transformação social.
          </p>
        </div>
      </div>
    </section>
  );
}
