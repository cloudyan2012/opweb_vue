<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" autocomplete="username" v-model="credentials.username" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="credentials.password" required>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <div v-if="msg" class="error-msg">{{msg}}</div>    
</template>
   
<script>
  import { reactive, ref } from 'vue';
  import req from '../utils/request';
  import {useRouter} from 'vue-router';
  export default {
    setup() {
      const router = useRouter();
      const credentials = reactive({
        username: '',
        password: ''
      });
      const msg = ref(null);
      const login = async() => {
        await req.post('/token', credentials)
         .then(response => {
            localStorage.setItem('token', response.token);  
            const path = router.currentRoute.value.query.redirect;
            console.log(path);
            router.push(path || '/');    
          })
         .catch(error => {
            msg.value=error;
         })
      };
      return {
        credentials,
        login,
        msg
      };
    }
  };
</script>
   
<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
   
  .login-box {
    width: 300px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
   
  .form-group {
    margin-bottom: 15px;
  }
   
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
   
  .form-group input[type="text"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
   
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
  }
   
  button[type="submit"]:hover {
    background-color: #4cae4c;
  }
</style>