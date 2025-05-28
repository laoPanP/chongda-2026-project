<template>
  <el-card>
    <div class="home_div">
      <div class="home_div_icon">
        <img :src="userStore.userInfo.avatar" alt="" />
      </div>
      <div class="home_div_content ml16">
        <div class="user_name_class">{{ getTime() }}{{ userStore.userInfo?.username || '' }}</div>
        <div class="platform_name">{{ setting.title || '平台名称' }}</div>
      </div>
    </div>
  </el-card>
  <el-card class="mt16">
    <div class="card_content">
      <my-component height="100%" width="50%" borderColor="#409eff" :isTitle="false">
        <div class="home_content_page">
          <img src="@/assets/icons/logo.svg" alt="" />
        </div>
      </my-component>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="home">
  import useUserStore from '@/store/modules/user'
  import { MyComponent } from 'my-vue3-component-pxx'
  import 'my-vue3-component-pxx/dist/my-vue3-component-pxx.css'
  import setting from '@/setting'
  let userStore = useUserStore()
  const getTime = () => {
    let hour = new Date().getHours()
    if (hour < 6) {
      return '凌晨好！'
    } else if (hour < 9) {
      return '早上好！'
    } else if (hour < 12) {
      return '上午好！'
    } else if (hour < 14) {
      return '中午好！'
    } else if (hour < 18) {
      return '下午好！'
    } else {
      return '晚上好！'
    }
  }
</script>

<style scoped lang="scss">
  .home_div {
    display: flex;
    flex-direction: row;
    .home_div_icon {
      img {
        height: 200px;
        width: 200px;
        border-radius: 50%;
      }
    }
    .home_div_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .user_name_class {
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        font-weight: 600;
      }
      .platform_name {
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        opacity: 0.5;
      }
    }
  }
  .card_content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home_content_page {
    min-height: 700px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 20%;
      width: 20%;
      opacity: 0.4;
    }
  }
</style>
