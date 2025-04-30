<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_tabber">
      <div class="layout_left">
        <logoTitle></logoTitle>
      </div>
      <div class="layout_right">
        <div class="layout_firstTitle">
          <first-menu></first-menu>
        </div>
        <div class="layout_userInfo"></div>
      </div>
    </div>
    <!-- 主要内容展示区域 -->
    <div class="layout_content">
      <!-- 左侧菜单 -->
      <div class="layout_slider">
        <el-scrollbar class="layout_slider_scrollbar">
          <el-menu>
            <!-- 动态生成菜单 -->
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 内容展示区域 -->
      <div class="layout_main">
        <!-- 内容顶部导航栏 -->
        <div class="layout_page_tab"></div>
        <!-- 页面展示区域 -->
        <div class="layout_page_view">
          <div class="layout_page_view_content">
            <div style="background-color: aqua; height: 1300px; width: 100%">这个是内容</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import logoTitle from './logoTitle/index.vue'
  import firstMenu from './firstMenu/index.vue'
  import Menu from './Menu/index.vue'
  // 获取用户菜单数据
  import useUserStore from '@/store/modules/user'
  let userStore = useUserStore()
</script>

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
        display: flex;
        .layout_firstTitle {
          width: 80%;
          height: 100%;
        }
        .layout_userInfo {
          width: 20%;
          height: 100%;
        }
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
        .layout_slider_scrollbar {
          width: 100%;
          height: 100%;
        }
        .el-menu {
          border-right: none !important;
          background-color: transparent;
        }
      }
      .layout_main {
        flex: 1;
        .layout_page_tab {
          background-color: $base-menu-color;
          height: $base_pageTab-height;
          box-shadow: 5px 0 10px 1px rgba(0, 0, 0, 0.3);
        }
        .layout_page_view {
          height: calc(100vh - $base-header-height - $base_pageTab-height);
          width: 100%;
          background-color: $base-menu-color;
          .layout_page_view_content {
            overflow: auto;
            max-height: calc(100% - 32px);
            padding: 16px;
            border-radius: 8px;
            width: calc(100% - 32px);
            height: 100%;
            background-color: $base-page-color;
          }
        }
      }
    }
  }
</style>
