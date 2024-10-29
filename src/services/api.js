import axios from 'axios'

const api = axios.create({
  baseURL: 'https://poetrydb.org/',

  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptores para tratamento de requisições e respostas (opcional)
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
    return response.data // Retorne apenas os dados
  },
  error => {
    return Promise.reject(error)
  },
)

export default api
