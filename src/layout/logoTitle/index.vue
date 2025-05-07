<template>
  <!-- 注：标题过长请自行调整字体大小或者左侧菜单栏宽度（variable.scss全局样式控制） -->
  <div class="layout-logo">
    <svg-icon v-if="setting.logoHidden" :name="setting.logo" width="25px" height="25px"></svg-icon>
    <div class="layout-logo-text">{{ setting.title || '请配置标题' }}</div>
  </div>
</template>

<script setup lang="ts">
  import setting from '@/setting'
</script>

<style scoped lang="scss">
  .layout-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: $base-logoTitle-fontSize;
    color: #fff;
    .layout-logo-text {
      margin-left: 10px;
      //超过显示省略号
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
