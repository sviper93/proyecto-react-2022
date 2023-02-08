import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        setUsuario({
            name: "Sammicito Sandoval",
            registered: "14/02/2023"
        })
    }, [])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }