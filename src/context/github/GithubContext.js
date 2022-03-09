import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

import { API_KEY } from "../../data";

export const GithubContext = createContext()

const BASE_URL = process.env.REACT_APP_GITHUB_URL


export const GithubProvier = ({ children }) => {

    const initialState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (searchVal) => {
        const params = new URLSearchParams({
            q: searchVal
        })
        dispatch({ type: 'SET_LOADING' })

        const res = await fetch(`${BASE_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${API_KEY}`
            }
        })
        const { items } = await res.json()
        console.log(items);
        dispatch({
            type: 'GET_USERS',
            users: items
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