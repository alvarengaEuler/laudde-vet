import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
    try {
      const user = await prisma.user.findMany({
        include: {
         profile: true,
        },
        
      })
  
      return NextResponse.json(user)
    } catch (error) {
      console.error("Error fetching users:", error)
      return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
    }
}
    
export async function POST(req: Request) {
    const body = await req.json()
    console.log("cheguei aqui:", body)
    try {
      const user = await prisma.user.create({
        data: body,
      })
      return NextResponse.json(user, { status: 201 })
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
  }      