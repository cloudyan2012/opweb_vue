<template>
  <div>
    <div v-if="Msg" class="error-msg">{{ Msg }}</div>
    <div v-for="d2g in dev2g" :key="d2g.ip">
      {{d2g.dname}}
    </div>
    <div v-for="d5g in dev5g" :key="d5g.ip">
      {{d5g.dname}}
    </div>
  </div>
</template>
<script setup>
import req from "../utils/request";
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
