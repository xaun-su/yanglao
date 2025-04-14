<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;">
      活动详情
    </el-header>

    <el-main style="padding: 10px;">
      <el-card>
        <el-image
          style="width: 100%; height: 200px; border-radius: 8px; margin-bottom: 10px;"
          :src="activity.image"
          fit="cover"
        />
        <div style="font-size: 18px; font-weight: bold; margin-bottom: 5px;">{{ activity.name }}</div>
        <div style="font-size: 14px; color: #666; margin-bottom: 5px;">时间：{{ activity.time }}</div>
        <div style="font-size: 14px; color: #999; margin-bottom: 10px;">主办方：{{ activity.organizer }}</div>
        <div style="font-size: 14px; color: #333;">
          {{ activity.description }}
        </div>
      </el-card>
    </el-main>

    <el-footer style="text-align: center; padding: 0;">
      <BottomNavigation />
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BottomNavigation from '../components/BottomNavigation.vue';

const route = useRoute();
const activityId = ref(null);
const activity = ref({});

onMounted(() => {
  activityId.value = route.params.id;
  // 模拟根据活动 ID 获取活动详情数据
  // 实际项目中，你需要从后端 API 获取数据
  const mockActivities = [
    {
      id: '1',
      name: '水羡云造广场草坪音乐节',
      time: '2025.03.28 19:30-20:30',
      organizer: '某某文化传播有限公司',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      description: '这是一个草坪音乐节的描述。',
    },
    {
      id: '2',
      name: '另一个活动',
      time: '2025.04.01 20:00-22:00',
      organizer: '某某文化传播有限公司',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      description: '这是另一个活动的描述。',
    },
    {
      id: '3',
      name: '又一个活动',
      time: '2025.04.05 14:00-16:00',
      organizer: '某某文化传播有限公司',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      description: '这是又一个活动的描述。',
    },
  ];

  const foundActivity = mockActivities.find((item) => item.id === activityId.value);
  if (foundActivity) {
    activity.value = foundActivity;
  } else {
    // 如果没有找到活动，可以进行错误处理
    console.error('Activity not found');
  }
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
