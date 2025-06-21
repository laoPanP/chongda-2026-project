<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div>展示内容</div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="home">
import topBg from '@/views/components/topBg.vue'
import footerss from '@/views/components/footerss.vue'
</script>

<style scoped lang="scss">
.pages_content {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .fontClass {
    font-size: 20px;
    color: #fff;
  }
}
</style>
