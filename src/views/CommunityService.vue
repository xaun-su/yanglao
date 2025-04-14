<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;">
      智美仙桃·15分钟高品质生活服务圈
    </el-header>

    <el-main style="padding: 10px;">
      <el-image
        style="width: 100%; height: 150px; border-radius: 8px; margin-bottom: 10px;"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"  
        fit="cover"
      />

      <el-card style="margin-bottom: 10px;">
        <template #header>
          <div style="font-size: 16px; font-weight: bold;">特色服务</div>
        </template>
        <el-row :gutter="10">
          <el-col :span="8" v-for="(item, index) in specialServices" :key="index" style="text-align: center; margin-bottom: 10px;">
            <el-avatar :size="40" :src="item.icon" style="margin-bottom: 5px;" />
            <div>{{ item.label }}</div>
          </el-col>
        </el-row>
      </el-card>

      <el-card style="margin-bottom: 10px;">
        <template #header>
          <div style="font-size: 16px; font-weight: bold;">基础服务</div>
        </template>
        <el-row :gutter="10">
          <el-col :span="6" v-for="(item, index) in basicServices" :key="index" style="text-align: center; margin-bottom: 10px;">
            <el-avatar :size="40" :src="item.icon" style="margin-bottom: 5px;" />
            <div>{{ item.label }}</div>
          </el-col>
        </el-row>
      </el-card>

      <el-card>
        <template #header>
          <div style="font-size: 16px; font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
            <span>仙桃街道简介</span>
            <el-button type="text" size="small">更多</el-button>
          </div>
        </template>
        <el-row>
          <el-col :span="8">
            <el-image
              style="width: 100%; height: 80px; border-radius: 8px;"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" 
              fit="cover"
            />
          </el-col>
          <el-col :span="16" style="padding-left: 10px; font-size: 12px; color: #666;">
            仙桃街道，是重庆市渝北区，建于2020年6月。辖区包括十个社区：金玉路社区、香奈儿社区...
          </el-col>
        </el-row>
        <el-divider />
        <el-list>
          <el-list-item v-for="(item, index) in communityList" :key="index" style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer;">
            <el-icon name="location" style="margin-right: 5px; color: #999;" />
            <span>{{ item.label }}</span>
            <el-icon name="arrow-right" style="float: right; color: #ccc;" />
          </el-list-item>
        </el-list>
      </el-card>
    </el-main>

    <el-footer style="text-align: center; padding: 0;">
      <BottomNavigation />
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  Location,
  Document,
  Setting,
  User,
} from '@element-plus/icons-vue';
import BottomNavigation from '../components/BottomNavigation.vue'; // 引入组件
const activeIndex = ref('3');
const router = useRouter();

const handleSelect = (index) => {
  if (index === '1') {
    router.push('/'); //  假设地图服务在根路径
  } else if (index === '2') {
    router.push('/activity'); //  假设文娱活动在 /activity 路径
  } else if (index === '3') {
    router.push('/community-service');
  } else if (index === '4') {
    router.push('/profile');
  }
};

const specialServices = ref([
  { label: '心肺健康', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },  // 替换为你的图标
  { label: '养老互助', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '就业互助', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '社区军人互助', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '卡卷互助', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '社区综合服务', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '党建互助', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' }
]);

const basicServices = ref([
  { label: '预约气瓶', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },  // 替换为你的图标
  { label: '门诊挂号', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '渝快办', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '警快办', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '交通12123', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '实名查询', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: 'G公交', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { label: '智慧停车', icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' }
]);

const communityList = ref([
  { label: '金玉路社区' },
  { label: '香奈儿社区' },
  { label: '湖滨路社区' },
  { label: '...更多' }
]);
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  padding: 10px;
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
