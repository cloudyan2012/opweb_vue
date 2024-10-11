<template>
  <el-space wrap>
  <div v-for="card in cards" :key="card.id">
    <Card :title="card.title" >
      <component :is="card.name"></component>
    </Card>
  </div>
</el-space>
  <div v-if="Msg">{{ Msg }}</div>
</template>

<script>
import onlinedev from "@/components/OnlineDev.vue";
import charttv from "@/components/ChartTv.vue";
import Card from '@/components/Card.vue';
import req from '../utils/request';
import { onMounted, ref } from "vue";
export default {
  components: {
    Card,
    onlinedev,
    charttv
  },
  setup() {
    const cards = ref([]);
    const Msg = ref("");
    const getCards = async () => {
  try {
    const res = await req.get("/cards");
    cards.value = res.data;
  } catch (error) {
    Msg.value = error;
  }
};

onMounted(getCards);
return {cards,Msg,onlinedev,charttv};
  }
  }
</script>