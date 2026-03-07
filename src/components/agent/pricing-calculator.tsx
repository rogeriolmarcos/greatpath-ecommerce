"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Calculator, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const formSchema = z.object({
  productName: z.string().min(2, "Nome é obrigatório"),
  directCost: z.coerce.number().min(0, "Deve ser maior ou igual a 0"),
  indirectCost: z.coerce.number().min(0, "Deve ser maior ou igual a 0"),
  desiredMargin: z.coerce.number().min(0, "Deve ser maior ou igual a 0"),
  taxes: z.coerce.number().min(0, "Deve ser maior ou igual a 0"),
  competition: z.string().optional(),
}) as any

interface PricingCalculatorProps {
  agentId: string
  onCalculate: (data: z.infer<typeof formSchema>) => void
}

export function PricingCalculator({ agentId, onCalculate }: PricingCalculatorProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      directCost: 0,
      indirectCost: 0,
      desiredMargin: 30,
      taxes: 10,
      competition: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    // Aqui nós passamos os dados para cima para que o componente da página
    // possa injetar esses dados no chat do Roberto e enviar uma mensagem pra IA.
    onCalculate(values)
    setIsLoading(false)
  }

  return (
    <Card className="bg-[#0d0d0d] border-[#333333]">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Calculator className="h-5 w-5 text-[#68e22f]" />
          Calculadora de Precificação
        </CardTitle>
        <CardDescription className="text-gray-400">
          Preencha os dados abaixo e o Roberto sugerirá o melhor preço.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Nome do Produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Consultoria Premium" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="directCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Custo Direto (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="indirectCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Custo Indireto (R$)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="desiredMargin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Margem (%)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Impostos (%)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="competition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Concorrência (opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Produto X custa R$ 150" {...field} className="bg-[#1a1a1a] border-[#333333] text-white" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#68e22f] text-black hover:bg-[#58c225] font-semibold"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Calcular Preço Ideal
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
