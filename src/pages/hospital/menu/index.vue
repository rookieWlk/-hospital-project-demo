<template>
  <div>
      <el-menu default-active="1" class="el-menu-vertical-demo hospitalMenu">
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <document />
          </el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <setting />
          </el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.hospitalMenu {
  position: fixed;
  top: 90px;
}
</style>
