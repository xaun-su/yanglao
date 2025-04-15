<template>
  <div class="register-container">
    <h2>注册页面</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">注册</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleRegister = () => {
  errorMessage.value = '';

  // 模拟注册逻辑 (实际情况需要调用后端 API)
  if (username.value && email.value && password.value) {
    // 注册成功，存储用户信息并跳转到登录页面
    const user = {
      username: username.value,
      email: email.value,
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', // 示例头像
    };

    localStorage.setItem('user', JSON.stringify(user));
    router.push({ path: '/login' });
  } else {
    errorMessage.value = '请填写所有信息';
  }
};
</script>

<style scoped>
.register-container {
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
