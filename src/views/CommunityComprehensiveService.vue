<template>
  <el-container>
    <el-header style="text-align: center; font-size: 20px; display: flex; align-items: center; justify-content: space-between;">
      <el-button type="text" @click="goBack" style="font-size: 16px;">
        <el-icon><ArrowLeft /></el-icon>
        返回
      </el-button>
      社区综合服务
      <div></div> <!-- 占位，保持标题居中 -->
    </el-header>

    <el-main style="padding: 10px;">
      <el-card v-for="(service, index) in communityServices" :key="index" style="margin-bottom: 10px;">
        <div style="font-size: 16px; font-weight: bold;">{{ service.community }}</div>
        <div style="font-size: 12px; color: #666;">
          <span style="color: #409EFF;">{{ service.type }}</span>
          <span style="margin-left: 10px;">联系电话：{{ service.phone }}</span>
        </div>
        <div style="margin-top: 10px;">
          <el-button v-for="(item, i) in service.items" :key="i" type="primary" size="small" style="margin-right: 5px;">
            {{ item }}
          </el-button>
        </div>
        <div style="margin-top: 10px; font-size: 12px; color: #999;">{{ service.time }}</div>
        <div v-if="service.description" style="margin-top: 10px; font-size: 12px; color: #333;">{{ service.description }}</div>
      </el-card>
    </el-main>

    <!-- 移除底部导航 -->
    <!-- <el-footer style="text-align: center; padding: 0;">
      <BottomNavigation />
    </el-footer> -->
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeft } from '@element-plus/icons-vue'; // 引入返回箭头图标

const router = useRouter();

const communityServices = ref([
  {
    community: '睦邻路社区',
    type: '特色服务',
    phone: '67172434',
    items: ['燃气缴费'],
    time: '每日上午9:00-12:00下午14:00-18:00(含节假日)',
  },
  {
    community: '睦邻路社区',
    type: '特色服务',
    phone: '67172434',
    items: ['场地预约'],
    time: '-',
  },
  {
    community: '桂馥路社区',
    type: '特色服务',
    phone: '67413988',
    items: ['上门服务预约退休人员养老认证'],
    time: '每日上午9:00-12:00下午14:00-18:00(含节假日)',
  },
  {
    community: '舟济路社区',
    type: '特色服务',
    phone: '15683119553',
    items: ['燃气缴费'],
    time: '09:00 - 20:00',
  },
  {
    community: '同盛路',
    type: '特色服务',
    phone: '67386638',
    items: ['预约场地'],
    description: '预约文件活动室、残疾人康复室、心恬花开咨询室、音乐多功能室等',
  },
  {
    community: '同盛路',
    type: '特色服务',
    phone: '67386638',
    items: ['预约服务'],
    description: '预约证件办理、指纹认证、证明开具等服务',
  },
  {
    community: '同盛路',
    type: '特色服务',
    phone: '67386638',
    items: ['预约活动'],
    description: '根据发布活动和课程进行预约',
  },
]);

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
