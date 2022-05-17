import { createContext, ReactNode, useState } from "react";
import Router from 'next/router';
import { api } from "../services/api";

type User = {
    email: string;
    permissions: string[];
    roles: string[];
}

type SingInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SingInCredentials): Promise<void>;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    async function signIn({email, password}: SingInCredentials){
        try {
            const { data } = await api.post('sessions', {
                email, 
                password
           })

           const {permissions, roles} = data

           setUser({
               email, 
               permissions, 
               roles
           })

           Router.push('/dashboard')
        } catch(error){
            console.log(error)
        }

    }

    return (
        <AuthContext.Provider value={{signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}