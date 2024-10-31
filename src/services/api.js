import axios from 'axios'

const api = axios.create({
  baseURL: 'https://poetrydb.org/',

  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default api