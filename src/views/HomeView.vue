<script setup>
import { useArticles } from '@/stores/articles'
import ArticlesList from '../components/ArticlesList.vue'
const articlesStore = useArticles()
articlesStore.getArticles()
</script>

<template>
  <ArticlesList />
</template>
