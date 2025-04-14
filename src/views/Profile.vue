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
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <div class="welcome-text">Hi~ 欢迎来到</div>
        <div class="app-name">智美仙桃·15分钟高品质生活服务圈</div>
        <div class="login-tip">登录体验更多精彩内容</div>
        <el-button type="primary" class="login-button">立即登录</el-button>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BottomNavigation from '../components/BottomNavigation.vue';

export default {
  components: {
    BottomNavigation,
  },
  setup() {
    const router = useRouter();

    const menuItems = ref([
      { label: '我的收藏', icon: 'star', path: '/collection' },
      { label: '我的活动', icon: 'video-play', path: '/activity' },
      { label: '关于我们', icon: 'info', path: '/about' },
    ]);

    const goTo = (path) => {
      router.push(path);
    };

    return {
      menuItems,
      goTo,
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
