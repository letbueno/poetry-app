<script setup>
import { useArticles } from '../stores/articles'

const { authors } = defineProps({
  authors: Array,
})

const articlesStore = useArticles()

const handleAuthorFilter = event => {
  articlesStore.setAuthorFilter(event.target.value)
}
</script>

<template>
  <div class="container">
    <label for="author-select">Filter by Author: </label>
    <select id="author-select" @change="handleAuthorFilter">
      <option value="">All Authors</option>
      <option v-for="author in authors" :key="author" :value="author">
        {{ author }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
