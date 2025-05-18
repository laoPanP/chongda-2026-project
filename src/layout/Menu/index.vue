<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且只有一个 -->
    <template v-else-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path" @click="goRoute">
        <el-icon><component :is="item.children[0].meta.icon" /></el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由 -->
    <template v-else>
      <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'Menu'
  })
  import { useRouter } from 'vue-router'
  let $router = useRouter()
  defineProps<{
    menuList: any[] // 使用 TypeScript 接口更规范
  }>()

  const goRoute = (item: any) => {
    $router.push(item.index)
  }
</script>

<style scoped></style>
