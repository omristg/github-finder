
import { API_KEY } from "../../data";
const BASE_URL = process.env.REACT_APP_GITHUB_URL


export const searchUsers = async (searchVal) => {
    const params = new URLSearchParams({ q: searchVal })

    const res = await fetch(`${BASE_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${API_KEY}`
        }
    })
    const { items } = await res.json()
    return items
}

export const getUser = async (login) => {
    const res = await fetch(`${BASE_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${API_KEY}`
        }
    })
    if (res.status === 404) window.location = '/notfound'
    else {
        const user = await res.json()
        return user
    }
}

export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const res = await fetch(`${BASE_URL}/users/${login}/repos?${params}`, {
        headers: {
            Authorization: `token ${API_KEY}`
        }
    })
    const repos = await res.json()
    return repos
}