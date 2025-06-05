<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-from-box" :model="loginForm" :rules="rules" ref="loginFormItem">
          <h1>欢迎您！</h1>
          <h2>欢迎来到Vue3测试模板项目</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              placeholder="请输入密码"
              type="password"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login-btn" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'login'
  })
  defineExpose({
    getFormRef: () => loginFormItem.value
  })
  import { User, Lock } from '@element-plus/icons-vue'
  import { reactive, ref } from 'vue'
  import useUserStore from '@/store/modules/user'
  import { useRouter, useRoute } from 'vue-router'
  import { ElNotification } from 'element-plus'

  let $router = useRouter()
  let $route = useRoute()
  let userStore = useUserStore()
  //收集账号与密码数据
  let loginForm = reactive({
    username: '',
    password: ''
  })
  let loading = ref(false)
  let loginFormItem = ref()
  //登录
  const login = async () => {
    loginFormItem.value.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        await userStore.userLogin(loginForm)
        // 4. 处理重定向
        if ($route.query.redirect) {
          $router.push({ path: $route.query.redirect as string })
        } else {
          // 登录成功，跳转首页
          $router.push({ path: '/' })
        }
        ElNotification({
          title: `Hi,${getTime()}`,
          message: '欢迎您！',
          type: 'success'
        })
        loading.value = false
      } catch (error) {
        loading.value = false
      }
    })
  }
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
  // 自定义校验规则
  // const validatorUserName = (rule: any, value: any, callback: any) => {
  //   if (/^\d{5,10}$/.test(value)) {
  //     callback()
  //   } else {
  //     callback(new Error('请输入正确的用户名'))
  //   }
  // }
  const rules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        required: true,
        min: 3,
        max: 10,
        message: '长度在 3 到 10 个字符',
        trigger: 'change'
      }
      // {
      //   required: true,
      //   trigger: 'change',
      //   validator: validatorUserName
      // }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        required: true,
        min: 6,
        max: 15,
        message: '密码长度在 6 到 15 位',
        trigger: 'change'
      }
    ]
  }
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
