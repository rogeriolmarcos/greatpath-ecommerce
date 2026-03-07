"use client"

import { useState, useCallback } from "react"
import { Message } from "ai"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingCalculator } from "./pricing-calculator"
import { PricingDashboard } from "./pricing-dashboard"
import { AgentChat } from "./chat"
import { IntegrationsPanel } from "./integrations-panel"

export function AgentContentWrapper({
  agentId,
  agentName,
  area,
  hasCalculator
}: {
  agentId: string,
  agentName: string,
  area: string,
  hasCalculator: boolean
}) {
  const [chatAppend, setChatAppend] = useState<((message: Message | Omit<Message, 'id'>) => Promise<string | null | undefined>) | null>(null)

  // Guardamos o resultado da calculadora para exibir no dashboard
  const [calcResult, setCalcResult] = useState<any>(null)

  const handleChatReady = useCallback((appendFn: any) => {
    setChatAppend(() => appendFn)
  }, [])

  const handleCalculate = async (data: any) => {
    // 1. Enviar mensagem via chat usando a função append do useChat
    if (chatAppend) {
      const prompt = `Preciso de ajuda para precificar o seguinte produto:
Nome: ${data.productName}
Custo Direto: R$ ${data.directCost}
Custo Indireto: R$ ${data.indirectCost}
Margem Desejada: ${data.desiredMargin}%
Impostos: ${data.taxes}%
Concorrência: ${data.competition || 'Não informado'}

Por favor, forneça uma análise com:
1. Preço sugerido final de venda.
2. A margem real considerando todos os custos e impostos.
3. O ponto de equilíbrio financeiro.
4. Sua análise sobre a viabilidade e concorrência.
Retorne de forma clara.`

      try {
        await chatAppend({
          role: "user",
          content: prompt,
        } as any)

        // Simular um processamento da IA para preencher o Dashboard de Resultado
        const suggestedPrice = (Number(data.directCost) + Number(data.indirectCost)) * (1 + (Number(data.desiredMargin) / 100)) / (1 - (Number(data.taxes) / 100))

        const mockResult = {
          suggestedPrice: suggestedPrice,
          realMargin: Number(data.desiredMargin),
          breakEvenPoint: Number(data.directCost) + Number(data.indirectCost),
          competitionAnalysis: "Com base nos dados fornecidos, o preço sugerido cobre todos os custos diretos, indiretos e a carga tributária, entregando a margem desejada. Se o preço da concorrência for muito inferior ao sugerido, recomendamos rever a estrutura de custos ou agregar maior valor percebido ao produto para justificar o premium."
        }

        setCalcResult(mockResult)

        // Salvar os dados no banco via endpoint
        await fetch('/api/calculations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            agentId,
            inputs: data,
            result: mockResult,
          })
        })
      } catch (error) {
        console.error("Erro ao salvar cálculo", error)
      }
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 flex-1 min-h-0">
      <div className="lg:col-span-3 h-full">
        <AgentChat
          agentId={agentId}
          agentName={agentName}
          area={area}
          onChatReady={handleChatReady}
        />
      </div>

      <div className="lg:col-span-2 h-full flex flex-col">
        <Tabs defaultValue={hasCalculator ? "calculator" : "integrations"} className="w-full flex-1 flex flex-col">
          <TabsList className="w-full bg-[#1a1a1a] border border-[#333333] mb-4">
            {hasCalculator && (
              <>
                <TabsTrigger value="calculator" className="flex-1 data-[state=active]:bg-[#333333] data-[state=active]:text-[#68e22f]">
                  Calculadora
                </TabsTrigger>
                <TabsTrigger value="dashboard" className="flex-1 data-[state=active]:bg-[#333333] data-[state=active]:text-[#68e22f]">
                  Resultado
                </TabsTrigger>
              </>
            )}
            <TabsTrigger value="integrations" className="flex-1 data-[state=active]:bg-[#333333] data-[state=active]:text-[#68e22f]">
              Integrações
            </TabsTrigger>
          </TabsList>

          {hasCalculator && (
            <>
              <TabsContent value="calculator" className="flex-1 mt-0">
                <div className="h-full overflow-y-auto pr-2">
                  <PricingCalculator agentId={agentId} onCalculate={handleCalculate} />
                </div>
              </TabsContent>

              <TabsContent value="dashboard" className="flex-1 mt-0">
                <div className="h-full overflow-y-auto pr-2">
                  <PricingDashboard result={calcResult} />
                </div>
              </TabsContent>
            </>
          )}

          <TabsContent value="integrations" className="flex-1 mt-0">
            <div className="h-full overflow-y-auto pr-2">
              <IntegrationsPanel agentId={agentId} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
