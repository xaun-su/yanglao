<template>
    <div class="login-container">
      <h2>登录页面</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  // 定义响应式变量
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  // 登录方法
  const handleLogin = () => {
    // 清空错误信息
    errorMessage.value = '';
  
    // 模拟登录逻辑
    if (username.value === 'admin' && password.value === 'admin') {
      router.push({ path: '/home' }); // 登录成功后跳转到主页
    } else {
      errorMessage.value = '用户名或密码错误'; // 设置错误信息
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    margin-top: calc(30%) !important;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369d70;
  }
  
  .error-message {
    color: red;
    text-align: center;
  }
  </style>