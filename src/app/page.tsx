import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Bot, BrainCircuit, Rocket, Zap, Clock, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  const assistants = [
    { name: "Atlas", role: "Suporte Técnico", desc: "Resolve problemas de TI e orienta usuários passo a passo." },
    { name: "Lumina", role: "Atendimento ao Cliente", desc: "Responde dúvidas, agenda serviços e qualifica leads 24/7." },
    { name: "Nexus", role: "Análise de Dados", desc: "Extrai insights e gera relatórios em tempo real." },
    { name: "Orion", role: "Vendas e Conversão", desc: "Guia clientes pelo funil e fecha vendas ativamente." },
    { name: "Lyra", role: "Recursos Humanos", desc: "Faz triagem de currículos e onboarding de novos funcionários." },
    { name: "Vega", role: "Gestão Financeira", desc: "Automatiza cobranças e monitora métricas do negócio." },
    { name: "Ares", role: "Marketing Digital", desc: "Criação de campanhas, segmentação e otimização de tráfego pago." },
    { name: "Hermes", role: "Logística", desc: "Rastreio de entregas e otimização de rotas e fretes." },
    { name: "Themis", role: "Jurídico", desc: "Análise prévia de contratos e organização de documentos." }
  ];

  const useCases = [
    { title: "E-commerce", desc: "Aumente a conversão com recomendações personalizadas e suporte imediato no carrinho." },
    { title: "Saúde e Clínicas", desc: "Agendamento automático, triagem inicial e lembretes de consultas via WhatsApp." },
    { title: "Imobiliárias", desc: "Apresentação de imóveis, qualificação de leads e agendamento de visitas 24h." },
    { title: "Educação", desc: "Tutores virtuais, suporte acadêmico e matrícula automatizada para novos alunos." }
  ];

  return (
    <div className="flex flex-col flex-1 bg-background text-foreground overflow-x-hidden">
      {/* 1. Hero Section - Futuristic & High Impact */}
      <section className="w-full min-h-screen py-16 md:py-32 bg-grid relative overflow-hidden flex items-center justify-center border-b border-primary/20">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[80%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="space-y-10 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-2 shadow-[0_0_15px_rgba(104,226,47,0.2)]">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                <span className="tracking-widest uppercase">O Futuro Chegou</span>
              </div>

              <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
                O PODER DA <br />
                <span className="text-primary text-glow">INTELIGÊNCIA</span><br />
                ARTIFICIAL
              </h1>

              <p className="max-w-[600px] mx-auto lg:mx-0 text-xl text-muted-foreground font-medium md:text-2xl leading-relaxed">
                Escale suas operações, reduza custos e venda no automático. A revolução dos negócios acontece <span className="text-white">agora</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start pt-4">
                <Button size="lg" className="w-full sm:w-auto font-black text-primary-foreground text-lg h-16 px-10 rounded-full shadow-[0_0_20px_rgba(104,226,47,0.4)] hover:shadow-[0_0_30px_rgba(104,226,47,0.6)] hover:scale-105 transition-all duration-300" asChild>
                  <Link href="#assistants">EXPLORAR ASSISTENTES</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold text-lg h-16 px-10 rounded-full border-primary/50 hover:bg-primary/20 hover:border-primary text-white transition-all duration-300 group" asChild>
                  <Link href="#contact">
                    FALAR COM ESPECIALISTA
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="mx-auto lg:ml-auto flex justify-center w-full max-w-[600px] relative">
              <div className="relative w-full aspect-square flex items-center justify-center animate-float">
                 <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
                 <Image
                    src="/robo_hero.webp"
                    alt="Assistente IA"
                    width={600}
                    height={600}
                    className="object-contain z-10 relative drop-shadow-[0_0_30px_rgba(104,226,47,0.3)]"
                 />

                 {/* Floating UI Elements */}
                 <div className="absolute -left-8 top-1/4 bg-card/80 backdrop-blur-md border border-primary/30 p-4 rounded-xl shadow-lg flex items-center gap-3 z-20">
                    <Bot className="text-primary h-6 w-6" />
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">Status</p>
                      <p className="text-sm font-bold text-white">Online 24/7</p>
                    </div>
                 </div>

                 <div className="absolute -right-4 bottom-1/4 bg-card/80 backdrop-blur-md border border-primary/30 p-4 rounded-xl shadow-lg flex items-center gap-3 z-20">
                    <Zap className="text-primary h-6 w-6" />
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">Eficiência</p>
                      <p className="text-sm font-bold text-white">+300%</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* 2. Institucional (Social Proof / Credibility) */}
      <section className="w-full py-24 bg-background relative overflow-hidden border-b border-border">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="text-center space-y-4 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                Por que <span className="text-primary">Great Path</span>?
              </h2>
              <p className="text-muted-foreground text-xl">
                Não somos apenas uma loja. Somos seu parceiro estratégico em transformação digital e automação avançada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-start p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(104,226,47,0.1)] group">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <BrainCircuit size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Tecnologia de Ponta</h3>
                <p className="text-muted-foreground text-lg">Modelos avançados treinados com dados específicos do seu nicho para máxima precisão e autonomia.</p>
              </div>
              <div className="flex flex-col items-start p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(104,226,47,0.1)] group">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Bot size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Personalização Total</h3>
                <p className="text-muted-foreground text-lg">Assistentes com a voz, tom e conhecimento exato da sua marca e procedimentos corporativos.</p>
              </div>
              <div className="flex flex-col items-start p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(104,226,47,0.1)] group">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Suporte Consultivo</h3>
                <p className="text-muted-foreground text-lg">Acompanhamento contínuo especializado para garantir que a IA gere ROI real e imediato para sua empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grade de Assistentes (Products/Assistants Grid) */}
      <section id="assistants" className="w-full py-32 bg-card relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
              Nossos <span className="text-primary text-glow">Especialistas</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl">
              Agentes inteligentes prontos para serem integrados ao seu ecossistema digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assistants.map((bot, i) => (
              <div key={i} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-primary hover:shadow-[0_0_30px_rgba(104,226,47,0.4)] hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className="h-24 w-24 rounded-full bg-black/40 border-2 border-primary/50 flex items-center justify-center overflow-hidden p-2 shadow-[0_0_20px_rgba(104,226,47,0.3)] group-hover:shadow-[0_0_30px_rgba(104,226,47,0.6)] transition-all duration-500">
                      <Image src="/robo_hero.webp" alt={bot.name} width={80} height={80} className="object-contain" />
                    </div>
                    <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-sm font-bold text-primary uppercase tracking-wider shadow-[0_0_10px_rgba(104,226,47,0.2)]">
                      {bot.role}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:text-primary transition-colors duration-300">{bot.name}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {bot.desc}
                  </p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button className="w-full h-14 font-bold text-lg bg-primary text-primary-foreground border border-transparent shadow-[0_0_15px_rgba(104,226,47,0.3)] hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(104,226,47,0.5)] transition-all duration-300">
                    SABER MAIS
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary text-lg font-bold h-16 px-10 rounded-full transition-all duration-300 border border-transparent hover:border-primary shadow-[0_0_15px_rgba(104,226,47,0.1)] hover:shadow-[0_0_30px_rgba(104,226,47,0.4)]" asChild>
              <Link href="/nossos-robos">
                VER TODOS OS ASSISTENTES <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Casos de Uso (Use Cases) */}
      <section className="w-full py-32 bg-background border-t border-b border-border relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8">
                Feito para o <span className="text-primary">seu setor</span>
              </h2>
              <p className="text-muted-foreground text-xl mb-12">
                Nossos robôs são adaptáveis a diversos nichos de mercado, resolvendo os gargalos específicos de cada segmento com maestria, velocidade e precisão cirúrgica.
              </p>

              <div className="space-y-8">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="mt-1 flex-shrink-0 bg-card p-3 rounded-full border border-primary/20 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(104,226,47,0.3)] transition-all">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{useCase.title}</h4>
                      <p className="text-muted-foreground text-lg">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-card p-4 shadow-[0_0_40px_rgba(104,226,47,0.1)] group hover:shadow-[0_0_60px_rgba(104,226,47,0.2)] transition-all duration-700">
               <div className="aspect-[4/3] rounded-2xl bg-background border border-border flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 bg-[url('/avatar.png')] bg-contain bg-center bg-no-repeat opacity-10 blur-sm scale-150 group-hover:scale-110 transition-transform duration-1000" />

                  <div className="relative z-10 text-center space-y-6">
                     <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(104,226,47,0.3)] group-hover:scale-110 transition-transform duration-500">
                        <Rocket className="h-12 w-12 text-primary" />
                     </div>
                     <h3 className="text-3xl font-black text-white uppercase tracking-wider">Integração<br/>Expressa</h3>
                     <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                       Conectamos nossos assistentes ao seu WhatsApp, Instagram, Sites e CRMs em questão de <span className="text-primary font-bold">dias, não meses</span>.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefícios (Benefits/ROI) */}
      <section className="w-full py-32 bg-card relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">
              Resultados <span className="text-primary text-glow">Reais</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Implementar Inteligência Artificial não é um custo, é o melhor e mais rápido investimento para a escalabilidade do seu negócio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-8 border border-primary/20 rounded-2xl bg-background hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(104,226,47,0.15)] group">
              <Clock className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-5xl font-black mb-3 text-white">24/7</h3>
              <p className="text-lg text-muted-foreground">Disponibilidade total sem horas extras.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border border-primary/20 rounded-2xl bg-background hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(104,226,47,0.15)] group">
              <Zap className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-5xl font-black mb-3 text-white">-60%</h3>
              <p className="text-lg text-muted-foreground">Redução no tempo de resposta (TMA).</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border border-primary/20 rounded-2xl bg-background hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(104,226,47,0.15)] group">
              <BrainCircuit className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-5xl font-black mb-3 text-white">+40%</h3>
              <p className="text-lg text-muted-foreground">Aumento nas conversões de leads.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border border-primary/20 rounded-2xl bg-background hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(104,226,47,0.15)] group">
              <Bot className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-5xl font-black mb-3 text-white">100%</h3>
              <p className="text-lg text-muted-foreground">Padronização extrema no atendimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final (Final Call to Action) */}
      <section className="w-full py-32 bg-primary relative overflow-hidden">
        {/* Abstract Background pattern for primary section */}
        <div className="absolute inset-0 bg-[url('/avatar.png')] bg-cover bg-center opacity-10 mix-blend-overlay scale-150 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-primary-foreground uppercase mb-8 drop-shadow-md">
            LIDERE O SEU MERCADO
          </h2>
          <p className="max-w-[800px] mx-auto text-2xl font-medium text-primary-foreground/90 mb-12">
            Junte-se a dezenas de empresas que já transformaram suas operações com os agentes de IA de alta performance da Great Path.
          </p>
          <Button size="lg" className="h-20 px-12 text-xl font-black bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-full uppercase tracking-wider" asChild>
            <Link href="/contato">AGENDAR CONSULTORIA ESTRATÉGICA</Link>
          </Button>
        </div>
      </section>

      {/* 7. Formulário Mockup (Newsletter / Contact in Footer-ish area) */}
      <section id="contact" className="w-full py-24 bg-background border-t border-border">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="bg-card border border-primary/30 rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(104,226,47,0.05)] text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10">
              <Mail className="h-16 w-16 text-primary mx-auto mb-8" />
              <h2 className="text-4xl font-black uppercase mb-6 text-white">Domine a Inovação</h2>
              <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
                Assine nossa newsletter VIP ou solicite contato para receber insights táticos exclusivos sobre IA aplicada a negócios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="SEU MELHOR E-MAIL CORPORATIVO"
                  className="flex h-16 w-full rounded-full border border-primary/30 bg-background px-8 py-2 text-sm md:text-base font-bold tracking-wide ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex-1 transition-all"
                  required
                />
                <Button type="button" className="h-16 px-10 font-black text-lg text-primary-foreground rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(104,226,47,0.3)]">
                  INSCREVER-SE
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Ao se inscrever, você concorda com nossos <span className="text-primary cursor-pointer hover:underline">Termos de Serviço</span> e <span className="text-primary cursor-pointer hover:underline">Política de Privacidade</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
