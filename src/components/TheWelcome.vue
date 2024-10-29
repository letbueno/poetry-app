<script setup>
import { useArticles } from '@/stores/articles'
import Article from './Article.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const articlesStore = useArticles()
const { returnArticles } = storeToRefs(articlesStore)

onMounted(async () => {
  await articlesStore.getArticles()
})
</script>

<template>
  <div class="article-container">
    <div class="article-content">
      <Article v-for="article in returnArticles" :key="article.id">
        <template #image>
          <img :src="article.urlToImage" alt="example image" />
        </template>
        <template #title>{{ article.title }}</template>
        <template #description>{{ article.description }}</template>
        <template #date>{{ article.publishAt }}</template>
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
