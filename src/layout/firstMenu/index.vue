<template>
  <div class="layout_menu">
    <div
      :class="{ layout_menu_item: true, layout_menu_item_choose: item.code == chooseActive }"
      v-for="item in menuList"
      :key="item.code"
    >
      <div class="layout_menu_item_content" @click="goRoute(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  let $router = useRouter()
  let menuList = reactive([{ name: '首页', code: '1' }])
  let chooseActive = ref('1')
  const goRoute = (item: any) => {
    if (item.code == 1) {
      // 登录成功，跳转首页
      $router.push({ name: 'layout' })
    }
  }
</script>

<style scoped lang="scss">
  .layout_menu {
    display: flex;
    color: #fff;
    height: 100%;
    align-items: center;
    font-size: 20px;
    .layout_menu_item {
      cursor: pointer;
      display: flex;
      height: 100%;
      width: 150px;
      align-items: center;
      text-align: center;
      .layout_menu_item_content {
        width: 100%;
        margin: 0 16px;
      }
    }
    .layout_menu_item:hover {
      background: $primary-choose-color;
    }
    .layout_menu_item_choose {
      background: $primary-choose-color;
    }
  }
</style>
