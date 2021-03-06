export const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.users,
                isLoading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.user,
                isLoading: false
            }
        case 'CLEAR_USERS':
            return { ...state, users: [] }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.repos,
                isLoading: false
            }
        case 'SET_LOADING':
            return { ...state, isLoading: true }
        default:
            return state
    }
}
