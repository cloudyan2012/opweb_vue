<template>
  <el-table :data="tableData" stripe height="350">
    <el-table-column prop="id" label="ID" />
    <el-table-column  fixed prop="name" label="Name" />
    <el-table-column  fixed prop="ExamDate" label="Date" />
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学" />
    <el-table-column prop="English" label="英语" />
    <el-table-column label="操 作" min-width="140px">
      <template #default="scope"><span style="white-space: nowrap">
        <el-button size="small" style="margin-left: 0px;" @click="handleEdit(scope.$index)">修改</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
      </span></template>
    </el-table-column>  
  </el-table>

  <el-dialog v-model="dialogFormVisible" title="修改数据" width="450"  draggable align-center>
    <el-form :model="examForm" label-position="left" label-width="auto">
      <el-form-item label="用户ID"><el-input v-model="examForm.id" disabled style="width: 150px"></el-input></el-form-item>
      <el-form-item label="考试时间"><el-input v-model="examForm.ExamDate" disabled style="width: 150px"></el-input></el-form-item>
      <el-form-item label="语文"><el-input-number v-model="examForm.Chinese" :max="100" /></el-form-item>
      <el-form-item label="数学"><el-input-number v-model="examForm.Mathematics" :max="100" /></el-form-item>
      <el-form-item label="英语"><el-input-number v-model="examForm.English" :max="100" /></el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="examFormSubmit()">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import req from "@/comm/request";

export default {
  setup() {
    const userMap = ref(new Map());
    const tableData = ref([]);
    const dialogFormVisible = ref(false)
    const examForm = reactive({
      id: '',
      ExamDate: '', 
      Chinese: '',
      Mathematics: '',
      English: ''
    });

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

    const examFormSubmit = () => {
      dialogFormVisible.value = false;
    };

    const handleEdit = (index) => {
      examForm.id = tableData.value[index].id;
      examForm.ExamDate = tableData.value[index].ExamDate;  
      examForm.Chinese = tableData.value[index].Chinese;
      examForm.Mathematics = tableData.value[index].Mathematics;
      examForm.English = tableData.value[index].English;
      dialogFormVisible.value = true;
    };

    const handleDelete = (index) => {
      if (confirm("确认删除该条数据吗？"))
      tableData.value.splice(index, 1);
    };

    return { tableData, examFormSubmit, handleEdit, handleDelete, dialogFormVisible, examForm};
  }
};
</script>

<style scoped>
</style>
