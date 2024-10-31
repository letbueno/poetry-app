<script setup>
import { useArticles } from '@/stores/articles'
import ArticlesList from '../components/ArticlesList.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const articlesStore = useArticles()
const { returnArticles, isLoading, getAuthors } = storeToRefs(articlesStore)

onMounted(() => {
  if (returnArticles.value.length === 0) {
    articlesStore.getArticles()
  }
})
</script>

<template>
  <ArticlesList
    :articles="returnArticles"
    :authors="getAuthors"
    :isLoading="isLoading"
  />
</template>
