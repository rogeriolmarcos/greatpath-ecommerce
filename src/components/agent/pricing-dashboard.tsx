"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PricingDashboardProps {
  result: {
    suggestedPrice: number
    realMargin: number
    breakEvenPoint: number
    competitionAnalysis: string
  } | null
}

export function PricingDashboard({ result }: PricingDashboardProps) {
  if (!result) {
    return (
      <Card className="bg-[#0d0d0d] border-[#333333] h-full flex flex-col justify-center items-center text-center p-6">
        <p className="text-gray-400">
          Preencha a calculadora e envie os dados para o Roberto gerar uma análise completa de precificação.
        </p>
      </Card>
    )
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  }

  return (
    <Card className="bg-[#0d0d0d] border-[#333333] flex flex-col h-full overflow-hidden">
      <CardHeader className="border-b border-[#333333] bg-[#1a1a1a]">
        <CardTitle className="text-white">Análise de Preço</CardTitle>
        <CardDescription className="text-gray-400">
          Resultado da sugestão do Roberto
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-6 space-y-6 overflow-y-auto">

        <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-1">Preço Sugerido de Venda</p>
          <h3 className="text-4xl font-bold text-[#68e22f]">{formatCurrency(result.suggestedPrice)}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
            <p className="text-xs text-gray-500 mb-1">Margem Real</p>
            <p className="text-xl font-semibold text-white">{result.realMargin.toFixed(2)}%</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333]">
            <p className="text-xs text-gray-500 mb-1">Ponto de Equilíbrio</p>
            <p className="text-xl font-semibold text-white">{formatCurrency(result.breakEvenPoint)}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
            Análise e Concorrência
            <Badge variant="outline" className="border-blue-500 text-blue-400">Insights</Badge>
          </h4>
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333333] text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
            {result.competitionAnalysis}
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
