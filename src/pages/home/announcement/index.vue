<template>
  <!-- 平台公告 -->
  <div class="tip">
    <img src="../../../assets/image/平台公告.png" alt="" />
    <div class="left">
      <span>平台公告</span>
    </div>
    <div class="right">
      <p>全部</p>
      <img src="../../../assets/image/right.png" alt="" />
    </div>
  </div>
  <div class="text">
    <div class="notice-wrapper">
      <div class="point"></div>
      <span>关于延长北京大学国际医院放假的通知 </span>
    </div>
    <div class="notice-wrapper">
      <div class="point"></div>
      <span>北京中医药大学东方医院部分科室医生门诊医 </span>
    </div>
    <div class="notice-wrapper">
      <div class="point"></div>
      <span>武警总医院号源暂停更新通知 </span>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.tip {
  margin: 30px 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    font-weight: 900;
    align-items: center;
    justify-content: center;
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
  text-overflow: ellipsis;

  .notice-wrapper {
    display: flex;
    align-items: center;
    margin: 15px 0 20px 15px ;

    .point {
      height: 4px;
      width: 4px;
      border-radius: 2px;
      background: #7eabff;
    }

    span {
      display: block;
      margin-left: 7px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
      width: 100%;
    }
  }

}
</style>
