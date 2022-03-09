import { useContext, useState } from "react"
import { GithubContext } from "../../context/github/GithubContext"

export const UserSearch = () => {

    const { users, searchUsers } = useContext(GithubContext)

    const [text, setText] = useState('')

    const handleChange = ({ target }) => {
        setText(target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (!text) alert('Please enter something')
        else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text"
                            placeholder="Search"
                            value={text}
                            onChange={handleChange}
                            className="w-full pr-40 bg-gray-200 
                            input input-lg text-black" />

                        <button className="btn btn-lg w-36 rounded-l-none
                                            absolute top-0 right-0 ">
                            Go
                        </button>
                    </div>
                </div>
            </form>
            <div>
                {users.length > 0 && (
                    <button className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                )}
            </div>
        </div>
    )
}