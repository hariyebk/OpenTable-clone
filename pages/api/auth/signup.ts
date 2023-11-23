import { NextApiRequest, NextApiResponse } from "next";
import { ENCRYPTION_ALGORITHM, HTTPMETHODS } from "../../../app/utils/variables";
import validator from 'validator'
import bcrypt from "bcrypt"
import * as jose from 'jose'
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()
interface NEWUSERTYPE {
    firstname: string,
    lastname: string,
    city: string,
    email: string,
    password: string,
    phonenumber: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === HTTPMETHODS.post){
        const {firstname, lastname, city, email, password, phonenumber}: NEWUSERTYPE = req.body
        const errors: string[] = []
        const validateSchema = [
            {
            valid: validator.isLength(firstname, {
                min: 1,
                max: 20
            }),
            errorMessage: "first name is invalid"
            },
            {
                valid: validator.isLength(lastname, {
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
                valid: validator.isMobilePhone(phonenumber),
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
                first_name: firstname,
                last_name: lastname,
                email,
                password: hashedPassword,
                city,
                phone: phonenumber
            }})
        if(!newUser){
            return res.status(400).json({
                status: "error",
                message: "something went wrong while creating A new user. please try again"
            })
        }
        return res.status(200).json({
            status: "success",
            newUser
        })
    }
    // If we recieve other HTTP methods than POST
    res.status(404).send("unknown endpoint")

}