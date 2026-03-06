"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const links = [
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Nossos Robôs", href: "/nossos-robos" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/horizontal-branco.png"
              alt="Great Path Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} className={navigationMenuTriggerStyle()}>
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="font-semibold" asChild>
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <SheetTitle className="text-left text-lg font-bold mb-4">
                Menu
              </SheetTitle>
              <div className="flex flex-col space-y-4 pr-6">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/horizontal-branco.png"
                    alt="Great Path Logo"
                    width={140}
                    height={35}
                    className="h-8 w-auto mb-6"
                  />
                </Link>
                <nav className="flex flex-col space-y-4 mt-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground/70 transition-colors hover:text-foreground font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col space-y-2">
                  <Button variant="default" className="w-full font-semibold" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
