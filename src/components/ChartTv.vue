<template>
  <div v-if="tvData" ref="chartDom" style="width: auto;height:80px;"></div>
  <div v-else><el-text class="mx-1" type="danger">暂无数据</el-text></div>
</template>


<script>
import echarts from '@/comm/echarts';
import req from "@/comm/request";
import { onMounted, ref } from 'vue';

export default {
  name: 'ChartTv',
  setup() {
    const chartDom = ref(null);  
    const tvData = ref(true);
    const getData = async () => {
      const res = await req.get("/logtv");
      return res.data;
    };

    const drawChart = (data) => {
      const myChart = echarts.init(chartDom.value);      
      const xAxisData = data.map(item => item.time);
      const seriesData = data.map(item => item.stat);
      const option = {
        tooltip: {},
        grid: {
        left: '12%',
        right: '1%'       
       },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
  type: 'value',
  interval: 1,
  max: 1,
  min: 0,
  axisLabel: {
    formatter: function (value) {
      return value === 1 ? '开机' : (value === 0 ? '关机' : value);
    }
  }
},

        series: [{
          name: '开机状态',
          type: 'line',
          data: seriesData,
          step: 'end', // 采用阶梯图样式,
          itemStyle: {
            color: 'red' // 修改圆点颜色为红色
         },
         areaStyle: {
            color: 'green',
            opacity: 0.2
         },
         lineStyle: {
            width: 1,
            color: 'green'
         },
        }]
      };

      myChart.setOption(option);
    };

    onMounted(async () => {
      const data = await getData();
      if (!data) {
        tvData.value = false; 
      } else {
        drawChart(data);
      }
    });

    return {
      chartDom,tvData
    };
  },
};

</script>
