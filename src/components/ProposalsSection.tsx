import {
  Droplet,
  Route,
  HeartPulse,
  Recycle,
  Briefcase,
  GraduationCap,
  Sprout,
  Landmark,
  Smile,
} from "lucide-react";

type Proposal = {
  icon: typeof Droplet;
  title: string;
  intro: string;
  points: string[];
  highlight: string;
  sub?: {
    icon: typeof Smile;
    title: string;
    intro: string;
    points: string[];
  };
};

const proposals: Proposal[] = [
  {
    icon: Droplet,
    title: "Água para viver e produzir",
    intro:
      "Levar água para comunidades rurais, distritos e cidades que ainda sofrem com a seca, por meio de poços artesianos, barraginhas, reservatórios, adutoras, caixas secas e sistemas simplificados de abastecimento.",
    points: [
      "Perfuração e recuperação de poços artesianos.",
      "Sistemas simplificados de abastecimento em comunidades rurais.",
      "Barraginhas, pequenas barragens e captação de água da chuva.",
      "Ampliação de adutoras e reservatórios regionais.",
      "Prioridade para comunidades tradicionais, zona rural, distritos e pequenos municípios.",
    ],
    highlight:
      "No Norte de Minas, água não pode ser promessa de eleição. Água tem que ser política pública permanente.",
  },
  {
    icon: Route,
    title: "Estradas para integrar o Norte",
    intro:
      "Lutar por duplicações, pavimentação, pontes e estradas vicinais para salvar vidas, escoar a produção e aproximar os municípios dos polos de saúde, educação e comércio.",
    points: [
      "Melhoria dos principais corredores logísticos, como BR-135, BR-251 e acessos regionais.",
      "Pavimentação de ligações entre pequenos municípios e polos regionais.",
      "Recursos federais para pontes e travessias estratégicas.",
      "Estradas vicinais para escoar produção rural, leite, frutas, carne, grãos e agricultura familiar.",
      "Fiscalização sobre pedágios, concessões e cumprimento de cronogramas.",
    ],
    highlight:
      "Estrada ruim encarece o alimento, atrasa ambulância, prejudica o produtor e isola o nosso povo.",
  },
  {
    icon: HeartPulse,
    title: "Saúde perto de casa",
    intro:
      "Fortalecer a saúde regionalizada para reduzir deslocamentos longos e garantir atendimento mais perto da população.",
    points: [
      "Fortalecimento dos hospitais regionais em Janaúba, Januária, Pirapora, Salinas, Taiobeiras e Montes Claros.",
      "Ampliação de serviços de oncologia, hemodiálise, cardiologia, ortopedia e exames especializados.",
      "Mais recursos para Santas Casas e hospitais filantrópicos.",
      "Telemedicina e telessaúde para reduzir filas.",
      "Programa federal de transporte sanitário regional, com vans, ambulâncias e unidades móveis.",
    ],
    highlight:
      "Ninguém deveria atravessar metade de Minas para fazer um exame, uma cirurgia ou um tratamento contra o câncer.",
    sub: {
      icon: Smile,
      title: "Saúde Bucal no SUS do Norte de Minas",
      intro:
        "Como cirurgião-dentista, Raphael também defende que a saúde bucal seja tratada como política pública essencial.",
      points: [
        "Mais Centros de Especialidades Odontológicas.",
        "Unidades odontológicas móveis para zona rural.",
        "Prevenção do câncer de boca.",
        "Atendimento odontológico para gestantes, idosos, pessoas com deficiência e pacientes oncológicos.",
        "Fortalecimento das equipes de saúde bucal na Estratégia Saúde da Família.",
      ],
    },
  },
  {
    icon: Recycle,
    title: "Saneamento é dignidade",
    intro:
      "Buscar recursos federais para água tratada, coleta e tratamento de esgoto, banheiros dignos e soluções adequadas para comunidades rurais.",
    points: [
      "Prioridade para municípios pequenos no Novo PAC e em fundos federais de saneamento.",
      "Recursos para água tratada, coleta e tratamento de esgoto.",
      "Programa de banheiros dignos e fossas sépticas biodigestoras.",
      "Apoio técnico para pequenos municípios elaborarem projetos.",
      "Saneamento como prevenção de doenças e promoção de dignidade.",
    ],
    highlight:
      "Quem fala em saúde precisa falar de água tratada, esgoto e dignidade dentro de casa.",
  },
  {
    icon: Briefcase,
    title: "Emprego e renda para segurar nossos jovens",
    intro:
      "Criar oportunidades para que os jovens do Norte de Minas possam estudar, trabalhar e vencer sem precisar abandonar sua terra.",
    points: [
      "Escolas técnicas e cursos profissionalizantes alinhados à vocação regional.",
      "Crédito orientado para pequenos negócios, produtores rurais, mulheres empreendedoras e jovens.",
      "Fortalecimento do Sistema S, IFNMG, Unimontes e escolas técnicas.",
      "Incentivos para indústrias se instalarem no Norte de Minas.",
      "Apoio a polos de energia solar, irrigação, agroindústria, moda, turismo e tecnologia.",
    ],
    highlight:
      "O jovem do Norte de Minas não quer ir embora por falta de opção. Ele quer oportunidade para ficar, trabalhar e vencer aqui.",
  },
  {
    icon: GraduationCap,
    title: "Educação que transforma",
    intro:
      "Expandir o acesso ao ensino técnico, superior, tecnológico e profissionalizante, com foco na permanência dos jovens na região.",
    points: [
      "Expansão da Unimontes, IFNMG e ensino técnico.",
      "Bolsas de permanência para jovens de baixa renda.",
      "Transporte universitário regional.",
      "Internet de qualidade nas escolas, zona rural e distritos.",
      "Cursos técnicos em saúde, agroindústria, energia solar, tecnologia, turismo, irrigação e gestão pública.",
      "Polos de inovação em Montes Claros, Januária, Janaúba, Pirapora, Salinas e Taiobeiras.",
    ],
    highlight:
      "O filho do Norte de Minas precisa ter o direito de estudar, trabalhar e construir seu futuro sem abandonar sua terra.",
  },
  {
    icon: Sprout,
    title: "Força para o campo",
    intro:
      "Apoiar a agricultura familiar, a pecuária, a irrigação, a regularização fundiária e a agroindústria regional.",
    points: [
      "Assistência técnica permanente para pequenos produtores.",
      "Máquinas, patrulhas mecanizadas e apoio às prefeituras.",
      "Regularização fundiária rural.",
      "Crédito para irrigação, energia solar e melhoria genética do rebanho.",
      "Compras públicas da agricultura familiar.",
      "Apoio à produção de leite, carne, frutas, mel, cachaça, pequi, mandioca e agroindústrias familiares.",
    ],
    highlight:
      "Quando o produtor rural cresce, a cidade vende mais, o comércio gira e o emprego aparece.",
  },
  {
    icon: Landmark,
    title: "Representatividade de verdade em Brasília",
    intro:
      "O Norte de Minas não sofre por falta de povo trabalhador, cultura, produção ou inteligência. Sofre porque muitas vezes é lembrado apenas em época de eleição.",
    points: [
      "Gabinete regional permanente no Norte de Minas.",
      "Prestação de contas periódica por cidade.",
      "Emendas organizadas por prioridades regionais, não por apadrinhamento.",
      "Frente parlamentar pelo semiárido mineiro.",
      "Defesa da saúde, da odontologia, do agro, da infraestrutura e dos pequenos municípios.",
      "Atuação conjunta com prefeitos, vereadores, entidades de classe, produtores, universidades e lideranças comunitárias.",
    ],
    highlight:
      "O Norte de Minas não quer favor. Quer respeito, recurso e representação de verdade.",
  },
];

