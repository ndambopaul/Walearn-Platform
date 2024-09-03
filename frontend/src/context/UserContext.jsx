import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext()


export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({ username: "janedoe", password: "1234", role: "INSTRUCTOR" });
    const [userToken, setUserToken] = useState(null);

    const updateUser = (token) => {
        console.log(`Token: ${token}`)
    }

    useEffect(() => {
        const getUserToken = async() => {
            const token = Cookies.get("token")
            setUserToken(token)
        }
    })

    
    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}