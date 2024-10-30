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
    <label for="author-select">Filter by Author: </label>
    <select id="author-select" @change="handleAuthorFilter">
      <option value="">All Authors</option>
      <option v-for="author in getAuthors" :key="author" :value="author">
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
select {
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: var(--vt-c-white-soft);
  box-shadow: 0 2px 4px -1px rgba(#000, 0.25);
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
}
label {
  display: flex;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
}
</style>
