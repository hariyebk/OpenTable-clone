import axios from "axios"
import { DEVELOPMENT_SERVER_AUTH_LOGOUT, DEVELOPMENT_SERVER_AUTH_ME, DEVELOPMENT_SERVER_AUTH_SIGNIN, DEVELOPMENT_SERVER_AUTH_SIGNUP} from "../app/utils/variables"
import { USER, useAuthContext } from "../context/AuthContext"

export default function useAuth(){
    const {data, error, setAuthState} = useAuthContext()
    const signin = async (email: string, password: string) => {
        setAuthState({loading: true, data: null, error: null})
        try{
        const response = await axios.post(DEVELOPMENT_SERVER_AUTH_SIGNIN!, {
            email,
            password
        })
        setAuthState({loading: false, data: response.data, error: null})
        }
        catch(error: any){
            console.log(error)
            setAuthState({loading: false, data: null, error: error.response.data.message})
        }
    }
    const logout = async () => {
        setAuthState({loading: true, data, error})
        try{
            await axios.get(DEVELOPMENT_SERVER_AUTH_LOGOUT)
            setAuthState({loading: false, data: null, error: null})
        }
        catch(error: any){
            setAuthState({loading: false, data: null, error: error.response.data.message})
        }
    }
    const signup = async (input: USER) => {
        setAuthState({loading: true, data, error})
        try{
        const response = await axios.post(DEVELOPMENT_SERVER_AUTH_SIGNUP, {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            password: input.password,
            city: input.city,
            phone: input.phone
        })
        setAuthState({loading: false, data: response.data , error: null})
        }
        catch(error: any){
            console.log(error)
            setAuthState({loading: false, data: null, error: error.response.data.message})
        }

    }
    return {
        signin,
        logout,
        signup
    }
}