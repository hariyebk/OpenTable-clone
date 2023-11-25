import { NextApiRequest, NextApiResponse } from "next";
import { ENCRYPTION_ALGORITHM, HTTPMETHODS } from "../../../app/utils/variables";
import validator from 'validator'
import bcrypt from "bcrypt"
import * as jose from 'jose'
import {PrismaClient} from "@prisma/client"
import {setCookie} from "cookies-next"

const prisma = new PrismaClient()
interface NEWUSERTYPE {
    first_name: string,
    last_name: string,
    city: string,
    email: string,
    password: string,
    phone: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === HTTPMETHODS.post){
        const {first_name, last_name, city, email, password, phone}: NEWUSERTYPE = req.body
        const errors: string[] = []
        const validateSchema = [
            {
            valid: validator.isLength(first_name, {
                min: 1,
                max: 20
            }),
            errorMessage: "first name is invalid"
            },
            {
                valid: validator.isLength(last_name, {
                    min: 1,
                    max: 20
                }),
                errorMessage: "last name is invalid"
            },
            {
                valid: validator.isLength(city, {
                    min: 1,
                    max: 10
                }),
                errorMessage: "city is invalid"
            },
            {
                valid: validator.isEmail(email),
                errorMessage: "email is invalid"
            },
            {
                valid: validator.isStrongPassword(password),
                errorMessage: "password is not strong enough"
            },
            {
                valid: validator.isMobilePhone(phone),
                errorMessage: "phone number is invalid"
            }
        ]
        // check if inputs are valid
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
        // check if the user doesn't exist already
        const userWithEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(userWithEmail){
            return res.status(400).json({
                status: "error",
                errorMessage: "Email is associated with another account. please Log in if you have an account"
            })
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)
        // create new user
        const newUser = await prisma.user.create({
            data: {
                first_name,
                last_name,
                email,
                password: hashedPassword,
                city,
                phone
            }})
        if(!newUser){
            return res.status(400).json({
                status: "error",
                message: "something went wrong while creating A new user. please try again"
            })
        }
        // let the user automatically sign in when they sign up by providing them a jwt token
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const token = await new jose.SignJWT({email: newUser.email}).setProtectedHeader({alg: ENCRYPTION_ALGORITHM}).setExpirationTime("24h").sign(secret)
        setCookie("jwt", token,{req, res, maxAge: 6 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true,})

        return res.status(200).json({
            id: newUser.id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            city: newUser.city,
            phone: newUser.phone
        })
    }
    // If we recieve other HTTP methods than POST
    res.status(404).send("unknown endpoint")

}