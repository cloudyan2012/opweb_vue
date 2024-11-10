<template>
  <el-menu
    :router="true"
    :ellipsis="true"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#fff"
    background-color="#409EFF"
    style="overflow: auto"
  >
    <el-menu-item index="/">MyHome</el-menu-item>
    <div style="flex-grow: calc(0.9)" />
    <el-menu-item index="/smart">智能家居</el-menu-item>
    <el-menu-item index="/notes">事项记录</el-menu-item>
    <el-menu-item index="/reports">学习记录</el-menu-item>
    <el-sub-menu index="2">
      <template #title>{{ user }}</template>
      <el-menu-item index="/admin">数据管理</el-menu-item>
      <el-menu-item :index="`/user?name=${user}`">用户详情</el-menu-item>
      <el-menu-item index="/logout">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  name: "NavView",

  setup() {
    const userStore = useUserStore();
    const user = userStore.username;
    return {
      user,
    };
  },
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active {
  color: rgb(197.7, 225.9, 255) !important;
  }
/* .nav {
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
} */
</style>
