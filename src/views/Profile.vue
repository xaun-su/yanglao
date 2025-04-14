<template>
  <el-container>
    <el-header style="height: 200px; padding: 0; overflow: hidden; position: relative;">
      <el-image
        style="width: 100%; height: 100%; object-fit: cover;"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"  
        fit="cover"
      />
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.1);"></div>  <!-- 增加一个半透明的遮罩 -->
    </el-header>

    <el-main style="padding: 10px;">
      <el-card style="text-align: center; border-radius: 15px; margin-bottom: 10px;">
        <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c67c9267png.png" />  <!-- 替换为你的头像 -->
        <div style="margin-top: 10px; font-size: 16px; color: #333;">Hi~ 欢迎来到</div>
        <div style="font-size: 14px; color: #666;">智美仙桃·15分钟高品质生活服务圈</div>
        <div style="font-size: 12px; color: #999; margin-bottom: 10px;">登录体验更多精彩内容</div>
        <el-button type="primary" style="border-radius: 20px; background: linear-gradient(to right, #4CAF50, #8BC34A); border: none;">立即登录</el-button>  <!-- 调整按钮样式 -->
      </el-card>

      <el-list>
        <el-list-item v-for="(item, index) in menuItems" :key="index" style="padding: 15px; border-bottom: 1px solid #eee; cursor: pointer;">
          <el-icon :name="item.icon" style="margin-right: 10px; color: #666;" />
          <span>{{ item.label }}</span>
          <el-icon name="arrow-right" style="float: right; color: #ccc;" />
        </el-list-item>
      </el-list>
    </el-main>

    <el-footer style="text-align: center; padding: 0;">
      <BottomNavigation />
    </el-footer>
  </el-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  Location,
  Document,
  Setting,
  User,
} from '@element-plus/icons-vue';
import BottomNavigation from '../components/BottomNavigation.vue'; // 引入组
export default {
  components: {
    Location,
    Document,
    Setting,
    User,
  },
  setup() {
    const activeIndex = ref('4');
    const router = useRouter();

    const handleSelect = (index) => {
      if (index === '1') {
        router.push('/'); //  假设地图服务在根路径
      } else if (index === '2') {
        router.push('/activity'); //  假设文娱活动在 /activity 路径
      } else if (index === '3') {
        router.push('/convenience'); //  假设便民服务在 /convenience 路径
      } else if (index === '4') {
        router.push('/profile');
      }
    };

    const menuItems = ref([
      { label: '我的收藏', icon: 'star' },
      { label: '我的活动', icon: 'video-play' },
      { label: '关于我们', icon: 'info' }
    ]);

    return {
      menuItems,
      activeIndex,
      handleSelect
    };
  }
};
</script>

<style scoped>
.el-header {
  position: relative;
}

.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal .el-menu-item, .el-menu--horizontal .el-submenu__title {
    height: 50px;
    line-height: 50px;
}

.el-menu--horizontal .el-menu-item is-active {
  color: #409EFF;
}
</style>
