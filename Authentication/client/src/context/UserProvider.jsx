import { useState } from "react"
import UserConText from "./UserContext"

const UserProvider = ({ children }) => {
    const [isAuth, setisAuth] = useState(null)
    const [userData, setUserData] = useState(null)
    return (
        <UserConText.Provider
            value={{
                userData: userData,
                setUserData:setUserData,
                isAuth:isAuth,
                setisAuth:setisAuth
            }}
        >
            {children}
        </UserConText.Provider>
    )
}

export default UserProvider;