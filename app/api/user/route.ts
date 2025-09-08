import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import client from "@/db";

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