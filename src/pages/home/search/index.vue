<template>
  <div class="search">
    <el-autocomplete clearable class="inline-input w-50" placeholder="点击输入医院名称" />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>
<script setup lang="ts">
// 引入搜索icon
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  ::v-deep(.el-input__wrapper) {
    width: 800px;
    height: 50px;
    margin-right: 5px;
  }

  ::v-deep(.el-button) {
    width: 80px;
    height: 50px;
  }
}

// 笔记：css中深度选择器：1、>>>   2、/deep/  3、::v-deep（现在的vue改成了 :deep）
</style>
