import { NextResponse, NextRequest } from "next/server";

export function GET(req: NextRequest) {
    return NextResponse.json({
        email: "abhinav@gmail.com",
        name: "abhinav"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(req.headers.get("authorization"));

    console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({
        body
    })
}