"use client"

import { useChat } from "@ai-sdk/react"
import { useEffect, useRef } from "react"
import { Send, User, Bot, Loader2 } from "lucide-react"
import { Message } from "ai"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AgentChat({
  agentId,
  agentName,
  area,
  onChatReady,
}: {
  agentId: string
  agentName: string
  area: string
  onChatReady?: (append: (message: any | Omit<any, 'id'>) => Promise<string | null | undefined>) => void
}) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
    body: { agentId },
    initialMessages: [
      {
        id: "initial-message",
        role: "assistant",
        content: `Olá! Eu sou ${agentName}, seu assistente focado em ${area}. Como posso te ajudar hoje?`,
      }
    ]
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (onChatReady && append) {
      onChatReady(append)
    }
  }, [onChatReady, append])

  return (
    <Card className="flex flex-col h-[600px] bg-[#0d0d0d] border-[#333333]">
      <CardHeader className="border-b border-[#333333] p-4 flex flex-row items-center gap-4">
        <Avatar className="h-10 w-10 border border-[#333333]">
          <AvatarFallback className="bg-[#1a1a1a] text-[#68e22f]">
            {agentName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg text-white">{agentName}</CardTitle>
          <p className="text-xs text-[#68e22f]">Agente Online</p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-3 max-w-[80%] ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar className="h-8 w-8 mt-1 border border-[#333333] shrink-0">
                {message.role === "user" ? (
                  <AvatarFallback className="bg-[#68e22f] text-black">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                ) : (
                  <AvatarFallback className="bg-[#1a1a1a] text-gray-400">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                )}
              </Avatar>

              <div
                className={`p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-[#68e22f] text-black rounded-tr-none"
                    : "bg-[#1a1a1a] text-white rounded-tl-none border border-[#333333]"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {message.content}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[80%] flex-row">
              <Avatar className="h-8 w-8 mt-1 border border-[#333333] shrink-0">
                <AvatarFallback className="bg-[#1a1a1a] text-gray-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-[#1a1a1a] text-white rounded-tl-none border border-[#333333]">
                <div className="flex space-x-1 items-center h-4">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </CardContent>

      <div className="p-4 border-t border-[#333333] bg-[#0a0a0a]">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder={`Envie uma mensagem para ${agentName}...`}
            className="flex-1 bg-[#1a1a1a] border-[#333333] text-white focus-visible:ring-[#68e22f]"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="bg-[#68e22f] text-black hover:bg-[#58c225] shrink-0"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar mensagem</span>
          </Button>
        </form>
      </div>
    </Card>
  )
}
