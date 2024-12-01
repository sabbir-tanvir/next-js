import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const clint = new PrismaClient();

export async function GET(req: NextRequest) {
  const user = await  clint.user.findFirst();

  return Response.json({
    name: user?.username,
    email: user?.password
  })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    await clint.user.create({ 
        data: {
            username: body.username,
            password: body.password
        }
    })  
 
    return NextResponse.json({ username: body.username, password: body.password })
}