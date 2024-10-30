<script setup></script>

<template>
  <div class="skeleton-card">
    <div class="skeleton-info">
      <h3 />
      <span />

      <div>
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  max-width: 420px;
  max-height: 420px;
  min-height: 300px;
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
}

.skeleton-info {
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.skeleton-info span {
  width: 40%;
  height: 16px;
  display: inline-block;
  background-color: #ddd;
}

.skeleton-info h3 {
  content: ' ';
  width: 250px;
  height: 24px;
  background-color: #ddd;
}

.skeleton-info p {
  width: 80%;
  background-color: #ddd;
  height: 16px;
  line-height: 140%;
}
</style>
