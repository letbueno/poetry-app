<script setup>
import { useArticles } from '@/stores/articles'
import { storeToRefs } from 'pinia'

const articlesStore = useArticles()

const { getAuthors } = storeToRefs(articlesStore)

const handleAuthorFilter = event => {
  articlesStore.setAuthorFilter(event.target.value)
}
</script>

<template>
  <div class="container">
    <label for="author-select">Filter by Author:</label>
    <select id="author-select" @change="handleAuthorFilter">
      <option value="">All Authors</option>
      <option v-for="author in getAuthors" :key="author" :value="author">
        {{ author }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
