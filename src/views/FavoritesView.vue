<script setup>
import ArticlesList from '@/components/ArticlesList.vue'
import { useFavorites } from '@/stores/favorites'

import { storeToRefs } from 'pinia'

const favoritesStore = useFavorites()
const { favoriteArticles } = storeToRefs(favoritesStore)
</script>

<template>
  <ArticlesList :articles="favoriteArticles" />
</template>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 900px;
  gap: 16px;
}
</style>
