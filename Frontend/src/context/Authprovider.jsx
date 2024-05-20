import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function Authprovider({children}) {
    const initalAuthUser = localStorage.getItem("Users");
    const [authuser,setAuthUser] = useState(
        initalAuthUser ? JSON.parse(initalAuthUser) : undefined
    );
    return (
        <AuthContext.Provider value = {[authuser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const  useAuth =() => useContext(AuthContext);
