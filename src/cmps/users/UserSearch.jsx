import { useContext, useState } from "react"
import { GithubContext } from "../../context/github/GithubContext"
import { alertContext } from "../../context/alert/AlertContext"
import { searchUsers } from '../../context/github/GithubAction'

export const UserSearch = () => {

    const { users, dispatch ,isLoading} = useContext(GithubContext)
    const { setAlert } = useContext(alertContext)

    const [text, setText] = useState('')

    const handleChange = ({ target }) => {
        setText(target.value)
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        if (!text) setAlert('error', 'Please enter something')
        else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', users })
            setText('')
        }
    }

    if (isLoading) return <></>
    
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
                    <button className="btn btn-ghost btn-lg"
                        onClick={() => dispatch({ type: 'CLEAR_USERS' })} >
                        Clear
                    </button>
                )}
            </div>
        </div>
    )
}