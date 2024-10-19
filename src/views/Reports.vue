<template>
  <el-autocomplete
    v-model="state"
    value-key="uname"
    :fetch-suggestions="querySearchAsync"
    placeholder="点击选择或直接输入姓名查询成绩"
    @select="handleSelect"
    style="min-width: 300px; max-width: 300px"
  />

  <el-table :data="reportList" height="300" stripe style="max-width: 1000px">
    <el-table-column prop="ExamDate" label="Date" />
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学" />
    <el-table-column prop="English" label="英语" />
  </el-table>
  <button @click="drawLineChart">绘制折线图</button
  
  <!-- 折线图容器 -->
</template>

<script>
import { ref, onMounted } from "vue";
import req from "@/comm/request";
import echarts from "@/comm/echarts";

export default {
  setup() {
    const reportList = ref([]);
    const users = ref([]);
    const state = ref("");

    const fetchUsers = async () => {
      try {
        const response = await req.get("/user");
        if (Array.isArray(response)) {
          users.value = response;
        } else {
          console.warn("返回的数据格式不正确。");
        }
      } catch (error) {
        console.error("获取链接失败:", error);
      }
    };

    const querySearchAsync = (queryString, cb) => {
      if (!queryString) {
        cb(users.value); // 如果没有输入则返回所有链接
        return;
      }
      const lowerCaseQuery = queryString.toLowerCase();
      const results = users.value.filter((user) =>
        user.value.toLowerCase().startsWith(lowerCaseQuery)
      );
      cb(results);
    };

    const handleSelect = async (item) => {
      if (!item || !item.uname) {
        alert("无效的选择，请重新选择。");
        return;
      }
      try {
        const res = await req.get(`/exam?user=${item.uid}`);
        reportList.value = res.data || []; // 确保有数据赋值
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "未知错误";
        alert(`获取数据失败: ${errorMessage}，请稍后再试。`);
      }
    };

    const drawLineChart = () => {
      const chartDom = document.getElementById("lineChart");
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: "成绩折线图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["语文", "数学", "英语"],
        },
        xAxis: {
          type: "category",
          data: reportList.value.map((item) => item.ExamDate),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "语文",
            type: "line",
            data: reportList.value.map((item) => item.Chinese),
          },
          {
            name: "数学",
            type: "line",
            data: reportList.value.map((item) => item.Mathematics),
          },
          {
            name: "英语",
            type: "line",
            data: reportList.value.map((item) => item.English),
          },
        ],
      };
      myChart.setOption(option);
    };

    onMounted(fetchUsers);

    return {
      reportList,
      state,
      querySearchAsync,
      handleSelect,
    };
  },
};
</script>

<style scoped></style>
