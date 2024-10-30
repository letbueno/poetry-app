<script setup>
import ArticleCard from './ArticleCard.vue'
import { useRouter } from 'vue-router'
import AuthorFilter from './AuthorFilter.vue'

const { articles } = defineProps({
  articles: Array,
})

const router = useRouter()

const goToArticleDetails = articleId => {
  router.push({ name: 'articleDetails', params: { id: articleId } })
}
</script>

<template>
  <section class="article-container" aria-labelledby="article-list-heading">
    <AuthorFilter />
    <div class="article-content">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        @click="goToArticleDetails(article.id)"
        :title="article.title"
        :author="article.author"
        :lines="article.lines"
        :id="article.id"
      >
      </ArticleCard>
    </div>
  </section>
</template>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-items: self-start;
  padding: 16px;
  max-width: 900px;
  width: 100%;
}

.article-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  gap: 16px;
}
</style>
