<template>
  <el-row :gutter="12">
    <el-col class="colBox" :span="12" v-for="item in 16" :key="item">
      <el-card shadow="hover">
        <div class="content">
          <div class="left">
            <h1>北京人民医院</h1>
            <div class="leftBottom">
              <p>三级甲等</p>
              <p>每天12:00放号</p>
            </div>
          </div>
          <div class="right">
            <img src="../../../assets/image/bktt.jpg" alt="">
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.colBox {
  margin-bottom: 20px;
  cursor: pointer;
}

.content {
  padding: 0 10px;
  display: flex;

  .left {
    width: 60%;
    padding-right: 20px;

    h1 {
      margin: 15px 0;
    }

    .leftBottom {
      font-size: 14px;
      color: #999999;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }

  .right {
    width: 40%;
    text-align: right;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
}

:deep(.el-card__body) {
  padding: 10px;
}

:deep(.el-card) {
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  &:hover h1 {
    font-weight: 900;
  }

  &:hover img {
    /*图片放大过程的时间*/
    transition: all 0.5s;
    /*放大倍数*/
    transform: scale(1.1);
  }
}
</style>
