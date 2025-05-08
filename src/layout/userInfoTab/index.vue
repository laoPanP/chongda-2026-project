<template>
  <div class="userInfo_div mr16">
    <img :src="userStore.userInfo.avatar" alt="" />
    <el-dropdown>
      <span class="el-dropdown-link ml8">
        {{ userStore.userInfo.username || '未登录' }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts" name="userInfoTab">
  import useUserStore from '@/store/modules/user'
  import { useRouter, useRoute } from 'vue-router'
  import { ElNotification } from 'element-plus'
  let userStore = useUserStore()
  let $router = useRouter()
  let $route = useRoute()
  const logout = async () => {
    //向服务器发送请求，清除服务器端的token
    //清除仓库中用户相关数据
    // 跳转登录页面
    try {
      await userStore.logout()
      if ($route.name == 'home') {
        $router.push({ name: 'login' })
      } else {
        $router.push({ name: 'login', query: { redirect: $route.path } })
      }
    } catch (error) {
      ElNotification({
        message: (error as Error).message,
        type: 'error'
      })
    }
  }
</script>

<style scoped>
  /* 移除触发器边框 */
  :deep(.el-dropdown:focus-visible) {
    outline: none !important;
  }
  .userInfo_div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    .el-dropdown:el-dropdown {
      outline: none;
    }
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
    }
  }
</style>
