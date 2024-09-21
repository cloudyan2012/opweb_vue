<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="nav">
  <div class="left">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/smart">智能家居</RouterLink>
  </div>
  <div class="right">
    <RouterLink to="/logout">登出</RouterLink>
  </div>
</div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
}
.left {
  display: flex;
  align-items: center;
  width: 80%;
}

.right {
  align-items: center;
}
</style>
