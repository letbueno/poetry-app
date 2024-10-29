import axios from 'axios'

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',

  headers: {
    'Content-Type': 'application/json',
    'Authorization ': 'Bearer baf0e004821642768fb3f40800f66b07',
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
