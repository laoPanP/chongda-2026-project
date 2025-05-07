<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <div class="tabbar-left-icon ml16" @click="toggleSidebar">
        <el-icon size="20">
          <component :is="layoutStore.collapse ? 'Expand' : 'Fold'"></component>
        </el-icon>
      </div>
      <!-- 左侧面包屑 -->
      <div class="ml8">
        <el-breadcrumb separator-icon="ArrowRight">
          <el-breadcrumb-item
            v-for="(item, index) in $route.matched"
            :key="item.path"
            :to="item.path"
            v-show="item.meta.title"
          >
            <el-icon style="margin: 0 2px">
              <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tabbar-right mr16">
      <el-button icon="Refresh" circle />
      <el-button icon="FullScreen" circle />
      <el-button icon="Setting" circle />
    </div>
  </div>
</template>

<script setup lang="ts" name="pageTab">
  import useLayoutStore from '@/store/modules/setting'
  import { useRoute } from 'vue-router'
  // 或者layout相关配置仓库
  let layoutStore = useLayoutStore()
  // 获取路由对象
  let $route = useRoute()
  //是否展开
  const toggleSidebar = () => {
    layoutStore.changeCollapse()
  }
</script>

<style scoped lang="scss">
  .tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .tabbar-left {
      display: flex;
      align-items: center;
      justify-content: center;
      .tabbar-left-icon {
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
    }
    .tabbar-right {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
