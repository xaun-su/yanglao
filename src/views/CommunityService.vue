<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px;" class="header">
      智美仙桃·15分钟高品质生活服务圈
    </el-header>

    <el-main style="padding: 10px;" class="main">
      <img src="../assets/img/屏幕截图 2025-04-22 092237.png" style="object-fit: cover; width: 100%; height: 100%;">

      <el-card style="margin-bottom: 10px;">
        <template #header>
          <div style="font-size: 16px; font-weight: bold;">特色服务</div>
        </template>
        <el-row :gutter="10">
          <el-col
            :span="8"
            v-for="(item, index) in specialServices"
            :key="index"
            style="text-align: center; margin-bottom: 10px;"
          >
            <el-avatar :size="40" :src="item.icon" style="margin-bottom: 5px;" />
            <div @click="goToService(item)" style="cursor: pointer;">{{ item.label }}</div>
          </el-col>
        </el-row>
      </el-card>

      <el-card style="margin-bottom: 10px;">
        <template #header>
          <div style="font-size: 16px; font-weight: bold;">基础服务</div>
        </template>
        <el-row :gutter="10">
          <el-col
            :span="6"
            v-for="(item, index) in basicServices"
            :key="index"
            style="text-align: center; margin-bottom: 10px;"
          >
            <el-avatar :size="40" :src="item.icon" style="margin-bottom: 5px;" />
            <div>{{ item.label }}</div>
          </el-col>
        </el-row>
      </el-card>

      <el-card>
        <template #header>
          <div
            style="font-size: 16px; font-weight: bold; display: flex; justify-content: space-between; align-items: center;"
          >
            <span>仙桃街道简介</span>
            <el-button type="text" size="small" @click="openStreetDialog">更多</el-button>
          </div>
        </template>
        <el-row>
          <el-col :span="8">
            <img src="../assets/img/img1.jpg" style="object-fit: cover; width: 100%; height: 100%;">
          </el-col>
          <el-col :span="16" style="padding-left: 10px; font-size: 12px; color: #666;">
            仙桃街道，是重庆市渝北区，建于2020年6月。辖区包括十个社区：金玉路社区、香奈儿社区...
          </el-col>
        </el-row>
        <el-divider />
        <el-list>
          <el-list-item
            v-for="(item, index) in communityList"
            :key="index"
            style="padding: 10px 0; border-bottom: 1px solid #eee; cursor: pointer; display: flex; align-items: center;"
            @click="openCommunityDialog(item)"
          >
            <el-icon name="location" style="margin-right: 5px; color: #999;" />
            <span style="flex-grow: 1; text-align: left;">{{ item.label }}</span>
            <span>&gt;</span>
            <el-icon name="arrow-right" style="color: #ccc;" />
          </el-list-item>
        </el-list>
      </el-card>
    </el-main>

    <el-footer style="text-align: center; padding: 0;" class="footer">
      <BottomNavigation />
    </el-footer>

    <!-- 仙桃街道详情弹窗 -->
    <el-dialog v-model="streetDialogVisible" title="仙桃街道详情" width="80%">
      <el-image
        style="width: 100%; height: 150px; border-radius: 8px; margin-bottom: 10px;"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        fit="cover"
      />
      <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
        仙桃街道，是重庆市渝北区，建于2020年6月。辖区包括以下社区：
      </p>
      <el-list>
        <el-list-item v-for="(item, index) in communityList" :key="index">
          {{ item.label }}
        </el-list-item>
      </el-list>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="streetDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 社区详情弹窗 -->
    <el-dialog v-model="communityDialogVisible" :title="selectedCommunity ? selectedCommunity.label : ''" width="80%">
      <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
        {{ selectedCommunity ? selectedCommunity.description : '' }}
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="communityDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
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
import png1 from '../assets/img/健康分析.png';
import png2 from '../assets/img/老年大学.png';
import png3 from '../assets/img/用药提醒.png';
import png4 from '../assets/img/互助.png';
import png5 from '../assets/img/健康配餐.png';
import png6 from '../assets/img/社区服务.png';
import png7 from '../assets/img/互助.png';
import png8 from '../assets/img/瓶.png';
import png9 from '../assets/img/医生.png';
import png10 from '../assets/img/用药提醒.png';
import png11 from '../assets/img/我的.png';
import png12 from '../assets/img/车.png';
import png13 from '../assets/img/钱.png';
import png14 from '../assets/img/公交车.png';
import png15 from '../assets/img/活动.png';
const router = useRouter();

