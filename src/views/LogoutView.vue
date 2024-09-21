<template>
</template>
   
<script>
import {useRouter} from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    localStorage.removeItem('token');
    router.push('/');
  },
};
</script>

<style scoped>
</style>