<template>
  <div ref="chartDom" style="width: 100%; height: 270px; background-color: #fafafa;"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, toRefs, watch } from 'vue';
import echarts from '@/comm/echarts';

export default {
  props: {
    tableData: { type: Array, required: true }
  },
  setup(props) {
    const chartDom = ref(null);
    const { tableData } = toRefs(props);
    let chartInstance = null;

    const renderChart = () => {
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

      const option = {
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

      if (chartInstance) {
        chartInstance.setOption(option);
      } else {
        chartInstance = echarts.init(chartDom.value);
        chartInstance.setOption(option);
      }
    };

    onMounted(() => {
      renderChart();
    });

    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.dispose();
      }
    });

    watch(tableData, (newData) => {
      renderChart();
    });

    return {
      chartDom
    };
  }
};
</script>

<style scoped>
</style>
