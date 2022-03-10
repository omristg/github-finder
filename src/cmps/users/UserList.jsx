import { useEffect, useContext } from "react"
import { GithubContext } from "../../context/github/GithubContext"

import { Spinner } from "../layout/Spinner"
import { UserPreview } from './UserPreview'


export const UserList = () => {

    const { users, isLoading } = useContext(GithubContext)

    if (isLoading) return <Spinner />

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map(user => {
                return <UserPreview key={user.id} user={user} />
            })}
        </div>
    )
}