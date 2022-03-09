import { useEffect, useState } from "react"

import { Spinner } from "../layout/Spinner"
import { UserPreview } from './UserPreview'

const BASE_URL = process.env.REACT_APP_GITHUB_URL
const API_KEY = process.env.REACT_APP_GITHUB_TOKEN

export const UserList = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

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


    if (isLoading) return <Spinner />

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map(user => {
                return <UserPreview key={user.id} user={user} />
            })}
        </div>
    )
}