export default function ProposalsSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="propostas" className="py-24 md:py-32 bg-background section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center animate-on-scroll mb-12 max-w-4xl mx-auto">
          <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Compromisso com a região
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Propostas para o{" "}
            <span className="text-blue-vibrant">Norte de Minas</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            O Norte de Minas não é pobre por falta de potencial. É prejudicado por falta de infraestrutura, água, saúde regionalizada, qualificação profissional e presença política constante em Brasília.
          </p>
          <div className="w-20 h-0.5 bg-green-accent mx-auto mt-8" />
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16 animate-on-scroll space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed text-center">
          <p>
            O Norte de Minas é uma região rica em gente trabalhadora, cultura, produção, fé e coragem. O que falta é <strong className="text-foreground">presença política forte, permanente e comprometida</strong> com as prioridades reais da população.
          </p>
          <p>
            As propostas de Raphael Mota partem de uma visão clara: água, saúde, estradas, emprego, educação, saneamento, campo forte e representação política de verdade.
          </p>
        </div>

        {/* Proposals grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proposals.map((p, i) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-sm p-7 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 transition-all duration-500 animate-on-scroll flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-sm bg-blue-vibrant/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-500">
                <p.icon className="w-6 h-6 text-blue-vibrant group-hover:text-gold transition-colors duration-500" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-snug">
                {p.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {p.intro}
              </p>

              <ul className="space-y-2 mb-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-green-accent mt-1.5 flex-shrink-0">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {p.sub && (
                <div className="mt-2 mb-5 p-4 bg-background/60 border-l-2 border-gold/60 rounded-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <p.sub.icon className="w-4 h-4 text-gold" />
                    <h4 className="font-heading font-bold text-foreground text-sm">{p.sub.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{p.sub.intro}</p>
                  <ul className="space-y-1.5">
                    {p.sub.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-muted-foreground text-xs leading-relaxed">
                        <span className="text-gold mt-1 flex-shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-foreground italic text-sm font-medium leading-snug">
                  "{p.highlight}"
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing manifesto */}
        <div className="mt-20 animate-on-scroll-scale">
          <div className="relative bg-navy rounded-sm overflow-hidden p-10 md:p-16">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 20%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 90% 80%, hsl(var(--blue-vibrant)) 0%, transparent 50%)",
              }}
            />
            <div className="relative max-w-3xl mx-auto text-center">
              <span className="text-green-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                Manifesto regional
              </span>
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-on-dark leading-tight mb-8">
                Um mandato com{" "}
                <span className="text-gradient-gold">raiz, presença e compromisso</span>
              </h3>
              <div className="space-y-5 text-on-dark-muted text-base md:text-lg leading-relaxed mb-10">
                <p>
                  O Norte de Minas não pode continuar sendo lembrado apenas em época de eleição. A região precisa de <strong className="text-on-dark">voz, respeito e resultado</strong>.
                </p>
                <p>
                  Raphael Mota conhece a realidade do interior porque nasceu no Norte de Minas, construiu sua trajetória servindo pessoas e entende que desenvolvimento se faz com presença, trabalho e compromisso permanente.
                </p>
                <p>
                  As prioridades são claras: água para quem sofre com a seca, estradas para integrar os municípios, saúde perto de casa, saneamento básico, emprego para os jovens, educação de qualidade e apoio real ao produtor rural.
                </p>
              </div>

              <blockquote className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-on-dark italic leading-snug mb-10 border-l-2 border-gold pl-6 text-left">
                "Norte de Minas, saúde, agro, municipalismo e coragem para enfrentar o abandono histórico."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/channel/AbYTSLzsSRFTuT2c/?igsh=YWo3dXdqZTh2MWl6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-navy-deep px-8 py-3.5 font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 rounded-sm"
                >
                  QUERO APOIAR ESSA CAMINHADA
                </a>
                <button
                  onClick={() => scrollTo("about")}
                  className="border border-on-dark/30 text-on-dark px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-on-dark/10 transition-all duration-300 rounded-sm"
                >
                  CONHEÇA A HISTÓRIA DE RAPHAEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