const specialServices = ref([
  {
    label: '健康分析',
    icon: png1,
    route: 'generic-service',
    serviceName: 'heart-lung-health', // 添加英文 serviceName
    serviceData: {
      name: '健康分析', // 添加中文 name
      title: '健康分析',
      description: '提供健康分析相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是健康分析服务的详细内容。\n\n您可以咨询相关医生，了解更多心肺健康知识。\n\n我们还提供在线预约服务，方便您进行体检。',
      contact: {
        phone: '123-456-7890',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
  {
    label: '老年学堂',
    icon: png2,
    route: 'generic-service',
    serviceName: 'elderly-mutual-aid', // 添加英文 serviceName
    serviceData: {
      name: '老年学堂', // 添加中文 name
      title: '老年学堂',
      description: '提供老年学堂相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是养老互助服务的详细内容。\n\n我们提供上门护理、康复训练等服务。\n\n欢迎加入我们的养老互助社区，共同营造温馨的养老环境。',
      contact: {
        phone: '987-654-3210',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
  {
    label: '用药提醒',
    icon: png3,
    route: 'generic-service',
    serviceName: 'employment-mutual-aid', // 添加英文 serviceName
    serviceData: {
      name: '用药提醒', // 添加中文 name
      title: '用药提醒',
      description: '提供用药提醒相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是就业互助服务的详细内容。\n\n我们提供职业技能培训、就业指导等服务。\n\n欢迎参加我们的就业互助活动，共同提升就业能力。',
      contact: {
        phone: '555-123-4567',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
  {
    label: '社区军人互助',
    icon: png4,
    route: 'generic-service',
    serviceName: 'community-veteran-mutual-aid', // 添加英文 serviceName
    serviceData: {
      name: '社区军人互助', // 添加中文 name
      title: '社区军人互助',
      description: '提供社区军人互助相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是社区军人互助服务的详细内容。\n\n我们提供生活帮助、法律咨询等服务。\n\n欢迎加入我们的社区军人互助组织，共同维护军人权益。',
      contact: {
        phone: '111-222-3333',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
  {
    label: '营养餐配送',
    icon: png5,
    route: 'generic-service',
    serviceName: 'card-coupon-mutual-aid', // 添加英文 serviceName
    serviceData: {
      name: '营养餐配送', // 添加中文 name
      title: '营养餐配送',
      description: '提供营养餐配送相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是卡卷互助服务的详细内容。\n\n我们提供卡卷转让、卡卷交换等服务。\n\n欢迎参加我们的卡卷互助活动，共同分享卡卷优惠。',
      contact: {
        phone: '444-555-6666',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
  {
    label: '社区综合服务',
    icon: png6,
    route: 'community-comprehensive', // 修改 route
  },
  {
    label: '邻里互助',
    icon: png7,
    route: 'generic-service',
    serviceName: 'party-building-mutual-aid', // 添加英文 serviceName
    serviceData: {
      name: '邻里互助', // 添加中文 name
      title: '邻里互助',
      description: '提供邻里互助相关的服务和信息。',
      image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      content: '这里是党建互助服务的详细内容。\n\n我们提供党员学习、党建活动等服务。\n\n欢迎参加我们的党建互助活动，共同加强党性修养。',
      contact: {
        phone: '101-202-3030',
        time: '周一至周五 9:00-17:00',
      },
    },
  },
]);

const basicServices = ref([
  { label: '预约气瓶', icon: png8 },
  { label: '私人医生', icon: png9 },
  { label: '药品直购', icon: png10 },
  { label: '护工预约', icon: png11 },
  { label: '交通12123', icon: png12 },
  { label: '养老金查询', icon: png13 },
  { label: 'G公交', icon: png14},
  { label: '活动预约', icon:png15 },
]);

const communityList = ref([
  { label: '金玉路社区', description: '金玉路社区是仙桃街道下辖的一个社区。' },
  { label: '百果路社区', description: '百果路社区是仙桃街道下辖的一个社区。' },
  { label: '桂馥路社区', description: '桂馥路社区是仙桃街道下辖的一个社区。' },
  { label: '沐仙湖社区', description: '沐仙湖社区是仙桃街道下辖的一个社区。' },
  { label: '舟济路社区', description: '舟济路社区是仙桃街道下辖的一个社区。' },
  { label: '同盛路社区', description: '同盛路社区是仙桃街道下辖的一个社区。' },
  { label: '祥和路社区', description: '祥和路社区是仙桃街道下辖的一个社区。' },
  { label: '睦邻路社区', description: '睦邻路社区是仙桃街道下辖的一个社区。' },
  { label: '兰馨路社区', description: '兰馨路社区是仙桃街道下辖的一个社区。' },
  { label: '花石社区', description: '花石社区是仙桃街道下辖的一个社区。' },
  { label: '黄山社区', description: '黄山社区是仙桃街道下辖的一个社区。' },
]);

const streetDialogVisible = ref(false);
const communityDialogVisible = ref(false);
const selectedCommunity = ref(null);

const openStreetDialog = () => {
  streetDialogVisible.value = true;
};

const openCommunityDialog = (community) => {
  selectedCommunity.value = community;
  communityDialogVisible.value = true;
};

const goToService = (item) => {
  if (item.route === 'generic-service') {
    router.push({
      name: 'GenericService',
      params: {
        serviceName: item.serviceName, // 使用英文 serviceName
      },
      query: {
        serviceData: JSON.stringify(item.serviceData),
      },
    });
  } else {
    router.push('/' + item.route);
  }
};
</script>

<style scoped>
.main{
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}
</style>
