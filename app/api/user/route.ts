import { PrismaClient } from "@/app/generated/prisma"; 
import { NextResponse, NextRequest } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
    const user = await client.user.findFirst();

    return NextResponse.json({
        email: user?.email,
        name: "abhinav"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        return NextResponse.json({
            body
        })
    }catch(e) {
        console.log(e)
        return NextResponse.json({
            message: "Error while signing up",
        }, {
            status: 411
        })
    }
}