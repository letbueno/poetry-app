<script setup>
import { useArticles } from '@/stores/articles'
import Article from './Article.vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const props = defineProps({
  articles: Array,
})

const router = useRouter()

const articlesStore = useArticles()
const { returnArticles, getAuthors } = storeToRefs(articlesStore)

const goToArticleDetails = articleId => {
  router.push({ name: 'articleDetails', params: { id: articleId } })
}

const handleAuthorFilter = event => {
  articlesStore.setAuthorFilter(event.target.value)
}
</script>

<template>
  <div class="article-container">
    <label for="author-select">Filter by Author:</label>
    <select id="author-select" @change="handleAuthorFilter">
      <option value="">All Authors</option>
      <option v-for="author in getAuthors" :key="author" :value="author">
        {{ author }}
      </option>
    </select>
    <div class="article-content">
      <Article
        v-for="article in returnArticles"
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
  max-width: 900px;
  padding: 16px;
}

.article-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 16px;
}
</style>
