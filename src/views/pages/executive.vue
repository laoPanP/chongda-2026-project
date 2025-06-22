<template>
  <div class="pages_content">
    <top-bg>
      <div class="fontClass">新时代 新格局 新成就</div>
    </top-bg>
    <div class="content_box"></div>
    <footerss></footerss>
  </div>
</template>

<script setup lang="ts" name="executive">
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
    font-size: 30px;
    color: #fff;
  }
}
</style>
