<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;">
      {{ facilityName }} 详情
    </el-header>

    <el-main style="padding: 10px;">
      <p>这里显示 {{ facilityName }} 的详细信息</p>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const facilityName = ref('');

onMounted(() => {
  facilityName.value = route.params.facilityName;
});
</script>

<style scoped>
/* 设置 el-container 的高度和 Flexbox 布局 */
.el-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 设置 el-main 的 flex-grow */
.el-main {
  flex-grow: 1;
}
</style>
