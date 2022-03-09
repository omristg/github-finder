import { useState } from "react"

export const UserSearch = () => {

    const [text, setText] = useState('')

    const handleChange = ({ target }) => {
        setText(target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (!text) alert('Please enter something')
        else {
            // TODO add the search val 
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
                <button className="btn btn-ghost btn-lg">
                    Clear
                </button>
            </div>
        </div>
    )
}