<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_tabber">
      <!-- <div class="logo mr8">
        <img
          @click="toMain"
          src="@/assets/images/cecc-logo-2022-2.png"
          alt="logo"
        />
      </div> -->
      <nav class="top-navigation">
        <a
          href="#"
          v-for="item in menuItems"
          :key="item.name"
          :class="{ active: activeMenu === item.name }"
          @click.prevent="handleMenuClick(item)"
        >
          {{ item.title
          }}<el-icon class="ml4" v-if="item.isSelect" size="12"
            ><CaretBottom
          /></el-icon>
          <!-- 下拉展示内容 -->
          <div
            class="selectInfo"
            v-if="activeMenu == item.name && item.isSelect && isShow"
          >
            <div
              class="selectItem mb8"
              v-for="(item1, index) in item.children"
              :key="index"
            >
              {{ item1.name }}
            </div>
          </div>
        </a>
      </nav>
    </div>
    <!-- 主要内容展示区域 -->
    <div class="layout_content">
      <div class="layout_main">
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
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import pageView from './pageView/index.vue'
import { reactive } from 'vue'

const router = useRouter()
const route = useRoute()

let activeMenu = ref('home')

// 监听路由变化，更新activeMenu
watch(
  () => route.path,
  (newPath) => {
    // 从路径中提取菜单名称，例如从'/steering'中提取'steering'
    const menuName = newPath.substring(1)
    if (menuName) {
      activeMenu.value = menuName
    } else {
      activeMenu.value = 'home' // 如果是根路径，默认为home
    }
  },
  { immediate: true }, // 立即执行，确保刷新时能正确设置初始状态
)

const menuItems = reactive([
  { name: 'home', title: '首页', isSelect: false },
  // { name: 'steering', title: '指导委员会', isSelect: false },
  // { name: 'executive', title: '执行委员会', isSelect: false },
  { name: 'meetingSchedule', title: '会议日程', isSelect: false },
  { name: 'guide', title: '参会指南', isSelect: false },
  // { name: 'media', title: '大会报道', isSelect: false },
  {
    name: 'past',
    title: '往期回顾',
    isSelect: true,
    children: [
      {
        name: '2025',
        toUrl: '',
      },
      {
        name: '2024',
        toUrl: '',
      },
      {
        name: '2023',
        toUrl: '',
      },
      {
        name: '2022',
        toUrl: '',
      },
    ],
  },
])
let isShow = ref(false)

const handleMenuClick = (item: any) => {
  activeMenu.value = item.name
  if (item.name != 'past') {
    isShow.value = false
    router.push({ name: item.name })
  } else {
    isShow.value = !isShow.value
  }
}
// const toMain = () => {
//   router.push({ name: 'home' })
// }
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
    background-color: #021a5b;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    .logo img {
      cursor: pointer;
      height: 56px;
    }
    .top-navigation a {
      position: relative;
      color: white;
      text-decoration: none;
      padding: 0 22px;
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 16px;
      transition: color 0.3s, border-bottom-color 0.3s;
      border-bottom: 3px solid transparent;

      &.active,
      &:hover {
        color: #fff;
        border-bottom-color: rgba(255, 255, 255, 0.6);
      }
      .selectInfo {
        position: absolute;
        top: 65px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        border-radius: 4px;
        .selectItem {
          background-image: url(../assets/images/ts_but_2022.png);
          width: 145px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.3s;
          border-radius: 4px;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  .layout_content {
    display: flex;
    padding-top: $base-header-height;
    width: 100%;
    height: calc(100vh - $base-header-height);
    .layout_main {
      width: 100%;
      .layout_page_view {
        height: calc(100vh - $base-header-height);
        width: 100%;
        background-color: $base-menu-color;
        .layout_page_view_content {
          overflow: auto;
          height: 100%;
          background-color: $base-page-color;
        }
      }
    }
  }
}
</style>
