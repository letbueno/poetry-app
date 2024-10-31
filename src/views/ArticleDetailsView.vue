<script setup>
import { storeToRefs } from 'pinia'
import { useFavorites } from '@/stores/favorites'
import FavoriteIconOff from '../components/icons/favoriteOff.svg'
import FavoriteIconOn from '../components/icons/favoriteOn.svg'
import { useArticles } from '@/stores/articles'
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = Number(route.params.id)

const favoritesStore = useFavorites()
const articlesStore = useArticles()
const { isFavorite } = storeToRefs(favoritesStore)

const article = articlesStore.getArticleById(articleId)

const toggleArticleFavorite = () => {
  favoritesStore.toggleFavorite(articlesStore.getArticleById(articleId))
}
</script>

<template>
  <div class="article-container" v-if="article">
    <div class="article-details">
      <h1>{{ article.title }}</h1>
      <span>BY {{ article.author }}</span>
      <div>
        <p v-for="(line, lineIndex) in article.lines" :key="lineIndex">
          {{ line }}
        </p>
      </div>
      <div class="favorite">
        <img
          :src="isFavorite(article.id) ? FavoriteIconOn : FavoriteIconOff"
          alt="Favorite icon"
          @click.stop="toggleArticleFavorite(article.id)"
          :aria-pressed="isFavorite(article.id)"
          :aria-label="
            isFavorite(article.id)
              ? 'Remove from favorites'
              : 'Add to favorites'
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-details {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  width: 100%;
  font-family: Arial, sans-serif;
  gap: 16px;

  span {
    text-transform: uppercase;
  }
}

.article-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-items: self-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 24px;
  max-width: 900px;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.favorite {
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  height: 32px;
  width: 32px;
  cursor: pointer;
}
</style>
