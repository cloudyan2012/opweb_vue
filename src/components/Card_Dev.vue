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
    dev5g.value = res.w2g;
  } catch (error) {
    Msg.value = error;
  }
};

onMounted(getOnlineDev);
</script>

<template>
  <div>
    <div v-if="Msg" class="error-msg">{{ Msg }}</div>
    <div>{{ dev2g }}</div>
    <div>{{ dev5g }}</div>
  </div>
</template>
