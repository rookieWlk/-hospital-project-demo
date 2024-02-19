<template>
  <div class="container">
    <!-- 头部 -->
    <HospitalHead></HospitalHead>
    <!-- 展示路由组件区域 -->
    <div class="content">
      <!-- 展示路由组件区域 -->
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <HospitalFoot></HospitalFoot>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 900px;
  }
}
</style>
