<script setup>
import { RouterView } from 'vue-router'

import CustomHeader from './components/CustomHeader.vue'
</script>

<template>
  <div class="container">
    <CustomHeader />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-items: self-start;
  padding: 16px;
  max-width: 900px;
  width: 100%;
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
