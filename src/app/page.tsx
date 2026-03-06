import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background relative overflow-hidden flex flex-1 items-center justify-center">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Revolucione sua empresa com <span className="text-primary text-glow">Inteligência Artificial</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Plataforma profissional para assistentes de IA, soluções corporativas e produtos digitais projetados para escalar seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="w-full sm:w-auto font-semibold text-primary-foreground text-md h-12 px-8" asChild>
                <Link href="/nossos-robos">Conheça nossos Robôs</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-md h-12 px-8 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all" asChild>
                <Link href="/contato">Falar com Consultor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Features Section */}
      <section className="w-full py-16 md:py-24 bg-card/50 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Assistentes de IA",
                desc: "Automação inteligente e atendimento 24/7 com nossos agentes de última geração."
              },
              {
                title: "Soluções Empresariais",
                desc: "Consultoria e ferramentas digitais para aumentar a produtividade e vendas."
              },
              {
                title: "Alta Performance",
                desc: "Estrutura premium desenhada para velocidade, segurança e resultados."
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <div className="h-6 w-6 rounded-sm bg-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
