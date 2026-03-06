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
    { name: "Vega", role: "Gestão Financeira", desc: "Automatiza cobranças e monitora métricas do negócio." }
  ];

  const useCases = [
    { title: "E-commerce", desc: "Aumente a conversão com recomendações personalizadas e suporte imediato no carrinho." },
    { title: "Saúde e Clínicas", desc: "Agendamento automático, triagem inicial e lembretes de consultas via WhatsApp." },
    { title: "Imobiliárias", desc: "Apresentação de imóveis, qualificação de leads e agendamento de visitas 24h." },
    { title: "Educação", desc: "Tutores virtuais, suporte acadêmico e matrícula automatizada para novos alunos." }
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* 1. Hero Section */}
      <section className="w-full py-16 md:py-32 bg-background relative overflow-hidden flex flex-1 items-center justify-center">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <Zap className="mr-2 h-4 w-4" />
                <span>O Futuro da Produtividade Chegou</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                Automatize seu negócio com <span className="text-primary text-glow">Assistentes de IA</span>
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
                Reduza custos, escale seu atendimento e aumente suas vendas em até 40% com agentes inteligentes de última geração que trabalham 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto font-bold text-primary-foreground text-md h-14 px-8" asChild>
                  <Link href="#assistants">Ver Nossos Robôs</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold text-md h-14 px-8 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all group" asChild>
                  <Link href="#contact">
                    Falar com um Consultor
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto flex justify-center w-full max-w-[500px]">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border bg-card/50 shadow-2xl p-4 flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-50" />
                 <Image
                    src="/avatar.png"
                    alt="Assistente de IA Great Path"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl z-10 relative hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Institucional (Social Proof / Credibility) */}
      <section className="w-full py-16 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Por que escolher a Great Path?</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl">
                Não somos apenas uma loja. Somos seu parceiro estratégico em transformação digital e automação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BrainCircuit size={32} />
                </div>
                <h3 className="text-xl font-bold">Tecnologia de Ponta</h3>
                <p className="text-muted-foreground">Modelos avançados treinados com dados específicos do seu nicho para máxima precisão.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Bot size={32} />
                </div>
                <h3 className="text-xl font-bold">Personalização Total</h3>
                <p className="text-muted-foreground">Assistentes com a voz, tom e conhecimento exato da sua marca e procedimentos.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold">Suporte Consultivo</h3>
                <p className="text-muted-foreground">Acompanhamento contínuo para garantir que a IA gere ROI real para sua empresa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grade de Assistentes (Products/Assistants Grid) */}
      <section id="assistants" className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Conheça Nossos <span className="text-primary">Especialistas Digitais</span></h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl">
              Agentes inteligentes prontos para serem integrados ao seu negócio hoje mesmo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants.map((bot, i) => (
              <div key={i} className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/5">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden p-1">
                      <Image src="/avatar.png" alt={bot.name} width={48} height={48} className="object-cover" />
                    </div>
                    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {bot.role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{bot.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {bot.desc}
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    Saber mais
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" asChild>
              <Link href="/nossos-robos">
                Ver todos os assistentes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Casos de Uso (Use Cases) */}
      <section className="w-full py-24 bg-card/50 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Feito para o seu setor</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nossos robôs são adaptáveis a diversos nichos de mercado, resolvendo os gargalos específicos de cada segmento com maestria e velocidade.
              </p>

              <div className="space-y-6">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{useCase.title}</h4>
                      <p className="text-muted-foreground">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-2 shadow-xl">
               <div className="aspect-[4/3] rounded-xl bg-background border border-border flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/avatar.png')] bg-cover bg-center opacity-10 blur-sm" />
                  <div className="relative z-10 text-center space-y-4">
                     <Rocket className="h-16 w-16 text-primary mx-auto" />
                     <h3 className="text-2xl font-bold">Integração Simples</h3>
                     <p className="text-muted-foreground max-w-sm">
                       Conectamos nossos assistentes ao WhatsApp, Instagram, Sites e CRMs em questão de dias, não meses.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefícios (Benefits/ROI) */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Resultados que você pode medir</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Implementar IA não é um custo, é o melhor investimento para escalabilidade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2 text-foreground">24/7</h3>
              <p className="text-sm text-muted-foreground">Disponibilidade total sem horas extras ou pausas.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2 text-foreground">-60%</h3>
              <p className="text-sm text-muted-foreground">Redução no tempo médio de resposta (TMA).</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <BrainCircuit className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2 text-foreground">+40%</h3>
              <p className="text-sm text-muted-foreground">Aumento nas taxas de conversão de leads.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-3xl font-bold mb-2 text-foreground">100%</h3>
              <p className="text-sm text-muted-foreground">Padronização no atendimento e qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final (Final Call to Action) */}
      <section className="w-full py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/avatar.png')] bg-cover bg-center opacity-5 mix-blend-overlay" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-primary-foreground mb-6">
            Pronto para liderar o seu mercado?
          </h2>
          <p className="max-w-[700px] mx-auto text-xl text-primary-foreground/80 mb-10">
            Junte-se a dezenas de empresas que já transformaram suas operações com os agentes de IA da Great Path.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg font-bold bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all shadow-lg" asChild>
            <Link href="/contato">Agendar Consultoria Gratuita</Link>
          </Button>
        </div>
      </section>

      {/* 7. Formulário Mockup (Newsletter / Contact in Footer-ish area) */}
      <section id="contact" className="w-full py-16 bg-card border-t border-border">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Fique por dentro das inovações</h2>
            <p className="text-muted-foreground mb-8">
              Assine nossa newsletter ou solicite um contato comercial para receber insights exclusivos sobre IA para negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail corporativo"
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                required
              />
              <Button type="button" className="h-12 px-8 font-bold text-primary-foreground">
                Inscrever-se
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Ao se inscrever, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}