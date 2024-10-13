<template>
  <el-space size="large" wrap style="align-items: start;">
    <Card v-for="card in cards" :key="card.id" :title="card.title" >
      <component :is="card.name"></component>
    </Card>
</el-space>
  <div v-if="Msg">{{ Msg }}</div>
</template>

<script>
import oprouter from "@/components/OpRouter.vue";
import onlinedev from "@/components/OnlineDev.vue";
import charttv from "@/components/ChartTv.vue";
import Card from '@/components/Card.vue';
import req from '../comm/request';
import { onMounted, ref } from "vue";
export default {
  components: {
    Card,
    oprouter,
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
return {cards,Msg};
  }
  }
</script>