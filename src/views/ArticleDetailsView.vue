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

const favoritesStore = useFavorites()
const { isFavorite } = storeToRefs(favoritesStore)

const toggleArticleFavorite = article => {
  favoritesStore.toggleFavorite(article)
}
</script>

<template>
  <div class="article-details">
    <h1>{{ article.title }}</h1>

    <span>BY {{ article.author }}</span>

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
  padding: 16px 24px;
  width: 900px;
  margin: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  span {
    text-transform: uppercase;
  }
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
