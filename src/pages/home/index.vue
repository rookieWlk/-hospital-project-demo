<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 主体内容 -->
    <div class="content">
      <el-row gutter="20">
        <!-- 内容左侧部分 -->
        <el-col :span="20">
          <!-- 医院等级 -->
          <HospitalLevel></HospitalLevel>
          <!-- 医院地区 -->
          <HospitalRegion></HospitalRegion>
          <!-- 医院卡片 -->
          <HospitalCard></HospitalCard>
        </el-col>
        <!-- 内容右侧部分 -->
        <el-col :span="4">
          <!-- 常见科室 -->
          <Department></Department>
          <!-- 平台公告 -->
          <Announcement></Announcement>
          <!-- 停诊公告 -->
          <Closed></Closed>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
// 引入轮播图组件
import Carousel from './carousel/index.vue'
// 引入搜索框组件
import Search from './search/index.vue'
// 引入医院等级组件
import HospitalLevel from './hospitalLevel/index.vue'
// 引入医院地区组件
import HospitalRegion from './hospitalRegion/index.vue'
// 引入医院卡片组件
import HospitalCard from './hospitalCard/index.vue'
// 引入科室组件
import Department from './department/index.vue'
// 引入平台公告组件
import Announcement from './announcement/index.vue'
// 引入停诊公告组件
import Closed from './closed/index.vue'
</script>

<style scoped lang="scss">
.content {
  margin: 60px 0;
}
</style>
