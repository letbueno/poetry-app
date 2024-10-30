<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="header">
      <p>Poetry</p>
      <nav class="header-navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.header-navigation a {
  font-size: 1.125rem;
  color: inherit;
  margin-left: 1.75rem;
  position: relative;
  font-weight: 500;
}

.header-navigation a {
  font-size: 1.125rem;
  color: inherit;
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
