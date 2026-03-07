import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { auth } from "@/auth"
import { encryptToken, decryptToken } from "@/lib/security/encryption"

// Como não estamos implementando o callback do OAuth real da Vercel agora,
// esta rota apenas mocka a conexão salvando um token genérico e criptografado.
export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session || !session.user) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const { agentId, type, action, config } = await req.json()

    if (!agentId || !type) {
      return new NextResponse('Parâmetros inválidos', { status: 400 })
    }

    if (action === 'disconnect') {
      await prisma.integration.deleteMany({
        where: {
          userId: session.user.id,
          agentId,
          type
        }
      })
      return NextResponse.json({ success: true, isConnected: false })
    }

    // Se a ação for "connect", simulamos o fluxo salvando um token gerado
    const mockToken = `mock_${type}_token_123`
    const encryptedToken = encryptToken(mockToken)

    const integration = await prisma.integration.upsert({
      where: {
        id: 'novo-id-nao-existe' // Na verdade não temos unique em [userId, agentId, type] no schema atual,
                                 // usar upsert exige unique constraint, então faremos delete/create para simplificar.
      },
      create: {
        userId: session.user.id,
        agentId,
        type,
        accessToken: encryptedToken,
        config: config || { defaultMessage: 'Olá! Tenho uma novidade da Great Path.' },
        isConnected: true
      },
      update: {}
    }).catch(async () => {
       // Workaround pois upsert falha sem ID explícito ou index único na tabela do Prisma.
       await prisma.integration.deleteMany({ where: { userId: session.user.id, agentId, type } })
       return prisma.integration.create({
         data: {
            userId: session.user.id,
            agentId,
            type,
            accessToken: encryptedToken,
            config: config || { defaultMessage: 'Olá! Tenho uma novidade da Great Path.' },
            isConnected: true
         }
       })
    })

    return NextResponse.json({ success: true, isConnected: true })

  } catch (error) {
    console.error('Erro na integração:', error)
    return new NextResponse('Erro interno', { status: 500 })
  }
}

// Retorna as integrações ativas (sem o token, para segurança)
export async function GET(req: Request) {
  try {
    const session = await auth()
    if (!session || !session.user) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const agentId = searchParams.get('agentId')

    if (!agentId) {
      return new NextResponse('ID do agente faltando', { status: 400 })
    }

    const integrations = await prisma.integration.findMany({
      where: {
        userId: session.user.id,
        agentId
      },
      select: {
        id: true,
        type: true,
        isConnected: true,
        config: true,
        // NÃO selecionamos o accessToken! Protegido no backend.
      }
    })

    return NextResponse.json(integrations)

  } catch (error) {
    console.error('Erro ao buscar integrações:', error)
    return new NextResponse('Erro interno', { status: 500 })
  }
}
