<template>
  <el-autocomplete
    v-model="state"
    value-key="uname"
    :fetch-suggestions="querySearchAsync"
    placeholder="点击选择或直接输入姓名查询成绩"
    @select="handleSelect"
    style="min-width:300px; max-width: 300px;"
  />

  <el-table :data="reportList" height="300" stripe style="max-width: 1000px">
    <el-table-column prop="ExamDate" label="Date"/>
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学"/>
    <el-table-column prop="English" label="英语"/>
  </el-table>
</template>

<script>
import { ref, onMounted } from "vue";
import req from "@/comm/request";

export default {
  setup() {
    const reportList = ref([]);
    const users = ref([]);
    const state = ref('');

    const fetchUsers = async () => {
      try {
        const response = await req.get('/user');
        if (Array.isArray(response)) {
          users.value = response; 
        } else {
          console.warn('返回的数据格式不正确。');
        }
      } catch (error) {
        console.error('获取链接失败:', error);
      }
    };

    onMounted(fetchUsers);

    const querySearchAsync = (queryString, cb) => {
      if (!queryString) {
        cb(links.value); // 如果没有输入则返回所有链接
        return;
      }
      const lowerCaseQuery = queryString.toLowerCase();
      const results = links.value.filter(link => link.value.toLowerCase().startsWith(lowerCaseQuery));
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
        const errorMessage = error.response?.data?.message || error.message || "未知错误";
        alert(`获取数据失败: ${errorMessage}，请稍后再试。`);
      }
    };

    return {
      reportList,
      
      state,
      querySearchAsync,
      handleSelect
    };
  }
}
</script>

<style scoped>
</style>
