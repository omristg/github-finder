import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

import { API_KEY } from "../../data";

export const GithubContext = createContext()

const BASE_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvier = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (searchVal) => {
        const params = new URLSearchParams({ q: searchVal })
        dispatch({ type: 'SET_LOADING' })

        const res = await fetch(`${BASE_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${API_KEY}`
            }
        })
        const { items } = await res.json()
        dispatch({
            type: 'GET_USERS',
            users: items
        })
    }

    const getUser = async (login) => {
        dispatch({ type: 'SET_LOADING' })
        const res = await fetch(`${BASE_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${API_KEY}`
            }
        })
        if (res.status === 404) window.location = '/notfound'
        else {
            const user = await res.json()
            dispatch({
                type: 'GET_USER',
                user
            })
        }
    }

    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            isLoading: state.isLoading,
            searchUsers,
            getUser,
            clearUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )

}