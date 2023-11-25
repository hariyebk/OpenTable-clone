import { NextApiRequest, NextApiResponse } from "next";
import { HTTPMETHODS } from "../../../app/utils/variables";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method === HTTPMETHODS.get){
        const token = req.headers.cookie?.split("=")[1] 
        // decode the payload from the token. the jasonwebtoken library is best suited to decode a token
        const payload = jwt.decode(token!) as {email: string}
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
        return res.status(200).json({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                city: user.city,
                phone: user.phone
        })
    }

    res.status(404).send("unknown endpoint")
}