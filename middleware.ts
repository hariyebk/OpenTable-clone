import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose"

// A middleware responsible for checking if there is a jwt token within the request and it is verified
export async function middleware(req: NextRequest, res: NextResponse) {
    // check if the request object has an authorization header in it
    const bearerToken = req.headers.get("authorization") as string
    if(!bearerToken){
        return new NextResponse(
            JSON.stringify({errorMessage: "unauthorized request"}),
            {status: 401}
        )
    }
    // separating the Bearer from the token
    const token = bearerToken.split(" ")[1]
    if(!token){
        return new NextResponse(
            JSON.stringify({errorMessage: "unauthorized request"}),
            {status: 401}
        )
    }
    // verify the jwt token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    try{
        await jose.jwtVerify(token, secret)
    }
    catch(error){
        return new NextResponse(
            JSON.stringify({errorMessage: "unauthorized request"}),
            {status: 401}
        )
    }
}

export const config = {
    matcher: ['/api/auth/me']
}