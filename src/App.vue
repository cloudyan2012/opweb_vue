<script>
import NavHeader from "./views/NavView.vue";
import Pannel from "./views/PannelView.vue";
import Login from "./views/Login.vue";
import  { useUserStore }  from "./stores/user";
export default {
  name: "App",
  components: {
    NavHeader,
    Pannel,
    Login,
  },
  setup() {
    const userStore = useUserStore();
    return {userStore}
  }
};
</script>

<template>
  <div v-if="userStore.username">
    <NavHeader />
    <Pannel />
  </div>
  <div v-else>
    <Login />
  </div>
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
