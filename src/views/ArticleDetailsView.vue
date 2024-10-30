<!-- ArticleDetails.vue -->

<script setup>
import { useRoute } from 'vue-router'
import { useArticles } from '@/stores/articles'

import { storeToRefs } from 'pinia'
import { useFavorites } from '@/stores/favorites'

const route = useRoute()
const articlesStore = useArticles()

const articleId = Number(route.params.id)
const article = articlesStore.getArticle(articleId)

const favoritesStore = useFavorites()
const { isFavorite } = storeToRefs(favoritesStore)

const toggleArticleFavorite = article => {
  favoritesStore.toggleFavorite(article)
}
</script>

<template>
  <div class="article-container">
    <div class="article-details">
      <h1>{{ article.title }}</h1>

      <span>BY {{ article.author }}</span>

      <div>
        <p v-for="(line, lineIndex) in article.lines" :key="lineIndex">
          {{ line }}
        </p>
      </div>

      <button
        @click="toggleArticleFavorite(article)"
        class="favorite-button"
        :class="{ 'is-favorite': isFavorite }"
      >
        {{ isFavorite(article.id) ? 'Unfavorite' : 'Favorite' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.article-details {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  width: 100%;
  font-family: Arial, sans-serif;
  gap: 16px;

  span {
    text-transform: uppercase;
  }
}

.article-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-items: self-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 24px;
  max-width: 900px;
  width: 100%;
}

.favorite-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-button:hover {
  background-color: #0056b3;
}

.is-favorite {
  background-color: #ffc107; /* Change color if favorited */
}
</style>
