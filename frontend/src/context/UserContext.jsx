import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode} from "jwt-decode"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ "role": "STUDENT" });
    const [student, setStudent] = useState(null)
   
    useEffect(() => {
        const getUserToken = async() => {
            const token = Cookies.get("token")

            if (!token) {
                return
            }
            const decoded = jwtDecode(token)
            setUser(decoded)
  
        }
        getUserToken()
    }, [0])

    
    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}