<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <div class="tabbar-left-icon ml16" @click="toggleSidebar">
        <el-icon v-if="!collapse" size="20"><Expand /></el-icon>
        <el-icon v-else size="20"><Fold /></el-icon>
      </div>
      <!-- 左侧面包屑 -->
      <div class="ml8">
        <el-breadcrumb separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
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
  import { ref } from 'vue'
  //是否展开
  let collapse = ref(true)
  const toggleSidebar = () => {
    collapse.value = !collapse.value
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
