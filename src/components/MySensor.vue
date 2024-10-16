<template>
  房间温度：{{temp}}­°C 湿度:{{hum}}%
</template>


<script>
import req from "@/comm/request";
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const temp= ref(0);
    const hum= ref(0);
    return {temp, hum};
  }
};
</script>
