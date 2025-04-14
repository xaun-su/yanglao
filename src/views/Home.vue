<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;">
      智美仙桃·15分钟高品质生活服务圈
    </el-header>

    <el-main style="padding: 10px;">
      <!-- 搜索框 -->
      <el-input placeholder="请输入设施名称搜索" style="margin-bottom: 10px;" />

      <!-- 分类标签 -->
      <div style="display: flex; overflow-x: auto; padding: 5px 0;">
        <div
          v-for="(tag, index) in tags"
          :key="index"
          style="padding: 5px 10px; border-radius: 15px; margin-right: 5px; cursor: pointer;"
          :style="{ backgroundColor: selectedTag === tag ? '#409EFF' : '#eee', color: selectedTag === tag ? '#fff' : '#333' }"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </div>
      </div>

      <!-- 设施列表 -->
      <el-card
        v-for="(facility, index) in filteredFacilities"
        :key="index"
        style="margin-bottom: 10px; cursor: pointer;"
        @click="goToFacilityDetail(facility.name)"
      >
        <el-row :gutter="10">
          <el-col :span="8">
            <el-image
              style="width: 100%; height: 100px; border-radius: 8px;"
              :src="facility.image"
              fit="cover"
            />
          </el-col>
          <el-col :span="16">
            <div style="font-size: 16px; font-weight: bold;">{{ facility.name }}</div>
            <div style="font-size: 12px; color: #666;">
              <span style="color: #409EFF;">{{ facility.category }}</span>
              <el-tag size="small">{{ facility.type }}</el-tag>
              <el-tag size="small">{{ facility.feature }}</el-tag>
            </div>
            <div style="font-size: 12px; color: #999;">地址：{{ facility.address }}</div>
            <div style="font-size: 12px; color: #999;">描述：{{ facility.description }}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
              <span style="font-size: 12px; color: #999;">距离{{ facility.distance }}</span>
              <el-button type="primary" size="small">去这里</el-button>
            </div>
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
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const tags = ref(['宜居', '宜学', '宜养', '宜业', '宜游']);
const selectedTag = ref('宜学');

const facilities = ref([
  {
    name: '金州朝阳中学',
    category: '宜学',
    type: '文化活动',
    feature: '基础保障类',
    address: '曹阳四村245-23号',
    description: '民办小学',
    distance: '2.9千米',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    tags: ['宜学'], // 添加 tags 属性
  },
  {
    name: '设施名称替代文字',
    category: '宜居',
    type: '文化活动',
    feature: '基础保障类',
    address: '曹阳四村245-23号',
    description: '民办小学',
    distance: '2.9千米',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    tags: ['宜居'], // 添加 tags 属性
  },
  {
    name: '设施名称替代文字很长...',
    category: '宜业',
    type: '文化活动',
    feature: '基础保障类',
    address: '曹阳四村245-23号',
    description: '民办小学',
    distance: '2.9千米',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    tags: ['宜业'], // 添加 tags 属性
  },
  {
    name: '设施名称替代文字很长...',
    category: '宜游',
    type: '文化活动',
    feature: '基础保障类',
    address: '曹阳四村245-23号',
    description: '民办小学',
    distance: '2.9千米',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    tags: ['宜游'], // 添加 tags 属性
  },
  {
    name: '多标签测试',
    category: '综合',
    type: '其他',
    feature: '特色服务',
    address: '测试地址',
    description: '这是一个多标签测试设施',
    distance: '1.0千米',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    tags: ['宜居', '宜学', '宜养'], // 添加 tags 属性
  },
]);

const filteredFacilities = computed(() => {
  return facilities.value.filter((facility) => facility.tags.includes(selectedTag.value));
});

const goToFacilityDetail = (facilityName) => {
  router.push({ name: 'FacilityDetail', params: { facilityName } });
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
