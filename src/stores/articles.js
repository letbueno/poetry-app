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
  },
  actions: {
    async getArticles() {
      try {
        const newsResponse = await api.get(
          '/everything?q=sanrio&page=1&pageSize=100',
        )

        this.articles = newsResponse.articles
      } catch (error) {
        showTooltip(error)

        return error
      }
    },
  },
})
