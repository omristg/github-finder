export const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.users,
                isLoading: false
            }
        case 'SET_LOADING':
            return { ...state, isLoading: true }
        case 'CLEAR_USERS':
            return { ...state, users: [] }
        default:
            return state
    }
}
