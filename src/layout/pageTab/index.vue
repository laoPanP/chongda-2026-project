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
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path" v-show="item.meta.title">
            <el-icon style="margin: 0 2px">
              <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="tabbar-right mr16">
      <el-button icon="Refresh" @click="refshPage" circle />
      <el-button icon="FullScreen" @click="fullScreen" circle />
      <el-popover placement="bottom-end" title="主题设置" :visible="visible" :width="300" trigger="click">
        <el-form label-width="80px">
          <el-form-item label="主题">
            <el-color-picker teleported v-model="color" @change="changeColor" show-alpha :predefine="predefineColors" />
          </el-form-item>
          <el-form-item label="暗黑模式">
            <el-switch v-model="dark" @change="changeDark" inline-prompt active-icon="Check" inactive-icon="Close" />
          </el-form-item>
        </el-form>
        <template #reference>
          <el-button icon="Setting" @click="visible = !visible" circle />
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts" name="pageTab">
  import useLayoutStore from '@/store/modules/setting'
  import { ref, onMounted } from 'vue'
  import { useFullscreen } from '@/utils/fullScreen/fullScreen'
  import { useRoute } from 'vue-router'
  // 或者layout相关配置仓库
  let layoutStore = useLayoutStore()
  // 获取路由对象
  let $route = useRoute()
  const dark = ref(false)
  const visible = ref(false)
  const color = ref('rgba(255, 69, 0, 0.68)')
  const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
  ])
  //是否展开
  const toggleSidebar = () => {
    layoutStore.changeCollapse()
  }
  //刷新二级页面
  const refshPage = () => {
    layoutStore.refsh = !layoutStore.refsh
  }
  const { toggle } = useFullscreen()
  //全屏
  const fullScreen = () => {
    const pageContainer = document.documentElement as HTMLElement
    toggle(pageContainer)
    // if (!document.fullscreenElement) {
    //   document.documentElement.requestFullscreen()
    // } else {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen()
    //   }
    // }
  }
  // 切换暗黑模式
  const changeDark = () => {
    let html = document.documentElement
    dark.value ? html.classList.add('dark') : html.classList.remove('dark')
  }
  const changeColor = () => {
    // document.documentElement 是全局变量时
    const el = document.documentElement
    // const el = document.getElementById('xxx')

    // 获取 css 变量
    getComputedStyle(el).getPropertyValue(`--el-color-primary`)

    // 设置 css 变量
    el.style.setProperty('--el-color-primary', color.value)
    visible.value = false
  }
  onMounted(() => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--el-color-primary').trim()
    color.value = primaryColor
  })
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
