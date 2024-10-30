<script setup>
import Article from './Article.vue'
import { useRouter } from 'vue-router'
import AuthorFilter from './AuthorFilter.vue'

const props = defineProps({
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
      <Article
        v-for="article in articles"
        :key="article.id"
        @click="goToArticleDetails(article.id)"
        :title="article.title"
        :author="article.author"
        :lines="article.lines"
        :id="article.id"
        role="listitem"
        tabindex="0"
      >
      </Article>
    </div>
  </section>
</template>

<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 900px;
  padding: 16px;
}

.article-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 16px;
}
</style>
