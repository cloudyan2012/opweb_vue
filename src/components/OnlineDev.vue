<template>
<el-space wrap style="padding-right: 19px;">
    <div v-if="Msg" class="error-msg">{{ Msg }}</div>
    <el-badge v-for="d5g in dev5g" :key="d5g.ip" value="5G" class="item" color="#67C23A">
      <el-button>{{d5g.dname}}</el-button>
  </el-badge>
  <el-badge v-for="d2g in dev2g" :key="d2g.ip" value="2G" class="item" color="rgb(148.6, 212.3, 117.1)">
      <el-button>{{d2g.dname}}</el-button>
  </el-badge>
</el-space>
</template>

<script setup>
import req from "../comm/request";
import { onMounted, ref } from "vue";

const dev5g = ref("");
const dev2g = ref("");
const Msg = ref("");

const getOnlineDev = async () => {
  try {
    const res = await req.get("/onlinedev");
    dev2g.value = res.w2g;
    dev5g.value = res.w5g;
  } catch (error) {
    Msg.value = error;
  }
};

onMounted(getOnlineDev);
</script>
