<template>
    <el-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>


<script>
import req from "@/comm/request";
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const value = ref(true)
    return {value}
  }
};
</script>
