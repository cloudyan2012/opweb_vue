<template>
  <el-input  style="min-width:300px; max-width: 300px;" placeholder="输入姓名">
      <template #append>
          <el-button>查询</el-button>
      </template>
  </el-input>

  <el-table :data="reportList" height="300" style="max-width: 1000px">
    <el-table-column prop="ExamDate" label="Date"/>
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学"/>
    <el-table-column prop="English" label="英语"/>
  </el-table>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
      const reportList = ref([]);

      return {
          reportList
      };
  }
}
</script>

<style scoped>
</style>
