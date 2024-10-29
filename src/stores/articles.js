import { defineStore } from 'pinia'
import api from '@/services/api'

export const useArticles = defineStore('news', {
  state: () => ({
    articles: [],
  }),
  getters: {
    returnArticles(state) {
      return state.articles
    },
    getArticle: state => {
      return id => state.articles.find(article => article.id === id)
    },
  },
  actions: {
    async getArticles() {
      try {
        const newsResponse = await api.get('/random/100')

        this.articles = newsResponse.map((article, index) => ({
          ...article,
          id: index + 1,
        }))
        console.log(this.articles)
      } catch (error) {
        return error
      }
    },
  },
})
