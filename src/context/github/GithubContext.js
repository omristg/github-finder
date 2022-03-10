import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

export const GithubContext = createContext()

export const GithubProvier = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return (
        <GithubContext.Provider value={{ ...state, dispatch, }}>
            {children}
        </GithubContext.Provider>
    )

}