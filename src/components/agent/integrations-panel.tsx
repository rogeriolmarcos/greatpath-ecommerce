"use client"

import { useState, useEffect } from "react"
import { Calendar, Mail, MessageCircle, FileSpreadsheet, Settings } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Integration {
  id: string
  type: string
  isConnected: boolean
  config: any
}

interface IntegrationsPanelProps {
  agentId: string
}

const AVAILABLE_INTEGRATIONS = [
  {
    type: "google_calendar",
    name: "Google Calendar",
    description: "Sincronize eventos e receba alertas da agenda.",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    type: "gmail",
    name: "Gmail",
    description: "Envio de e-mails automáticos com resumos ou alertas.",
    icon: Mail,
    color: "text-red-500",
  },
  {
    type: "whatsapp",
    name: "WhatsApp",
    description: "Notificações via Z-API ou provedor homologado.",
    icon: MessageCircle,
    color: "text-green-500",
  },
  {
    type: "google_sheets",
    name: "Google Sheets",
    description: "Exporte dados de cálculos para planilhas.",
    icon: FileSpreadsheet,
    color: "text-emerald-500",
  },
]

export function IntegrationsPanel({ agentId }: IntegrationsPanelProps) {
  const [integrations, setIntegrations] = useState<Integration[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchIntegrations() {
      try {
        const res = await fetch(`/api/integrations?agentId=${agentId}`)
        if (res.ok) {
          const data = await res.json()
          setIntegrations(data)
        }
      } catch (error) {
        console.error("Erro ao buscar integrações", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchIntegrations()
  }, [agentId])

  const toggleIntegration = async (type: string, currentState: boolean) => {
    // Para simplificar a demonstração OAuth, o toggle já envia o mock pro backend
    const action = currentState ? "disconnect" : "connect"

    // Atualiza otimista na UI
    setIntegrations(prev => {
      const existing = prev.find(i => i.type === type)
      if (existing) {
        return prev.map(i => i.type === type ? { ...i, isConnected: !currentState } : i)
      } else {
        return [...prev, { id: 'temp', type, isConnected: true, config: {} }]
      }
    })

    try {
      await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId, type, action })
      })
    } catch (error) {
      console.error("Falha ao conectar integração")
      // Faria rollback do state em caso real...
    }
  }

  const isConnected = (type: string) => {
    return integrations.find(i => i.type === type)?.isConnected || false
  }

  if (isLoading) {
    return <div className="p-4 text-center text-gray-500">Carregando integrações...</div>
  }

  return (
    <Card className="bg-[#0d0d0d] border-[#333333] flex flex-col h-full overflow-hidden">
      <CardHeader className="border-b border-[#333333] bg-[#1a1a1a]">
        <CardTitle className="text-white">Integrações Externas</CardTitle>
        <CardDescription className="text-gray-400">
          Conecte este agente às suas ferramentas favoritas. Seus tokens ficam armazenados com criptografia de ponta a ponta no servidor.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-6 overflow-y-auto">
        {AVAILABLE_INTEGRATIONS.map((integration) => {
          const connected = isConnected(integration.type)
          const integrationData = integrations.find(i => i.type === integration.type)

          return (
            <div
              key={integration.type}
              className={`p-4 rounded-xl border flex flex-col gap-4 transition-colors ${
                connected ? "border-[#68e22f]/30 bg-[#68e22f]/5" : "border-[#333333] bg-[#1a1a1a]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md bg-[#111111] ${integration.color}`}>
                    <integration.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium flex items-center gap-2">
                      {integration.name}
                      {connected && (
                        <Badge variant="outline" className="border-[#68e22f] text-[#68e22f] h-5 px-1.5 text-[10px]">
                          Conectado
                        </Badge>
                      )}
                    </h4>
                    <p className="text-sm text-gray-400">{integration.description}</p>
                  </div>
                </div>

                <Switch
                  checked={connected}
                  onCheckedChange={() => toggleIntegration(integration.type, connected)}
                  className="data-[state=checked]:bg-[#68e22f]"
                />
              </div>

              {connected && (
                <div className="pt-3 border-t border-[#333333] flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="border-[#333333] hover:bg-[#1a1a1a] hover:text-white">
                        <Settings className="mr-2 h-4 w-4 text-gray-400" />
                        Configurar Alertas
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0d0d0d] border-[#333333] text-white">
                      <DialogHeader>
                        <DialogTitle>Configurar {integration.name}</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Configure a mensagem padrão enviada por este agente.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        {integration.type === "whatsapp" && (
                          <div className="space-y-2">
                            <Label>Número do WhatsApp (Destino Padrão)</Label>
                            <Input placeholder="+55 11 99999-9999" className="bg-[#1a1a1a] border-[#333333]" />
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label>Mensagem/Template Padrão</Label>
                          <Textarea
                            placeholder="Olá! Segue o resumo do agente..."
                            className="bg-[#1a1a1a] border-[#333333] min-h-[100px]"
                            defaultValue={integrationData?.config?.defaultMessage || ""}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-[#333333] text-white hover:bg-[#1a1a1a]">Cancelar</Button>
                        </DialogTrigger>
                        <DialogTrigger asChild>
                          <Button className="bg-[#68e22f] text-black hover:bg-[#58c225]">Salvar</Button>
                        </DialogTrigger>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
