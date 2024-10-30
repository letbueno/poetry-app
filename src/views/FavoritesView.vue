<script setup>
import Article from '@/components/Article.vue'
import { useFavorites } from '@/stores/favorites'

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()

const favoritesStore = useFavorites()
const { favoriteArticles } = storeToRefs(favoritesStore)

console.log(favoriteArticles)

const goToArticleDetails = articleId => {
  router.push({ name: 'articleDetails', params: { id: articleId } })
}
</script>

<template>
  <div class="article-container">
    <div class="article-content">
      <Article
        v-for="article in favoriteArticles"
        :key="article.id"
        @click="goToArticleDetails(article.id)"
        :title="article.title"
        :author="article.author"
        :lines="article.lines"
        :id="article.id"
      >
      </Article>
    </div>
  </div>
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
