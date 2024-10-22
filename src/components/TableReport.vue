<template>
    <el-table :data="tableData" stripe height="220">
    <el-table-column prop="ExamDate" label="Date" />
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学" />
    <el-table-column prop="English" label="英语" />
  </el-table>
</template>


<script>
import { toRefs } from 'vue';
export default {
  props: {
    tableData: {type: Array,Required: true}
  },
  setup(props) {
    const {tableData}  = toRefs(props);
    return {
      tableData
    };
  },
};
</script>
