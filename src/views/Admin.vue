<template>
  <el-button type="info" @click="showForm()" style="margin-bottom: 5px;">新增数据</el-button>
  <el-table :data="tableData" stripe height="350">
    <el-table-column prop="id" label="ID" />
    <el-table-column fixed prop="name" label="Name" />
    <el-table-column fixed prop="ExamDate" label="Date" />
    <el-table-column prop="Chinese" label="语文" />
    <el-table-column prop="Mathematics" label="数学" />
    <el-table-column prop="English" label="英语" />
    <el-table-column label="操 作" min-width="140px">
      <template #default="scope">
        <span style="white-space: nowrap">
          <el-button size="small" @click="showForm(scope.$index)">修改</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
        </span>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" :title="formTitle" width="400px" draggable align-center>
    <el-form :model="examForm" label-position="left" label-width="auto" style="margin-left: 10%;">
      <el-form-item label="用户名">
        <el-input v-model="examForm.name" :disabled="disableInput" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-input v-model="examForm.ExamDate" :disabled="disableInput" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="语文">
        <el-input-number v-model="examForm.Chinese" :max="100" />
      </el-form-item>
      <el-form-item label="数学">
        <el-input-number v-model="examForm.Mathematics" :max="100" />
      </el-form-item>
      <el-form-item label="英语">
        <el-input-number v-model="examForm.English" :max="100" />
      </el-form-item>
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
    const dialogFormVisible = ref(false);
    const disableInput = ref(false);
    const formTitle = ref("");
    const examForm = reactive({
      name: '',
      ExamDate: '',
      Chinese: 0,
      Mathematics: 0,
      English: 0
    });

    const getData = async () => {
      try {
        const [examData, userData] = await Promise.all([req.get("/exam"), req.get("/user")]);
        userData.forEach(({ uid, uname }) => userMap.value.set(uid, uname));

        tableData.value = examData.flatMap(({ uid, data }) => 
          data.map(examItem => ({
            id: uid,
            name: userMap.value.get(uid) || '未知',
            ...examItem
          }))
        );
      } catch (error) {
        console.error("数据获取失败:", error.message || error);
      }
    };

    onMounted(getData);

    const resetForm = () => {
      examForm.id = "";
      examForm.ExamDate = "";
      examForm.Chinese = 0; 
      examForm.Mathematics = 0;
      examForm.English = 0;
    };

    const showForm = (index) => {
      if (index !== undefined) {
        const currentItem = tableData.value[index];
        Object.assign(examForm, currentItem);
        formTitle.value = "修改数据";
        disableInput.value = true;
      } else {
        resetForm();
        formTitle.value = "新增数据";
        disableInput.value = false;
      }

      dialogFormVisible.value = true;
    };

    const handleDelete = async (index) => {
      const confirmation = confirm("确认删除该条数据吗？");
      if (confirmation) {
        tableData.value.splice(index, 1);
      }
    };

    const examFormSubmit = () => {
      req.post("/exam", examForm).then(() => {
        getData();
        dialogFormVisible.value = false;
      }).catch(error => {
        // console.error("数据提交失败:", error.message || error);
        ElMessage.error(error.message || error);
      });
    };

    return { 
      tableData, 
      examFormSubmit, 
      showForm, 
      handleDelete, 
      dialogFormVisible, 
      examForm, 
      disableInput, 
      formTitle 
    };
  }
};
</script>

<style scoped>
</style>
