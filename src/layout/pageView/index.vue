<template>
  <div class="page_view">
    <el-card>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <!-- 二级页面渲染 -->
          <component :is="Component" v-if="flag" />
        </transition>
      </router-view>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="pageView">
  import { watch, ref, nextTick } from 'vue'
  import useLayoutStore from '@/store/modules/setting'
  // 获取layout相关配置仓库
  let layoutStore = useLayoutStore()
  let flag = ref(true)

  // 监听refsh是否发生边变化
  watch(
    () => layoutStore.refsh,
    () => {
      flag.value = false
      nextTick(() => {
        flag.value = true
      })
    }
  )
</script>

<style scoped lang="scss">
  .fade-enter-from {
    opacity: 0;
    transform: scale(0);
  }
  .fade-enter-active {
    transition: all 0.5s;
  }

  .fade-enter-to {
    opacity: 1;
    transform: scale(1);
    /* transform: rotate(360deg); */
  }
  .page_view {
    background-color: $base-view-page-color;
    border-radius: 6px;
  }
</style>
