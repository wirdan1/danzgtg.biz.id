import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        developer: "Danz-dev",
        email: "danz124c@gmail.com",
        github: "https://github.com/wirdan1",
        api_endpoint: "https://admindanzgtg.biz.id"
    });
}
