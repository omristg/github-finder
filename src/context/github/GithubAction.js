
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GITHUB_TOKEN
const BASE_URL = process.env.REACT_APP_GITHUB_URL

const github = new axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `token ${API_KEY}`
    }
})


export const searchUsers = async (searchVal) => {
    const params = new URLSearchParams({ q: searchVal })
    const { data } = await github.get(`/search/users?${params}`)
    return data.items
}

const getRepos = (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    return github.get(`/users/${login}/repos?${params}`)
}

export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        getRepos(login)
    ])
    if (user.status === 404) window.location = '/notfound'
    return { user: user.data, repos: repos.data }
}

