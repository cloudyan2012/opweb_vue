<template>
  <div ref="chartDom" style="max-width: 1000px;height:500px;"></div>
</template>
<script>
import { onMounted, onBeforeUnmount, ref, toRefs } from 'vue';
import echarts from '@/comm/echarts';

export default {
 props: {
   tableData: { type: Array, required: true }
 },
 setup(props) {
   const chartDom = ref(null);
   const { tableData } = toRefs(props);

   // 提取数据，避免多次遍历
   const examDates = [];
   const chineseScores = [];
   const mathematicsScores = [];
   const englishScores = [];
   
   tableData.value.forEach(item => {
     examDates.push(item.ExamDate);
     chineseScores.push(item.Chinese);
     mathematicsScores.push(item.Mathematics);
     englishScores.push(item.English);
   });

   // 绘制图表配置参数
   const option = {
     tooltip: {
       trigger: 'axis'
     },
     legend: {
       data: ['语文', '数学', '英语']
     },
     grid: {
       left: '1%',
       right: '1%',
       bottom: '3%',
       top: '10%',
       containLabel: true
     },
     xAxis: {
       type: 'category',
       data: examDates
     },
     yAxis: {
       type: 'value',
       minInterval: 5,
       min: 'dataMin'
     },
     series: [
       {
         name: '语文',
         type: 'line',
         smooth: true,
         data: chineseScores
       },
       {
         name: '数学',
         type: 'line',
         smooth: true,
         data: mathematicsScores
       },
       {
         name: '英语',
         type: 'line',
         smooth: true,
         data: englishScores
       }
     ]
   };

   let chartInstance = null;

   const initChart = () => {
     try {
       chartInstance = echarts.init(chartDom.value);
       chartInstance.setOption(option);
     } catch (error) {
       console.error("图表初始化失败:", error);
     }
   };

   onMounted(() => {
     initChart();
   });

   onBeforeUnmount(() => {
     if (chartInstance) {
       chartInstance.dispose();
     }
   });

   return {
     chartDom
   };
 }
};
</script>
