<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px; display: flex; align-items: center; justify-content: space-between;">
      <el-button type="text" @click="goBack" style="font-size: 16px;">
        <el-icon><ArrowLeft /></el-icon>
        返回
      </el-button>
      {{ serviceData.name }} <!-- 使用 serviceData.name 显示中文名称 -->
      <div></div> <!-- 占位，保持标题居中 -->
    </el-header>

    <el-main style="padding: 10px;">
      <p v-if="serviceData.description">
        {{ serviceData.description }}
      </p>
      <el-image
        v-if="serviceData.image"
        style="width: 100%; height: 200px; border-radius: 8px; margin-bottom: 10px;"
        :src="serviceData.image"
        fit="cover"
      />
      <p v-if="serviceData.content">
        {{ serviceData.content }}
      </p>

      <el-card v-if="serviceData.contact" style="margin-bottom: 10px;">
        <template #header>
          <div style="font-size: 16px; font-weight: bold;">联系方式</div>
        </template>
        <div v-if="serviceData.contact.phone">
          <el-icon><Phone /></el-icon>
          <span>联系电话：{{ serviceData.contact.phone }}</span>
        </div>
        <div v-if="serviceData.contact.time">
          <el-icon><Clock /></el-icon>
          <span>服务时间：{{ serviceData.contact.time }}</span>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ArrowLeft, Phone, Clock } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

const serviceData = ref({});

onMounted(() => {
  // 从路由参数中获取服务数据
  try {
    const serviceDataStr = route.query.serviceData;
    if (serviceDataStr) {
      serviceData.value = JSON.parse(serviceDataStr);
    } else {
      serviceData.value = {};
    }
  } catch (error) {
    console.error('Error parsing serviceData:', error);
    serviceData.value = {};
  }
  console.log(serviceData.value);
});

const goBack = () => {
  router.back();
};
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
