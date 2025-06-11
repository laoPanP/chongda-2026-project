import { mount } from '@vue/test-utils'
import Login from './index.vue'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import { ElNotification, ElInput } from 'element-plus'
import ElementPlus from 'element-plus'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
// 全局注册 Element Plus 组件
// 测试读取的组件是ElButton这样的，而源码可以使用el-
import { config } from '@vue/test-utils'
config.global.plugins = [ElementPlus]

// 单元测试内容：
// 一、组件测试：
// 1. 渲染测试：验证组件是否能正确渲染（slot,v-if/v-show）
// 2. Props测试：测试组件接收props后的行为、测试默认props值、测试props验证逻辑
// 3. 事件测试：测试组件是否触发了正确的事件、测试事件携带的数据是否正确
// 4. 用户交互测试：测试点击、输入等用户交互后的组件行为、测试表单组件的双向绑定
// 二、组合式API测试：
// 1. Composable函数测试：测试自定义hook / composable函数的返回值、测试响应式数据的更新、测试副作用(如watch、生命周期钩子)
// 2. Pinia / Vuex Store测试：测试state、getters、actions / mutations、测试store模块间的交互
// 三、工具函数测试：
// 测试纯工具函数(无副作用的函数)、测试数据处理逻辑、测试验证函数
// 四、路由测试
// 测试导航守卫、测试路由匹配、测试路由参数处理
// 五、API调用测试
// 测试API请求函数、测试错误处理、使用mock模拟API响应

// 模拟Vue Router
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn() //捕获导航请求，并验证目标路径
  }))
}))

// 模拟Element Plus通知
vi.mock('element-plus', async () => {
  // importActual用于在模拟（mock）模块时保留原始模块的实际实现。它的核心作用是让你在自定义 mock 实现时，可以选择性地只覆盖部分功能，而其他部分保持原有行为。
  const actual = await vi.importActual('element-plus')
  return {
    ...actual,
    // 这里仅模拟了ElNotification组件，其余组件保持原样
    ElNotification: vi.fn()
  }
})

// 模拟Pinia store
vi.mock('@/store/modules/user', () => ({
  default: vi.fn(() => ({
    useUserStore: vi.fn(() => ({
      userLogin: vi.fn()
    }))
  }))
}))

