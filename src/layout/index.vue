<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_tabber">
      <div class="layout_left">
        <logoTitle></logoTitle>
      </div>
      <div class="layout_right">
        <!-- 顶部一级菜单 -->
        <div class="layout_firstTitle">
          <first-menu></first-menu>
        </div>
        <!-- 顶部用户信息 -->
        <div class="layout_userInfo">
          <userInfoTab></userInfoTab>
        </div>
      </div>
    </div>
    <!-- 主要内容展示区域 -->
    <div class="layout_content">
      <!-- 左侧菜单 -->
      <div class="layout_slider" :class="{ collapse_class: layoutStore.collapse ? true : false }">
        <el-scrollbar class="layout_slider_scrollbar">
          <el-menu :collapse="layoutStore.collapse" :default-active="$route.path">
            <!-- 动态生成菜单 -->
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 内容展示区域 -->
      <div class="layout_main">
        <!-- 内容顶部导航栏 -->
        <div class="layout_page_tab">
          <pageTab></pageTab>
        </div>
        <!-- 页面展示区域 -->
        <div class="layout_page_view">
          <div class="layout_page_view_content">
            <pageView></pageView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 获取路由对象
  import { useRoute } from 'vue-router'
  import logoTitle from './logoTitle/index.vue'
  import firstMenu from './firstMenu/index.vue'
  import Menu from './Menu/index.vue'
  import pageView from './pageView/index.vue'
  import pageTab from './pageTab/index.vue'
  import userInfoTab from './userInfoTab/index.vue'
  // 获取用户菜单数据
  import useUserStore from '@/store/modules/user'
  import useLayoutStore from '@/store/modules/setting'
  let userStore = useUserStore()
  // 或者layout相关配置仓库
  let layoutStore = useLayoutStore()
  let $route = useRoute()
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
      // background: linear-gradient(45deg, $primary-color 0%, rgb(253, 225.6, 225.6) 100%); /* 水平渐变 */
      display: flex;
      .layout_left {
        width: $base-menu-width;
      }
      .layout_right {
        flex: 1;
        display: flex;
        justify-content: space-between;
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
        transition: all 0.3s;
        .layout_slider_scrollbar {
          width: 100%;
          height: 100%;
        }
        .el-menu {
          border-right: none !important;
          background-color: transparent;
        }
        &.collapse_class {
          width: $base-menu-minWidth;
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
