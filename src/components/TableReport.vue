<template>
  <el-table :data="tableData" stripe height="240">
    <el-table-column prop="comment" label="Date" />
    <el-table-column prop="chinese" label="语文" />
    <el-table-column prop="mathematics" label="数学" />
    <el-table-column prop="english" label="英语" />
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
