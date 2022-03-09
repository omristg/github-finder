import { UserList } from "../cmps/users/UserList"
import { UserSearch } from "../cmps/users/UserSearch"

export const Home = () => {

    return (
        <div className="">
            <h1 className="text-6xl mb-10">Welcome</h1>
            <UserSearch />
            <UserList />
        </div>
    )
}