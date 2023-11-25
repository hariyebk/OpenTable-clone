"use client"

import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { DEVELOPMENT_SERVER_AUTH_ME } from "../app/utils/variables"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

export interface USER {
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    city: string,
    phone: string
}
interface STATE {
    loading: boolean,
    data: USER | null,
    error: string | null
}
interface AUTHSTATE extends STATE {
    setAuthState: React.Dispatch<React.SetStateAction<STATE>>
}
const AuthStateContext = createContext<AUTHSTATE>({loading: false, data: null, error: null, setAuthState: () => {}})

export default function AuthContext({children}: {children: React.ReactNode}) {
    const [authState, setAuthState] = useState<STATE>({
        loading: true,
        data: null,
        error: null
    })
    const fetchUser = async () => {
        try{
        // if the user has jwt token in their cookie find the user.
        const response = await axios.get( DEVELOPMENT_SERVER_AUTH_ME)   
        setAuthState({loading: false, data: response.data, error: null})
        }
        catch(error: any){
            console.log(error)
            setAuthState({loading: false, data: null, error: error.response.data.message})
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <AuthStateContext.Provider value={{...authState, setAuthState}}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthStateContext)
    if(!context) throw Error("context is used outside of it's provider")
    return context
}
