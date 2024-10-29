<!-- ArticleDetails.vue -->

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '@/stores/articles'

import { storeToRefs } from 'pinia'
import { useFavorites } from '@/stores/favorites'

const route = useRoute()
const articlesStore = useArticles()

const articleId = Number(route.params.id)
const article = articlesStore.getArticle(articleId)

console.log(article, articleId)

const favoritesStore = useFavorites()
const { favoriteArticles, isFavorite } = storeToRefs(favoritesStore)

const toggleArticleFavorite = article => {
  favoritesStore.toggleFavorite(article)
}

// Assuming the route parameter is named 'id'
console.log(articleId, article)
</script>

<template>
  <div class="article-details">
    <h1>{{ article.title }}</h1>
    <p>
      <strong>{{ article.author }}</strong>
    </p>
    <p v-for="(line, lineIndex) in article.lines" :key="lineIndex">
      {{ line }}
    </p>

    <button
      @click="toggleArticleFavorite(article)"
      class="favorite-button"
      :class="{ 'is-favorite': isFavorite }"
    >
      {{ isFavorite(article.id) ? 'Unfavorite' : 'Favorite' }}
    </button>
  </div>
</template>

<style scoped>
.article-details {
  border-radius: 8px;
  padding: 16px;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.article-title {
  font-size: 24px;

  margin: 0 0 10px;
}

.article-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 12px;
}

.article-description {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 12px;
}

.article-date {
  font-size: 14px;
  color: #777;
  margin-top: 10px;
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
