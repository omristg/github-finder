import { createContext, useState } from "react";

export const GithubContext = createContext()

const BASE_URL = process.env.REACT_APP_GITHUB_URL
const API_KEY = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvier = ({ children }) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchUsers = async () => {
        const res = await fetch(`${BASE_URL}/users`, {
            headers: {
                Authorization: `token ${API_KEY}`
            }
        })
        const users = await res.json()

        setUsers(users)
        setIsLoading(false)
    }
    return (
        <GithubContext.Provider value={{
            users,
            isLoading,
            fetchUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )

}