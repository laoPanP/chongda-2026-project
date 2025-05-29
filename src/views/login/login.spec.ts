import { mount } from '@vue/test-utils'
import Login from './index.vue'
import { describe, expect, test, vi, beforeEach } from 'vitest'
import { ElNotification } from 'element-plus'
import ElementPlus from 'element-plus'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

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
        global: {
          plugins: [ElementPlus]
        }
      })
      const usernameInput = wrapper.find('input[type="text"]')

      // 测试必填
      await usernameInput.setValue('')
      await wrapper.find('form').trigger('submit')
      // expect(wrapper.find('.el-form-item__error').text()).toBe('请输入用户名')

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
