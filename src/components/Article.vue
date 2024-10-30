<script setup>
import { useArticles } from '@/stores/articles'
import { useFavorites } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { defineProps } from 'vue'

const props = defineProps({
  id: Number | String,
  title: String,
  author: String,
  lines: Array,
})

const favoritesStore = useFavorites()
const articlesStore = useArticles()
const { isFavorite } = storeToRefs(favoritesStore)

console.log(props)

const toggleArticleFavorite = articleId => {
  favoritesStore.toggleFavorite(articlesStore.getArticle(articleId))
}
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="text">
        <p v-for="(line, index) in lines.slice(0, 3)" :key="index">
          {{ line }}
        </p>
      </div>
    </div>
    <div class="social">
      <button
        @click.stop="toggleArticleFavorite(id)"
        class="favorite-button"
        :class="{ 'is-favorite': isFavorite }"
      >
        {{ isFavorite(id) ? 'Unfavorite' : 'Favorite' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 280px;
  flex: 1 1 auto;
  color: white;
  border-radius: 3px;
  box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0 auto;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
}

.content {
  padding: 20px;
  color: white;
}

.title {
  font-weight: 800;
  color: hsl(0, 0%, 14%);
  padding-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.text {
  font-weight: 400;
  color: hsl(0, 0%, 30%);
  font-family: 'Times New Roman', Times, serif;
}

.social {
  font-weight: 400;
  color: hsl(0, 0%, 50%);
  padding: 20px;
  text-align: right;
}
.likes {
  display: inline;
}

.likes {
  cursor: pointer;
}

.likes:hover {
  color: #1d1f20;
}

.favorite-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-button:hover {
  background-color: #0056b3;
}

.is-favorite {
  background-color: #ffc107; /* Change color if favorited */
}
</style>
