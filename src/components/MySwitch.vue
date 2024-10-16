<template>
   <el-text>台灯： </el-text>
    <el-switch
    v-model="sw01State"
    size="large"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>


<script>
import req from "@/comm/request";
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const sw01State = ref(false)
    return {sw01State}
  }
};
</script>
