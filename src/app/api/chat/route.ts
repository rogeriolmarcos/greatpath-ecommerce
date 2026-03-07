import { openai } from '@ai-sdk/openai'
import { streamText, type Message } from 'ai'
import prisma from '@/lib/prisma'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session || !session.user) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const { messages, agentId } = await req.json()

    if (!messages || !agentId) {
      return new NextResponse('Faltando parâmetros requiridos: messages ou agentId', { status: 400 })
    }

    const agent = await prisma.agent.findUnique({
      where: { id: agentId }
    })

    if (!agent) {
      return new NextResponse('Agente não encontrado', { status: 404 })
    }

    // Carregar o system prompt diretamente do banco e injetar como primeira mensagem de sistema
    const systemPrompt = {
      role: 'system',
      content: agent.systemPrompt,
    }

    const result = await streamText({
      model: openai('gpt-4o'),
      messages: [systemPrompt, ...messages] as any,
      // Ao finalizar, salvamos a conversa no banco
      async onFinish({ text }) {
        // Encontrar ou criar uma conversa do dia para este agente/usuário
        // Como o escopo não pede gerenciamento complexo de sessões, vamos criar um novo log de mensagem
        await prisma.conversation.create({
          data: {
            userId: session.user.id as string,
            agentId: agent.id,
            messages: [
              ...messages,
              { role: 'assistant', content: text, timestamp: new Date().toISOString() }
            ] as any,
          }
        })
      }
    })

    return result.toAIStreamResponse()
  } catch (error) {
    console.error('Erro no /api/chat:', error)
    return new NextResponse('Erro Interno do Servidor', { status: 500 })
  }
}
