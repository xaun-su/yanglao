<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;">
      智美仙桃·15分钟高品质生活服务圈
    </el-header>

    <el-main style="padding: 10px;">
      <!-- 日期选择 -->
      <div style="display: flex; overflow-x: auto; padding: 5px 0;">
        <div
          v-for="(date, index) in dates"
          :key="index"
          style="padding: 5px 10px; border-radius: 15px; margin-right: 5px; cursor: pointer;"
          :style="{ backgroundColor: selectedDate === date ? '#409EFF' : '#eee', color: selectedDate === date ? '#fff' : '#333' }"
          @click="selectedDate = date"
        >
          {{ date }}
        </div>
      </div>

      <!-- 活动类型选择 -->
      <div style="display: flex; overflow-x: auto; padding: 5px 0;">
        <div
          v-for="(type, index) in activityTypes"
          :key="index"
          style="padding: 5px 10px; border-radius: 15px; margin-right: 5px; cursor: pointer;"
          :style="{ backgroundColor: selectedType === type ? '#409EFF' : '#eee', color: selectedType === type ? '#fff' : '#333' }"
          @click="selectedType = type"
        >
          {{ type }}
        </div>
      </div>

      <!-- 活动列表 -->
      <el-card v-for="(activity, index) in activities" :key="index" style="margin-bottom: 10px;">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-image
              style="width: 100%; height: 100px; border-radius: 8px;"
              :src="activity.image"
              fit="cover"
            />
          </el-col>
          <el-col :span="16">
            <div style="font-size: 16px; font-weight: bold;">{{ activity.name }}</div>
            <div style="font-size: 12px; color: #666;">{{ activity.time }}</div>
            <div style="font-size: 12px; color: #999;">主办方：{{ activity.organizer }}</div>
          </el-col>
        </el-row>
      </el-card>
    </el-main>

    <el-footer style="text-align: center; padding: 0;">
      <BottomNavigation />
    </el-footer>
  </el-container>
</template>

<script setup>
import BottomNavigation from '../components/BottomNavigation.vue'; // 引入组件
import { ref } from 'vue';

const dates = ref(['3.24', '3.25', '3.26', '3.27', '3.28', '3.29']);
const selectedDate = ref('3.28');

const activityTypes = ref(['商场活动', '让利惠民', '区县风情']);
const selectedType = ref('商场活动');

const activities = ref([
  {
    name: '水羡云造广场草坪音乐节',
    time: '2025.03.28 19:30-20:30',
    organizer: '某某文化传播有限公司',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  },
  {
    name: '水羡云造广场草坪音乐节',
    time: '2025.03.28 19:30-20:30',
    organizer: '某某文化传播有限公司',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  },
  {
    name: '水羡云造广场草坪音乐节',
    time: '2025.03.28 19:30-20:30',
    organizer: '某某文化传播有限公司',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  },
]);
</script>

<style scoped>
/* 移除 el-header 和 el-main 的样式，保留 Activity.vue 特有的样式 */
</style>
