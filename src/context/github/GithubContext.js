import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

export const GithubContext = createContext()

const BASE_URL = process.env.REACT_APP_GITHUB_URL
// const API_KEY = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvier = ({ children }) => {

    const initialState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (searchVal) => {

        const params = new URLSearchParams()
        
        dispatch({ type: 'SET_LOADING' })

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
            searchUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )

}