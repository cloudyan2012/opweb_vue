<script>
import NavHeader from "./views/NavView.vue";
import Login from "./views/Login.vue";
import  { useUserStore }  from "./stores/user";
export default {
  name: "App",
  components: {
    NavHeader,
    Login
  },
  setup() {
    const userStore = useUserStore();
    return {userStore}
  }
};
</script>

<template>
  <div class="common-layout">
    <el-container v-if="userStore.username">
      <el-header style="padding: inherit; width: auto;"> <el-affix ><NavHeader /></el-affix></el-header>
      <el-main><RouterView /></el-main>
    </el-container>
    <div v-else>
     <Login />
    </div>
  </div>
</template>
