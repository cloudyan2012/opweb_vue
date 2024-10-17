<template>
<el-space wrap>
  <el-text class="mx-1" type="info">设备温度：<el-text class="mx-1" :type="sensor_color">{{ sensor_op }} </el-text>
  </el-text>
  <el-text class="mx-1" type="info"> 运行时间：<el-text class="mx-1" type="success">{{ runtime_op }}</el-text>
  </el-text>
</el-space>
</template>

<script setup>
import req from "../comm/request";
import { onMounted, ref, watch } from "vue";

const sensor_op = ref(0);
const sensor_color = ref("success");
const runtime_op = ref(0);
const Msg = ref("");

const formatRuntime = (seconds) => {
  const days = Math.floor(seconds / (24 * 3600));
  const hours = Math.floor((seconds % (24 * 3600)) / 3600);
  return `${days}天${hours}小时`;
};

const getOpStat = async () => {
  try {
    const res = await req.get("/oprouter");
    sensor_op.value = res.r_wendu;
    runtime_op.value = formatRuntime(res.r_time);
  } catch (error) {
    Msg.value = error;
  }
};
onMounted(getOpStat);

watch(sensor_op, (newValue) => {
  if (newValue > 75) {
    sensor_color.value = "danger";
  } else {
    sensor_color.value = "success"; 
  }
});
</script>
