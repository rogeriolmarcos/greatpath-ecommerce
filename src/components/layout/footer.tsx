import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/horizontal-branco.png"
                alt="Great Path Logo"
                width={160}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              Soluções em Inteligência Artificial para modernizar e escalar o seu negócio.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/nossos-robos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nossos Robôs
                </Link>
              </li>
              <li>
                <Link href="/produtos-digitais" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Produtos Digitais
                </Link>
              </li>
              <li>
                <Link href="/assistentes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Assistentes de IA
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Great Path. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <Link href="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
