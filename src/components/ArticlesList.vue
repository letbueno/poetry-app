<script setup>
import { useArticles } from '@/stores/articles'
import Article from './Article.vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()

const articlesStore = useArticles()
const { returnArticles } = storeToRefs(articlesStore)

articlesStore.getArticles()

console.log(returnArticles)

const goToArticleDetails = articleId => {
  router.push({ name: 'articleDetails', params: { id: articleId } }) // Adjust the route name as necessary
}
</script>

<template>
  <div class="article-container">
    <div class="article-content">
      <Article
        v-for="article in returnArticles"
        :key="article.id"
        @click="goToArticleDetails(article.id)"
      >
        <template #title>{{ article.title }}</template>
        <template #description>
          <p v-for="(line, index) in article.lines.slice(0, 3)" :key="index">
            {{ line }}
          </p>
          ...</template
        >
        <template #date>{{ article.author }}</template>
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
