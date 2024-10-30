<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="header">
    <h2 @click="goToHome">Poetry</h2>
    <nav class="header-navigation">
      <RouterLink to="/"><h4>Home</h4></RouterLink>
      <RouterLink to="/favorites"><h4>Favorites</h4></RouterLink>
    </nav>
  </header>
</template>

<style scoped>
h2 {
  cursor: pointer;
}
.header {
  height: 48px;
  padding: 16px;
  position: sticky;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: black;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.header-navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.header-navigation a {
  color: inherit;
  margin-left: 1.75rem;
  position: relative;
  font-weight: 400;
  text-decoration: none;
}

.header-navigation a:hover:after {
  transform: scalex(1);
}

.header-navigation a:after {
  transition: 0.25s ease;
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentcolor;
  transform: scalex(0);
  position: absolute;
  bottom: -2px;
  left: 0;
}
</style>
