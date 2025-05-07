<template>
  <div class="userInfo_div mr16">
    <img src="@/assets/images/login_bg.png" alt="" />
    <el-dropdown>
      <span class="el-dropdown-link ml8">
        admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts" name="userInfoTab"></script>

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
