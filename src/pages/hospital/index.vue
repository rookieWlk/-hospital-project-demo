<template>
  <div class="hospital">
    <!-- 左侧导航部分 -->
    <el-row :gutter="20">
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <!-- 右侧内容部分 -->
      <el-col :span="20">
        <Content></Content>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
// 左侧菜单
import Menu from './menu/index.vue'
// 右侧内容
import Content from './content/index.vue'
</script>

<style scoped lang="scss"></style>
