import { NextApiRequest, NextApiResponse } from "next";
import {deleteCookie} from "cookies-next"
import { HTTPMETHODS } from "../../../app/utils/variables";

export default function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method === HTTPMETHODS.get){
        deleteCookie("jwt", {req, res, httpOnly: true, secure: true})
        return res.status(200).json({
            status: "success"
        })
    }
}