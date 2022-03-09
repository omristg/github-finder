import { createContext, useReducer } from 'react'
import { alertReducer } from './AlertReducer'

export const alertContext = createContext()

export const AlertProvider = ({ children }) => {

    const initialState = null
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (type, msg) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { type, msg }
        })
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' })
        }, 3000);
    }

    return <alertContext.Provider value={{
        alert: state,
        setAlert,
    }}>
        {children}
    </alertContext.Provider>
}