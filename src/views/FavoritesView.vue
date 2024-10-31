<script setup>
import ArticlesList from '@/components/ArticlesList.vue'
import { useFavorites } from '@/stores/favorites'

import { storeToRefs } from 'pinia'

const favoritesStore = useFavorites()
const { favoriteArticles, getFavoriteAuthors } = storeToRefs(favoritesStore)
</script>

<template>
  <ArticlesList :articles="favoriteArticles" :authors="getFavoriteAuthors" />
</template>
