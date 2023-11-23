import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import * as jose from "jose"
import validator from "validator";
import { cookies } from 'next/headers'
import { ENCRYPTION_ALGORITHM, HTTPMETHODS } from "../../../app/utils/variables";
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === HTTPMETHODS.post){
        const errors: string[] = []
        const {email, password} = req.body
        // validate inputs
        const validateSchema = [
            {
                valid:  validator.isEmail(email),
                errorMessage: "email is invalid"
            },
            {
                valid: validator.isLength(password, {
                    min: 1,
                    max: 20
                }),
                errorMessage: "password is too short"
            }
        ]
        validateSchema.forEach((check) => {
            if(!check.valid){
                errors.push(check.errorMessage)
            }
        })
        if(errors.length > 0){
            return res.status(400).json({
                status: "error",
                message: errors[0]
            })
        }
        // check if the user exists in our database
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user){
            return res.status(401).json({
                status: "error",
                message: "Incorrect email or password"
            })
        }
        // check if password matches
        const checkPassword  = await bcrypt.compare(password, user?.password!)
        if(!checkPassword){
            return res.status(401).json({
                status: "error",
                message: "Incorrect email or password"
            })
        }
        // authenticate the user and send the jwt
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        // secret for the JWT signature
        const token = await new jose.SignJWT({email: user.email}).setProtectedHeader({alg: ENCRYPTION_ALGORITHM}).setExpirationTime("24h").sign(secret)
        return res.status(200).json({
            status: "success",
            token
        })
        // cookies().set({
        //     name: 'jwt',
        //     value: token,
        // });

    }

    res.status(404).send("unknown endpoint")

}