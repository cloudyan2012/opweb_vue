<script setup>
import NavHeader from "./views/NavView.vue";
import Pannel from "./views/PannelView.vue";
</script>

<template>
  <NavHeader />
  <Pannel />
</template>

<style>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
.error-msg {
  color: red;
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>
