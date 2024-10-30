<script setup>
import { useArticles } from '@/stores/articles'
import ArticlesList from '../components/ArticlesList.vue'
import { storeToRefs } from 'pinia'

const articlesStore = useArticles()
const { returnArticles, isLoading } = storeToRefs(articlesStore)

articlesStore.getArticles()
</script>

<template>
  <ArticlesList :articles="returnArticles" :isLoading="isLoading" />
</template>
