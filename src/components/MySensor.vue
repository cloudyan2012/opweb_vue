<template>
  <el-text class="mx-1" type="info">房间温度：<el-text class="mx-1" type="success">{{temp}}</el-text>­°C </el-text>
  <el-text class="mx-1" type="info">湿度: <el-text class="mx-1" type="success">{{hum}}</el-text>%</el-text>
</template>


<script>
import req from "@/comm/request";
import { ref } from "vue";
export default {
  setup() {
    const temp= ref(0);
    const hum= ref(0);
    return {temp, hum};
  }
};
</script>
