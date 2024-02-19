<template>
  <div class="hospitalRegion">
    <div class="content">
      <div class="left">地区：</div>
      <ul class="region">
        <li>全部</li>
        <li>东城区</li>
        <li>西城区</li>
        <li>朝阳区</li>
        <li>丰台区</li>
        <li>石景山区</li>
        <li>海淀区</li>
        <li>门头沟区</li>
        <li>房山区</li>
        <li>通州区</li>
        <li>顺义区</li>
        <li>昌平区</li>
        <li>大兴区</li>
        <li>平谷区</li>
        <li>怀柔区</li>
        <li>密云区</li>
        <li>延庆区</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="scss">
.hospitalRegion {
  margin: 15px 0;
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      width: 56px;
      color: #999999;
      margin-right: 20px;
    }

    .region {
      display: flex;
      flex-wrap: wrap;

      li {
        color: #666;
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 15px;
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
