import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const clint = new PrismaClient();

export async function GET() {
  return Response.json({
    name: "Sabbir Tanvir",
    email: "Sabbir@gmail.com"
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