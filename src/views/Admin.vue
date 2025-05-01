<template>
  <el-button type="info" @click="showForm()" style="margin-bottom: 5px;">新增数据</el-button>
  <el-table :data="tableData" stripe height="350">
    <el-table-column prop="id" label="ID" />
    <el-table-column fixed prop="name" label="Name" />
    <el-table-column fixed prop="comment" label="年级" />
    <el-table-column prop="exam_date" label="Date">
      <template #default="scope">
      {{ timestampToYearMonth(scope.row.exam_date) }}
      </template>
    </el-table-column>
    <el-table-column prop="chinese" label="语文" />
    <el-table-column prop="mathematics" label="数学" />
    <el-table-column prop="english" label="英语" />
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
      <el-form-item label="姓 名">
        <el-select v-model="examForm.uid" placeholder="Select" :disabled="disableInput" style="width: 150px">
        <el-option
        v-for="item in userData"
        :key="item.uid"
        :value="item.uid"
        :label="item.uname"
        />
        </el-select>
      </el-form-item>
      <el-form-item label="日 期">
        <el-date-picker
        :disabled="disableInput"
        v-model="examForm.exam_date"
        type="date"
        placeholder="选择考试日期"
        format="YYYY/MM/DD"
        value-format="x"
        style="width: 150px"
        />
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="input" placeholder="输入年级,如一年级1" style="width: 150px"/>
      </el-form-item>
      <el-form-item label="语文">
        <el-input-number v-model="examForm.chinese" :max="100" />
      </el-form-item>
      <el-form-item label="数学">
        <el-input-number v-model="examForm.mathematics" :max="100" />
      </el-form-item>
      <el-form-item label="英语">
        <el-input-number v-model="examForm.english" :max="100" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitExamForm()">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import req from "@/comm/request";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const userMap = ref(new Map());
    const tableData = ref([]);
    const userData = ref([]);
    const dialogFormVisible = ref(false);
    const disableInput = ref(false);
    const formTitle = ref("");
    const examForm = reactive({
      uid: '',
      comment: "",
      exam_date: null,
      chinese: 0,
      mathematics: 0,
      english: 0
    });

    const getData = async () => {
      try {
        const [examData, userDataRes] = await Promise.all([req.get("/exam"), req.get("/user")]);
        userData.value = userDataRes;
        userDataRes.forEach(({ uid, uname }) => userMap.value.set(uid, uname));

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
      examForm.uid = "";
      examForm.comment = "",
      examForm.exam_date = null;
      examForm.chinese = 0; 
      examForm.mathematics = 0;
      examForm.english = 0;
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
        const currentItem = tableData.value[index];
        const timestamp = new Date(currentItem.exam_date).getTime();
        req.delete(`/exam/${currentItem.id}?date=${timestamp}`).then(() => {
          tableData.value.splice(index, 1);
          ElMessage.success("删除成功");
      }).catch(error => {
        ElMessage.error(error.message || error);
      });
      }
    };

    const submitExamForm = () => {
      req.post("/exam", examForm).then(() => {
        getData();
        dialogFormVisible.value = false;
        ElMessage.success("提交成功");
      }).catch(error => {
        ElMessage.error(error.message || error);
      });
    };

    const timestampToYearMonth = (timestamp) => {
     const date = new Date(timestamp);
     const year = date.getFullYear();
     const month = date.getMonth() + 1; // getMonth() 返回的是0-11，需要加1
     return `${year}.${month.toString().padStart(2, '0')}`; // 保证月份是两位数
    };

    return {
      timestampToYearMonth,
      userData,
      tableData, 
      submitExamForm, 
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
