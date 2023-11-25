import { NextRequest, NextResponse } from "next/server";
import {getCookie} from "cookies-next"
import * as jose from "jose"

// A middleware responsible for checking if there is a jwt token within the request and it is verified
export async function middleware(req: NextRequest, res: NextResponse) {
    const token = getCookie("jwt", {req, res, httpOnly: true, secure: true})
    if(!token){
        return new NextResponse(
            JSON.stringify({errorMessage: "unauthorized request (no token found)"}),
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
            JSON.stringify({errorMessage: "unauthorized request (invalid token)"}),
            {status: 401}
        )
    }
}

export const config = {
    matcher: ['/api/auth/me']
}