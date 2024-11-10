<template>
  <el-table :data="tableData" stripe height="500">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="name" label="Name" />
  <el-table-column prop="ExamDate" label="Date" />
  <el-table-column prop="Chinese" label="语文" />
  <el-table-column prop="Mathematics" label="数学" />
  <el-table-column prop="English" label="英语" />
</el-table>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import req from "@/comm/request";

export default {
  setup() {
  const rawData = ref([]);
  const userMap=new Map();
  const tableData = computed(() => rawData.value.flatMap(
    user_item => user_item.data.map(exam_item => ({id:user_item.uid,name:userMap.get(user_item.uid),...exam_item}))
  ));
  
  const getData = async () => {
    try {
        const res = await req.get(`/exam`);
        rawData.value = (res && Array.isArray(res)) ? res : [];
    } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "未知错误";
        alert(`获取数据失败: ${errorMessage}，请稍后再试。`);
    }
  };

  onMounted(getData);
  return {tableData};
}};
</script>

<style scoped>
</style>
