import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext =  createContext()

export default function UserProvider({ children }) {
    const lsUser = localStorage.getItem("token")
    const [user, setUser] = useState(lsUser)
    const navigate = useNavigate()

    useEffect(() => {
        if(!lsUser){
            navigate("/")
        } else{
            navigate("/home")
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

