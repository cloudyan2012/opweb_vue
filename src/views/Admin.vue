<template>
  <el-table :data="tableData" stripe height="500">
    <el-table-column prop="id" label="ID" />
    <el-table-column  fixed prop="name" label="Name" />
    <el-table-column  fixed prop="ExamDate" label="Date" />
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学" />
    <el-table-column prop="English" label="英语" />
    <el-table-column label="操 作" min-width="140px">
      <template #default="scope"><span style="white-space: nowrap">
        <el-button size="small" style="margin-left: 0px;" @click="handleChange(scope.$index)">修改</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
      </span></template>
    </el-table-column>  
  </el-table>
</template>

<script>
import { ref, onMounted } from "vue";
import req from "@/comm/request";

export default {
  setup() {
    const userMap = ref(new Map());
    const tableData = ref([]);

    const getData = async () => {
      try {
        const [examData, userData] = await Promise.all([req.get("/exam"), req.get("/user")]);

        userData.forEach(({ uid, uname }) => userMap.value.set(uid, uname));

        tableData.value = examData.flatMap(({ uid, data }) =>
          data.map(exam_item => ({
            id: uid,
            name: userMap.value.get(uid) || '未知',
            ...exam_item
          }))
        );

      } catch (error) {
        console.error("数据获取失败:", error.message || error);
      }
    };

    onMounted(getData);

    const handleChange = (index) => {
      console.log("修改", index);
    };

    const handleDelete = (index) => {
      console.log("删除", index);
    };

    return { tableData, handleChange, handleDelete };
  }
};
</script>

<style scoped>
</style>
