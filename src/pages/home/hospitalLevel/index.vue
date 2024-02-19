<template>
  <div class="hospitalLevel">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="level">
        <li>全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.hospitalLevel {
  margin-bottom: 25px;
  h1 {
    font-weight: 900;
    margin-bottom: 30px;
  }

  .content {
    display: flex;

    .left {
      color: #999999;
      margin-right: 20px;
    }

    .level {
      display: flex;

      li {
        color: #666;
        font-size: 14px;
        margin-right: 20px;
        &.active {
          color: #4490f1;
        }
        &:hover {
          color: #4490f1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
