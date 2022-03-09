export const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            const newState = {
                ...state,
                users: action.users,
                isLoading: false
            }
            console.log(newState);
            return newState
        default:
            return state
    }
}
