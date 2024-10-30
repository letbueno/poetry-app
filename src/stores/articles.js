import { defineStore } from 'pinia'
import api from '@/services/api'

export const useArticles = defineStore('news', {
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
    getArticle: state => {
      return id => state.articles.find(article => article.id === id)
    },
    getAuthors(state) {
      const authors = state.articles.map(article => article.author)
      return [...new Set(authors)]
    },
  },
  actions: {
    async getArticles() {
      this.isLoading = true // Set loading state to true
      try {
        const newsResponse = await api.get('/poemcount/100')

        this.articles = newsResponse.map((article, index) => ({
          ...article,
          id: index + 1,
        }))
      } catch (error) {
        console.error('Error fetching articles:', error)
        return error
      } finally {
        this.isLoading = false // Ensure loading state is false after request
      }
    },
    setAuthorFilter(author) {
      this.selectedAuthor = author
    },
  },
})
