<template>
  <div>
    <Card :title="cardTitle" ><onlineDev /></Card>
  </div>
</template>

<script>
import onlineDev from "@/components/Card_Dev.vue";
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
    onlineDev
  },
  data() {
    return {
      cardTitle: '这是卡片标题'
    }
  }
}
</script>