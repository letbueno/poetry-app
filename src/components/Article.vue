<script setup></script>

<template>
  <div class="card">
    <div class="image">
      <slot name="image"></slot>
    </div>

    <!--NEWS CONTENT -->
    <div class="content">
      <div class="title">
        <p><slot name="title"></slot></p>
      </div>
      <div class="text">
        <slot name="description"></slot>
      </div>
    </div>
    <div class="social">
      <div class="likes"><i class="fa fa-thumbs-up"></i> 23</div>
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
  font-family: Arial;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.03);
}

.image {
  border-radius: 3px 3px 0 0;
  width: 280px;
  overflow: hidden;
  width: 280px;
  max-height: 280px;
}

.content {
  padding: 20px;
}

.title {
  font-weight: 700;
  color: hsl(0, 0%, 14%);
  padding-bottom: 10px;
}

.text {
  font-weight: 400;
  color: hsl(0, 0%, 30%);
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
</style>
