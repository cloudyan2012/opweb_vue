<template>
  <div ref="chartDom" style="width: 90%;height:200px;"></div>
</template>


<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

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
