<template>
  <div class="head">
    <div class="content">
      <!-- 左侧 -->
      <div class="content-left" style="align-items: center;">
        <img class="leftImg" src="../../assets/image/logo.png" alt="">
        <p class="leftTitle">美利坚人民医院挂号平台</p>
      </div>
      <!-- 右侧 -->
      <div class="content-right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>
.head {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
  display: flex;
  justify-content: center;

  .content {
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;

    .content-left {
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;

      .leftImg {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        cursor: pointer;
      }

      .leftTitle {
        font-weight: 500;
        color: #4490f1;
        cursor: pointer;
      }
    }

    .content-right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #666666;

      .help {
        margin-right: 25px;
        cursor: pointer;
      }

      .login {
        cursor: pointer;
      }
    }
  }
}
</style>
