<template>
  <div class="foot">
    <div class="content">
      <div class="left">
        <span>京ICP备 9999999号</span>
        <span>电话挂号110-6669996969</span>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.foot {
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  line-height: 50px;
  // 将盒子至于底部
  position: fixed;
  bottom: 0;

  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #666666;

    .left {
      span {
        margin: 0px 15px;
      }
    }

    .right {
      span {
        margin: 0px 20px;
        cursor: pointer;

        &:hover {
          color: #4490f1;
        }
      }

    }
  }
}
</style>
