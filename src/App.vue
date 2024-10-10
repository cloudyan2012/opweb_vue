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
  <div class="common-layout">
    <el-container v-if="userStore.username">
      <el-header><NavHeader /></el-header>
      <el-main><Pannel /></el-main>
    </el-container>
    <div v-else>
     <Login />
    </div>
  </div>
</template>
