<template>
  <div ref="chartDom" style="width: 90%;height:200px;"></div>
</template>


<script>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import req from "../utils/request";

export default {
  name: 'ChartTv',
  setup() {
    const chartDom = ref(null); // 使用 ref 存储 DOM 元素的引用
    
    const getData = async () => {
      const res = await req.get("/logtv");
      return res.data;
    };

    const drawChart = (data) => {
      const myChart = echarts.init(chartDom.value); // 使用 ref 的值
        
      const xAxisData = data.map(item => item.time);
      const seriesData = data.map(item => item.stat);

      const option = {
        title: {
          text: '电视开机时长统计'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
  type: 'value',
  interval: 1,
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
      drawChart(data);
    });

    return {
      chartDom // 返回用于模板中的引用
    };
  },
};

</script>