describe('Login.vue', () => {
  // 初始化模拟函数
  const mockUserLogin = vi.fn()
  const mockRouterPush = vi.fn()
  const mockRoute = { query: {} }

  beforeEach(() => {
    // 重置所有模拟
    vi.resetAllMocks()

    // 设置默认模拟实现
    ;(useUserStore as any).mockImplementation(() => ({
      userLogin: mockUserLogin
    }))
    ;(useRouter as any).mockImplementation(() => ({
      push: mockRouterPush
    }))
    ;(useRoute as any).mockImplementation(() => mockRoute)
  })

  test('组件渲染正常', () => {
    const wrapper = mount(Login)
    expect(wrapper.find('h1').text()).toBe('欢迎您！')
    expect(wrapper.find('h2').text()).toBe('欢迎来到Vue3测试模板项目')
  })

  describe('表单验证', () => {
    test('用户名验证', async () => {
      const wrapper = mount(Login, {
        attachTo: document.body // 重要：让组件挂载到真实DOM
      })
      // expect(wrapper.vm.rules.username).toContainEqual({ required: true, message: '请输入用户名', trigger: 'blur' })
      const formRef = wrapper.vm.getFormRef()
      const allInputs = wrapper.findAllComponents(ElInput) // 返回数组
      await allInputs[0].setValue('') // 用户名输入框
      await allInputs[0].trigger('blur') // 确保触发 v-model
      await allInputs[1].setValue('') // 密码输入框
      // 触发验证（如 blur 事件）
      await allInputs[1].trigger('blur')
      await wrapper.vm.$nextTick() // 等待 DOM 更新
      await wrapper.vm.$forceUpdate()
      await new Promise((resolve) => setTimeout(resolve, 2000)) // 比1000ms更合理
      const validateResult = await formRef.validate().catch((e: any) => e)
      console.log('2', validateResult)
      // console.log('2', wrapper.vm.loginForm.username) // 检查数据层是否更新
      // console.log('3', wrapper.vm.loginForm.password) // 检查数据层是否更新
      expect(wrapper.find('.el-form-item__error').text()).toContain('请输入用户名')

      // 测试长度过短
      // await usernameInput.setValue('ab')
      // await wrapper.find('form').trigger('submit')
      // expect(wrapper.find('.el-form-item__error').text()).toContain('长度在 3 到 10 个字符')

      // 测试长度过长
      // await usernameInput.setValue('abcdefghijk')
      // await wrapper.find('form').trigger('submit')
      // expect(wrapper.find('.el-form-item__error').text()).toContain('长度在 3 到 10 个字符')

      // 测试有效输入
      // await usernameInput.setValue('validuser')
      // await wrapper.find('form').trigger('submit')
      // expect(wrapper.find('.el-form-item__error').exists()).toBe(false)
    })

    test.skip('密码验证', async () => {
      const wrapper = mount(Login)
      const passwordInput = wrapper.find('input[type="password"]')

      // 测试必填
      await passwordInput.setValue('')
      await wrapper.find('form').trigger('submit')
      expect(wrapper.find('.el-form-item__error').text()).toBe('请输入密码')

      // 测试长度过短
      await passwordInput.setValue('12345')
      await wrapper.find('form').trigger('submit')
      expect(wrapper.find('.el-form-item__error').text()).toContain('密码长度在 6 到 15 位')

      // 测试长度过长
      await passwordInput.setValue('1234567890123456')
      await wrapper.find('form').trigger('submit')
      expect(wrapper.find('.el-form-item__error').text()).toContain('密码长度在 6 到 15 位')

      // 测试有效输入
      await passwordInput.setValue('validpass')
      await wrapper.find('form').trigger('submit')
      expect(wrapper.find('.el-form-item__error').exists()).toBe(false)
    })
  })

  describe.skip('登录功能', () => {
    test('成功登录', async () => {
      mockUserLogin.mockResolvedValue(true)
      const wrapper = mount(Login)

      // 设置有效输入
      await wrapper.find('input[type="text"]').setValue('validuser')
      await wrapper.find('input[type="password"]').setValue('validpass')
      await wrapper.find('form').trigger('submit')

      // 验证loading状态
      expect(wrapper.find('.login-btn').classes()).toContain('is-loading')

      // 等待异步操作完成
      await new Promise((resolve) => setTimeout(resolve, 0))

      // 验证store调用
      expect(mockUserLogin).toHaveBeenCalledWith({
        username: 'validuser',
        password: 'validpass'
      })

      // 验证路由跳转
      expect(mockRouterPush).toHaveBeenCalledWith({ path: '/' })

      // 验证通知显示
      expect(ElNotification).toHaveBeenCalled()

      // 验证loading状态重置
      expect(wrapper.find('.login-btn').classes()).not.toContain('is-loading')
    })

    test('登录失败', async () => {
      mockUserLogin.mockRejectedValue(new Error('登录失败'))
      const wrapper = mount(Login)

      await wrapper.find('input[type="text"]').setValue('validuser')
      await wrapper.find('input[type="password"]').setValue('validpass')
      await wrapper.find('form').trigger('submit')

      await new Promise((resolve) => setTimeout(resolve, 0))

      // 验证loading状态重置
      expect(wrapper.find('.login-btn').classes()).not.toContain('is-loading')
    })

    test('带重定向的登录', async () => {
      mockUserLogin.mockResolvedValue(true)
      ;(useRoute as any).mockImplementation(() => ({
        query: { redirect: '/dashboard' }
      }))

      const wrapper = mount(Login)
      await wrapper.find('input[type="text"]').setValue('validuser')
      await wrapper.find('input[type="password"]').setValue('validpass')
      await wrapper.find('form').trigger('submit')

      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(mockRouterPush).toHaveBeenCalledWith({ path: '/dashboard' })
    })
  })

  describe.skip('getTime函数', () => {
    test('返回正确的问候语', () => {
      const wrapper = mount(Login)
      const vm = wrapper.vm as any

      // 测试不同时间段的问候语
      const testCases = [
        { hour: 3, expected: '凌晨好！' },
        { hour: 6, expected: '早上好！' },
        { hour: 9, expected: '上午好！' },
        { hour: 12, expected: '中午好！' },
        { hour: 14, expected: '下午好！' },
        { hour: 18, expected: '晚上好！' },
        { hour: 23, expected: '晚上好！' }
      ]

      testCases.forEach(({ hour, expected }) => {
        vi.spyOn(global.Date.prototype, 'getHours').mockReturnValue(hour)
        expect(vm.getTime()).toBe(expected)
      })
    })
  })
})
