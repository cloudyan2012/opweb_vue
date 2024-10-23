<template>
  <el-text class="mx-1" type="info">累计打印：</el-text><el-text class="mx-1" type="success">{{ printCount }}</el-text>
  <el-text class="mx-1" type="info">黑白：</el-text><el-text class="mx-1" type="success">{{ blackCount }} </el-text>
  <el-text class="mx-1" type="info">彩色：</el-text><el-text class="mx-1" type="success">{{ colorCount }}</el-text><br/>
  <el-text v-show="!stats" class="mx-1" type="warning">当前打印机未连接,以上为历史信息</el-text>
</template>

<script>
import req from "@/comm/request";
import { computed, ref } from 'vue';

export default {
  setup() {
    const stats = ref(false);
    const printCount = ref(0);
    const colorCount = ref(0);
    
    const blackCount = computed(() => printCount.value - colorCount.value);

    const fetchPrintData = async () => {
      try {
        const res = await req.get('/print');
        stats.value = res.stat;
        printCount.value = res.p_all;
        colorCount.value = res.p_color;
      } catch (error) {
        console.error('获取打印机数据失败:', error);
      }
    };

    fetchPrintData();

    return {
      stats,
      printCount,
      blackCount,
      colorCount
    };
  }
}
</script>
