<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-from class="login-from-box">
          <h1>欢迎您！</h1>
          <h2>欢迎来到Vue3测试模板项目</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" type="password" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary">登录</el-button>
          </el-form-item>
        </el-from>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="login">
  import { User, Lock } from '@element-plus/icons-vue'
  import { reactive } from 'vue'
  //收集账号与密码数据
  let loginForm = reactive({
    username: '',
    password: ''
  })
</script>

<style lang="scss">
  .login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/login_bg.png') no-repeat;
    background-size: cover;
    .login-from-box {
      display: inline-block;
      position: relative;
      width: 50%;
      top: 30vh;
      left: 25%;
      background-color: rgba(176, 196, 222, 0.4);
      border-radius: 6px;
      padding: 40px;
      h1 {
        color: white;
        font-size: 40px;
      }
      h2 {
        font-size: 20px;
        color: white;
        margin: 20px 0;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
