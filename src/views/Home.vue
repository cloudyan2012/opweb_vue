<template>
<div class="main">
  <Chat/>
</div>
</template>

<script>
import chat from "@/components/Chat.vue";
export default {
  components: { chat },
  setup() { 
    return {
      chat
    };
  },
};
</script>

<style scoped>
</style>
