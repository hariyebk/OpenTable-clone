"use client"

import { createContext, useContext, useState } from "react"

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
        loading: false,
        data: null,
        error: null
    })
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
