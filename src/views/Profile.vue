<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header class="header">
      <el-image
        class="header-image"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        fit="cover"
      />
      <div class="header-overlay"></div>
    </el-header>

    <!-- 主要内容区域 -->
    <el-main class="main">
      <!-- 用户信息卡片 -->
      <el-card class="user-card">
        <el-avatar
          class="user-avatar"
          :size="80"
          :src="user ? (user.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png') : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />
        <div class="welcome-text">Hi~ 欢迎来到</div>
        <div class="app-name">智美仙桃·15分钟高品质生活服务圈</div>
        <div class="login-tip" v-if="!user">登录体验更多精彩内容</div>
        <div class="user-info" v-else>
          <div>用户名：{{ user.username }}</div>
          <div>邮箱：{{ user.email }}</div>
        </div>
        <el-button
          type="primary"
          class="login-button"
          @click="goToLogin"
          v-if="!user"
        >
          立即登录
        </el-button>
        <el-button type="danger" class="logout-button" @click="logout" v-else>
          退出登录
        </el-button>
      </el-card>

      <!-- 菜单列表 -->
      <el-list class="menu-list">
        <el-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          class="menu-item"
          @click="goTo(item.path)"
        >
          <el-icon :name="item.icon" class="menu-icon" />
          <span>{{ item.label }}</span>
          <el-icon name="arrow-right" class="menu-arrow" />
        </el-list-item>
      </el-list>
    </el-main>

    <!-- 底部导航栏 -->
    <el-footer class="footer">
      <BottomNavigation />
    </el-footer>
  </el-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BottomNavigation from '../components/BottomNavigation.vue';

export default {
  components: {
    BottomNavigation,
  },
  setup() {
    const router = useRouter();
    const user = ref(null);

    onMounted(() => {
      // 从 localStorage 中获取用户信息
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        user.value = JSON.parse(storedUser);
      }
    });

    const menuItems = ref([
      { label: '我的收藏', icon: 'star', path: '/collection' }, // 你可能需要根据实际情况修改这些路由
      { label: '我的活动', icon: 'video-play', path: '/activity' },
      { label: '关于我们', icon: 'info', path: '/about' },
    ]);

    const goTo = (path) => {
      router.push(path);
    };

    const goToLogin = () => {
      router.push('/login');
    };

    const logout = () => {
      localStorage.removeItem('user');
      user.value = null;
      router.push('/home'); // 重定向到首页
    };

    return {
      menuItems,
      goTo,
      goToLogin,
      user,
      logout,
    };
  },
};
</script>

<style scoped>
/* 整体布局样式 */
.el-container {
  height: 100vh;
}

/* 头部区域样式 */
.header {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

/* 主要内容区域样式 */
.main {
  padding: 10px;
}

/* 用户信息卡片样式 */
.user-card {
  text-align: center;
  border-radius: 15px;
  margin-bottom: 10px;
}

.user-avatar {
  margin-bottom: 10px;
}

.welcome-text {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}

.app-name {
  font-size: 14px;
  color: #666;
}

.login-tip {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}

.login-button {
  border-radius: 20px;
  background: linear-gradient(to right, #4CAF50, #8BC34A);
  border: none;
}

.logout-button {
  border-radius: 20px;
  background-color: #f44336;
  border: none;
  color: white;
}

.user-info {
  margin-bottom: 10px;
}

/* 菜单列表样式 */
.menu-list {
  border-top: 1px solid #eee;
}

.menu-item {
  padding: 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-item:hover {
  background-color: #f9f9f9;
}

.menu-icon {
  margin-right: 10px;
  color: #666;
}

.menu-arrow {
  margin-left: auto;
  color: #ccc;
}

/* 底部导航栏样式 */
.footer {
  text-align: center;
  padding: 0;
}
</style>
