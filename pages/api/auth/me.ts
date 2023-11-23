import { NextApiRequest, NextApiResponse } from "next";
import { HTTPMETHODS } from "../../../app/utils/variables";
import * as jose from "jose"
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method === HTTPMETHODS.get){
        // check if the request object has an authorization header in it
        const bearerToken = req.headers["authorization"] as string
        if(!bearerToken){
            return res.status(401).json({
                sttaus: "error",
                message: "unauthorized request (no authorization header)"
            })
        }
        // separating the Bearer from the token
        const token = bearerToken.split(" ")[1]
        if(!token){
            return res.status(401).json({
                sttaus: "error",
                message: "unauthorized request (no bearer token)"
            })
        }
        // verify the jwt token
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        try{
            await jose.jwtVerify(token, secret)
        }
        catch(error){
            return res.status(401).json({
                sttaus: "error",
                message: "unauthorized request (inavlid token)"
            })
        }
        // decode the payload from the token
        const payload = jwt.decode(token) as {email: string}
        // check if the user exists
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                city: true,
                created_at: true,
                phone: true
            }
        })
        if(!user){
            return res.status(401).json({
                status: "error",
                message: "unauthorized"
            })
        }
        res.status(200).json({
            status: "success",
            user
        })
    }

    res.status(404).send("unknown endpoint")
}