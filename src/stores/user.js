import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref(null)

  function getUser ()  {
    const token = localStorage.getItem('token') // 从 localStorage 获取 token
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // 解码 token 获取 payload
        username.value = payload.name || null; // 获取 name 值作为 username
      } catch (error) {
        console.error('解析token失败:', error); // 处理解析错误
        username.value = null; // 解析失败时重置username
      }
    } else {
      username.value = null; // 如果没有token，重置username
    }
    return username.value;
  };

  return { username, getUser };
})
