<template>
  <!-- 常见科室 -->
  <div class="tip">
    <div class="left">
      <p>常见科室</p>
    </div>
    <div class="right">
      <p>全部</p>
      <img src="../../../assets/image/right.png" alt="" />
    </div>
  </div>
  <div class="text">
    <span>神经内科</span>
    <span>消化内科</span>
    <span>呼吸内科</span>
    <span>内科</span>
    <span>神经外科</span>
    <span>妇科</span>
    <span>产科</span>
    <span>儿科</span>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.tip {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    font-weight: 900;
  }

  .right {
    display: flex;
    align-items: center;

    p {
      font-size: 14px;
      color: #999999;
    }
  }
}

.text {
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  span {
    margin: 10px 15px;
  }
}
</style>
