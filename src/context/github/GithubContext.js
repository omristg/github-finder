import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

export const GithubContext = createContext()

const BASE_URL = process.env.REACT_APP_GITHUB_URL
// const API_KEY = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvier = ({ children }) => {

    const initialState = {
        users: [],
        isLoading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        const res = await fetch(`${BASE_URL}/users`, {
            headers: {
                // Authorization: `token ${API_KEY}`
            }
        })
        const users = await res.json()

        dispatch({
            type: 'GET_USERS',
            users
        })
    }
    return (
        <GithubContext.Provider value={{
            users: state.users,
            isLoading: state.isLoading,
            fetchUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )

}