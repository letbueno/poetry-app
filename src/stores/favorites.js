import { defineStore } from 'pinia'

export const useFavorites = defineStore('favorites', {
  state: () => ({
    favoriteArticles: [],
  }),
  getters: {
    isFavorite: state => articleId => {
      return state.favoriteArticles.some(article => article.id === articleId)
    },
  },
  actions: {
    addFavorite(article) {
      if (!this.isFavorite(article.id)) {
        this.favoriteArticles.push(article)
      }
    },
    removeFavorite(articleId) {
      this.favoriteArticles = this.favoriteArticles.filter(
        article => article.id !== articleId,
      )
    },
    toggleFavorite(article) {
      if (this.isFavorite(article.id)) {
        this.removeFavorite(article.id)
      } else {
        this.addFavorite(article)
      }
    },
  },
})
