<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#fff"
    text-color="#999"
    active-text-color="#409EFF"
    style="border-top: 1px solid #eee;"
  >
    <el-menu-item index="1">
      <template #title>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="../assets/img/首页.png" style="width: 24px; height: 24px; margin-bottom: 2px;" />
          <span>首页</span>
        </div>
      </template>
    </el-menu-item>

    <el-menu-item index="2">
      <template #title>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="../assets/img/运动.png" style="width: 24px; height: 24px; margin-bottom: 2px;" />
          <span>文娱活动</span>
        </div>
      </template>
    </el-menu-item>

    <el-menu-item index="3">
      <template #title>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="../assets/img/便民服务.png" style="width: 24px; height: 24px; margin-bottom: 2px;" />
          <span>便民服务</span>
        </div>
      </template>
    </el-menu-item>

    <el-menu-item index="4">
      <template #title>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="../assets/img/我的.png" style="width: 24px; height: 24px; margin-bottom: 2px;" />
          <span>我的</span>
        </div>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const activeIndex = ref('');

const updateActiveIndex = () => {
  const currentRoute = route.path;
  if (currentRoute === '/' || currentRoute === '/home') {
    activeIndex.value = '1';
  } else if (currentRoute === '/activity') {
    activeIndex.value = '2';
  } else if (currentRoute === '/community-service') {
    activeIndex.value = '3';
  } else if (currentRoute === '/profile') {
    activeIndex.value = '4';
  } else {
    activeIndex.value = '1';
  }
};

const handleSelect = (index) => {
  if (index === '1') {
    router.push('/home');
  } else if (index === '2') {
    router.push('/activity');
  } else if (index === '3') {
    router.push('/community-service');
  } else if (index === '4') {
    router.push('/profile');
  }
};

watch(
  () => route.path,
  () => {
    updateActiveIndex();
  }
);

onMounted(() => {
  updateActiveIndex();
});
</script>


<style scoped>
/* 移除 el-menu-item 的默认样式 */
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  padding: 0; /* 移除默认 padding */
  height: auto; /* 允许内容撑开高度 */
}

.el-menu--horizontal .el-menu-item, .el-menu--horizontal .el-submenu__title {
    height: auto; /* 允许内容撑开高度 */
    line-height: normal; /* 移除默认 line-height */
}

/* 调整选中时的文字颜色 */
.el-menu--horizontal .el-menu-item.is-active {
  color: #409EFF; /*  设置选中时的文字颜色 */
}

/* 调整 el-menu 整体样式 */
.el-menu--horizontal {
  display: flex;
  justify-content: space-around; /*  均匀分布菜单项 */
}

.el-menu--horizontal .el-menu-item {
  min-width: 50px; /*  设置最小宽度，防止文字过短时图标挤在一起 */
}
</style>
