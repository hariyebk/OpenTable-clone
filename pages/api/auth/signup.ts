import { NextApiRequest, NextApiResponse } from "next";
import { HTTPMETHODS } from "../../../app/utils/variables";
import validator from 'validator'
export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === HTTPMETHODS.post){
        const {firstname, lastname, city, email, password, phonenumber} = req.body
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
        validateSchema.forEach((check) => {
            if(!check.valid){
                errors.push(check.errorMessage)
            }
        })
        if(errors.length > 0){
            res.status(400).json({
                status: "error",
                errorMessage: errors[0]
            })
        }
        res.status(200).json({
            status: "success"
        })
    }
}