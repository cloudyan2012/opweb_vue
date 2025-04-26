<template>
  <el-autocomplete
    v-model="state"
    value-key="uname"
    :fetch-suggestions="querySearchAsync"
    placeholder="点击选择或直接输入姓名查询成绩"
    @select="handleSelect"
    style="min-width: 300px; max-width: 300px"
  />
  <div v-if="reportList && reportList.length">
    <el-space v-loading="loading" direction="vertical" size="large" fill style="min-width: 99%;">
    <tablereport :tableData="reportList" />
    <chartreport :tableData="reportList" />
  </el-space>
  </div>
  <div v-else style="text-align: center;"><el-text>暂无数据</el-text></div>
</template>

<script>
import { ref, onMounted } from "vue";
import req from "@/comm/request";
import tablereport from "@/components/TableReport.vue";
import chartreport from "@/components/ChartReport.vue";

export default {
  components: { tablereport,chartreport },
  setup() {
    const loading = ref(true)
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
        console.error("获取用户列表失败:", error);
        alert("获取用户失败，请检查网络或稍后再试。");
      }
    };

    const querySearchAsync = (queryString, cb) => {
      const results = !queryString
        ? users.value
        : users.value.filter(user =>
            user.uname.toLowerCase().indexOf(queryString.toLowerCase())!==-1
          );
      cb(results);
    };

    const handleSelect = async (item) => {
      loading.value = true;
      if (!item?.uname) {
        alert("无效的选择，请重新选择。");
        return;
      }
      try {
        const res = await req.get(`/exam/${item.uid}`);
        reportList.value = (res.data && Array.isArray(res.data)) ? res.data : [];
        loading.value = false;
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || error.message || "未知错误";
        alert(`获取数据失败: ${errorMessage}，请稍后再试。`);
      }
    };

    onMounted(fetchUsers);

    return {
      loading,
      reportList,
      state,
      querySearchAsync,
      handleSelect,
    };
  },
};
</script>

<style scoped></style>
