<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_tabber">
      <div class="layout_left">这个是表头</div>
      <div class="layout_right">index</div>
    </div>
    <!-- 主要内容展示区域 -->
    <div class="layout_content">
      <!-- 左侧菜单 -->
      <div class="layout_slider">index</div>
      <!-- 内容展示区域 -->
      <div class="layout_main">
        <!-- 内容顶部导航栏 -->
        <div class="layout_page_tab"></div>
        <!-- 页面展示区域 -->
        <div class="layout_page_view">
          <div style="height: 1300px; background-color: red">这个是很长的内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .layout_container {
    width: 100%;
    height: 100vh;
    background-color: $base-page-color;
    .layout_tabber {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: $base-header-height;
      background-color: $primary-color;
      display: flex;
      .layout_left {
        width: $base-menu-width;
      }
      .layout_right {
        flex: 1;
      }
    }
    .layout_content {
      display: flex;
      padding-top: $base-header-height;
      width: 100%;
      height: calc(100vh - $base-header-height);
      .layout_slider {
        height: 100%;
        width: $base-menu-width;
        background-color: $base-menu-color;
      }
      .layout_main {
        flex: 1;
        .layout_page_tab {
          background-color: $base-menu-color;
          height: $base_pageTab-height;
          box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
        }
        .layout_page_view {
          padding: 16px;
          max-height: calc(100% - $base_pageTab-height - 32px);
          overflow: auto;
        }
      }
    }
  }
</style>
