import { defineStore } from 'pinia'
import api from '../services/api'

export const useArticles = defineStore('articles', {
  state: () => ({
    articles: [],
    selectedAuthor: null,
    isLoading: false,
  }),
  getters: {
    returnArticles(state) {
      if (this.selectedAuthor) {
        return state.articles.filter(
          article => article.author === this.selectedAuthor,
        )
      }
      return state.articles
    },
    getAuthors(state) {
      const authors = state.articles.map(article => article.author)
      return [...new Set(authors)]
    },
  },
  actions: {
    async getArticles() {
      this.isLoading = true
      try {
        const newsResponse = await api.get('/random/100')

        this.articles = newsResponse.map((article, index) => ({
          ...article,
          id: index + 1,
        }))
      } catch (error) {
        console.error('Error fetching articles:', error)
        return error
      } finally {
        this.isLoading = false
      }
    },
    setAuthorFilter(author) {
      this.selectedAuthor = author
    },
    getArticleById(articleId) {
      return this.articles.find(article => article.id === articleId)
    },
  },
})
