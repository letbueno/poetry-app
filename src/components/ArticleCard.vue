<script setup>
import { useArticles } from '../stores/articles'
import { useFavorites } from '../stores/favorites'
import { storeToRefs } from 'pinia'
import { computed, defineProps } from 'vue'
import FavoriteIconOff from '../components/icons/favoriteOff.svg'
import FavoriteIconOn from '../components/icons/favoriteOn.svg'

const { id, title, author, lines } = defineProps({
  id: [Number, String],
  title: String,
  author: String,
  lines: Array,
})

const favoritesStore = useFavorites()
const articlesStore = useArticles()
const { isFavorite } = storeToRefs(favoritesStore)

const sliceLimit = computed(() => (lines.length < 3 ? lines.length : 3))

const toggleArticleFavorite = articleId => {
  favoritesStore.toggleFavorite(articlesStore.getArticleById(articleId))
}
</script>

<template>
  <div class="card" tabindex="0">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="author">
      <span>BY {{ author }}</span>
    </div>
    <div class="text">
      <p v-for="(line, index) in lines.slice(0, sliceLimit)" :key="index">
        {{ line }}
      </p>
      <p v-if="lines.length > 3">...</p>
    </div>
    <div class="social">
      <img
        :src="isFavorite(id) ? FavoriteIconOn : FavoriteIconOff"
        alt="Favorite icon"
        @click.stop="toggleArticleFavorite(id)"
        :aria-pressed="isFavorite(id)"
        :aria-label="
          isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'
        "
        class="favorite-icon"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 420px;
  max-height: 420px;
  min-height: 280px;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  color: white;
  border-radius: 3px;
  box-shadow:
    0 4px 6px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 0.3s ease;
  cursor: pointer;
  padding: 20px;
  position: relative;

  span {
    text-transform: uppercase;
  }
}

.card:hover {
  transform: scale(1.03);
}

.title {
  font-weight: 800;
  color: hsl(0, 0%, 14%);
  padding-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.author {
  font-weight: 600;
  color: #494949;
  padding-bottom: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.text {
  font-weight: 400;
  color: hsl(0, 0%, 30%);
  font-family: 'Times New Roman', Times, serif;
  flex-grow: 1;
}

.social {
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  height: 32px;
  width: 32px;
}
</style>
