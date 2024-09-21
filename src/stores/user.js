import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const getUser = computed(() => user.value='admin')
  return { user, getUser}
})
