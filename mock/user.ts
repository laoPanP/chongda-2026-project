function createUserList() {
  return [
    {
      userId: 1,
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '123456',
      desc: '系统管理员',
      roles: ['系统管理员'],
      roleCodes: ['system_manager'],
      buttons: ['curser.detail'],
      routes: ['home'],
      token: 'admin-token',
      createTime: '2021-01-01 00:00:00',
      updateTime: '2021-01-06 00:00:00'
    },
    {
      userId: 2,
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '123456',
      desc: '平台管理员',
      roles: ['平台管理员'],
      roleCodes: ['plan_manager'],
      buttons: ['curser.detail', 'curser.user'],
      routes: ['home'],
      token: 'system-token',
      createTime: '2021-01-01 00:00:00',
      updateTime: '2021-01-06 00:00:00'
    }
  ]
}
let roleList = [
  {
    roleId: 1,
    roleCode: 'system_manager',
    roleName: '系统管理员',
    description: '拥有系统所有权限',
    menuIdList: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    createTime: '2025-01-01 00:00:00',
    updateTime: '2025-01-01 00:00:00'
  },
  {
    roleId: 2,
    roleCode: 'plan_manager',
    roleName: '平台管理员',
    menuIdList: [2],
    description: '管理内容发布',
    createTime: '2025-01-02 00:00:00',
    updateTime: '2025-01-02 00:00:00'
  },
  {
    roleId: 3,
    roleCode: 'defaultUser',
    roleName: '普通用户',
    menuIdList: [2],
    description: '默认角色',
    createTime: '2025-01-02 00:00:00',
    updateTime: '2025-01-02 00:00:00'
  },
  {
    roleId: 4,
    roleCode: 'order_manager',
    roleName: '订单管理员',
    menuIdList: [],
    description: '处理订单相关',
    createTime: '2025-01-04 00:00:00',
    updateTime: '2025-01-04 00:00:00'
  },
  {
    roleId: 5,
    roleCode: 'data_analyst',
    roleName: '数据分析师',
    menuIdList: [],
    description: '查看系统数据报表',
    createTime: '2025-01-05 00:00:00',
    updateTime: '2025-01-05 00:00:00'
  },
  {
    roleId: 6,
    roleCode: 'audit_admin',
    roleName: '审计管理员',
    menuIdList: [],
    description: '系统操作审计',
    createTime: '2025-01-06 00:00:00',
    updateTime: '2025-01-06 00:00:00'
  },
  {
    roleId: 7,
    roleCode: 'customer_service',
    roleName: '客服专员',
    menuIdList: [],
    description: '处理客户咨询',
    createTime: '2025-01-07 00:00:00',
    updateTime: '2025-01-07 00:00:00'
  },
  {
    roleId: 8,
    roleCode: 'financial_manager',
    roleName: '财务管理员',
    menuIdList: [],
    description: '财务相关操作',
    createTime: '2025-01-08 00:00:00',
    updateTime: '2025-01-08 00:00:00'
  },
  {
    roleId: 9,
    roleCode: 'marketing_manager',
    roleName: '市场运营',
    menuIdList: [],
    description: '市场活动管理',
    createTime: '2025-01-09 00:00:00',
    updateTime: '2025-01-09 00:00:00'
  },
  {
    roleId: 10,
    roleCode: 'developer',
    roleName: '开发人员',
    menuIdList: [],
    description: '系统开发权限',
    createTime: '2025-01-10 00:00:00',
    updateTime: '2025-01-10 00:00:00'
  },
  {
    roleId: 11,
    roleCode: 'ope_manager',
    roleName: '运营管理员',
    menuIdList: [],
    description: '运营权限',
    createTime: '2025-01-11 00:00:00',
    updateTime: '2025-01-11 00:00:00'
  },
  {
    roleId: 12,
    roleCode: 'user_manager',
    roleName: '用户管理员',
    description: '管理用户账号',
    menuIdList: [],
    createTime: '2025-01-03 00:00:00',
    updateTime: '2025-01-03 00:00:00'
  }
]
let menuList = [
  {
    id: 1,
    createTime: '2025-01-01 00:00:00',
    updateTime: '2025-01-01 00:00:00',
    name: '全部数据',
    parentId: 0,
    code: '',
    type: 0,
    isOpen: false,
    status: null,
    level: 0,
    children: [
      {
        id: 2,
        createTime: '2025-01-01 00:00:00',
        updateTime: '2025-01-01 00:00:00',
        name: '数据大屏',
        code: 'viewDataScreen',
        parentId: 1,
        type: 1,
        isOpen: true,
        status: null,
        level: 1,
        children: []
      },
      {
        id: 3,
        createTime: '2025-01-01 00:00:00',
        updateTime: '2025-01-01 00:00:00',
        name: '权限管理',
        parentId: 1,
        code: 'authManage',
        type: 1,
        isOpen: false,
        status: null,
        level: 1,
        children: [
          {
            id: 4,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: '用户管理',
            parentId: 3,
            code: 'userManage',
            type: 2,
            isOpen: false,
            status: null,
            level: 2,
            children: [
              {
                id: 5,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '新增',
                parentId: 4,
                code: 'authManage.userManage.add',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 6,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '修改',
                parentId: 4,
                code: 'authManage.userManage.change',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 7,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '删除',
                parentId: 4,
                code: 'authManage.userManage.delete',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 8,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '角色分配',
                parentId: 4,
                code: 'authManage.userManage.allocation',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              }
            ]
          },
          {
            id: 9,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: '角色管理',
            code: 'roleManage',
            type: 2,
            parentId: 3,
            isOpen: false,
            status: null,
            level: 2,
            children: [
              {
                id: 10,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '新增',
                code: 'authManage.roleManage.add',
                parentId: 9,
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 11,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '修改',
                parentId: 9,
                code: 'authManage.roleManage.change',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 12,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '删除',
                parentId: 9,
                code: 'authManage.roleManage.delete',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 13,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '权限分配',
                code: 'authManage.roleManage.auth',
                type: 3,
                parentId: 9,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              }
            ]
          },
          {
            id: 14,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: '菜单管理',
            code: 'menuManage',
            type: 2,
            parentId: 3,
            isOpen: false,
            status: null,
            level: 2,
            children: [
              {
                id: 15,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '新增',
                code: 'authManage.menuManage.add',
                parentId: 14,
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 16,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '修改',
                parentId: 14,
                code: 'authManage.menuManage.change',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 17,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '删除',
                parentId: 14,
                code: 'authManage.menuManage.delete',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 18,
        createTime: '2025-01-01 00:00:00',
        updateTime: '2025-01-01 00:00:00',
        name: '商品管理',
        parentId: 1,
        code: 'commodityManage',
        type: 1,
        isOpen: false,
        status: null,
        level: 1,
        children: [
          {
            id: 19,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: '品牌管理',
            parentId: 18,
            code: 'brandManage',
            type: 2,
            isOpen: false,
            status: null,
            level: 2,
            children: [
              {
                id: 20,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '新增',
                parentId: 19,
                code: 'commodityManage.brandManage.add',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 21,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '修改',
                parentId: 19,
                code: 'commodityManage.brandManage.change',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 22,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '删除',
                parentId: 19,
                code: 'commodityManage.brandManage.delete',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              }
            ]
          },
          {
            id: 23,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: '属性管理',
            code: 'attrManage',
            type: 2,
            parentId: 18,
            isOpen: false,
            status: null,
            level: 2,
            children: [
              {
                id: 24,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '新增',
                code: 'commodityManage.attrManage.add',
                parentId: 23,
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 25,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '修改',
                parentId: 23,
                code: 'commodityManage.attrManage.change',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              },
              {
                id: 26,
                createTime: '2025-01-01 00:00:00',
                updateTime: '2025-01-01 00:00:00',
                name: '删除',
                parentId: 23,
                code: 'commodityManage.attrManage.delete',
                type: 3,
                isOpen: false,
                status: null,
                level: 3,
                children: []
              }
            ]
          },
          {
            id: 27,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: 'SPU管理',
            code: 'spuManage',
            type: 2,
            parentId: 18,
            isOpen: false,
            status: null,
            level: 2,
            children: []
          },
          {
            id: 28,
            createTime: '2025-01-01 00:00:00',
            updateTime: '2025-01-01 00:00:00',
            name: 'SKU管理',
            code: 'skuManage',
            type: 2,
            parentId: 18,
            isOpen: false,
            status: null,
            level: 2,
            children: []
          }
        ]
      }
    ]
  }
]
// 辅助函数：获取当前格式化的时间
function getCurrentFormattedTime() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
// 根据ID查找菜单
function findMenuById(menus, id) {
  for (const menu of menus) {
    if (menu.id === id) return menu
    if (menu.children && menu.children.length) {
      const found = findMenuById(menu.children, id)
      if (found) return found
    }
  }
  return null
}

// 查找菜单及其父级
function findMenuAndParent(menus, id, parent = null) {
  for (const menu of menus) {
    if (menu.id === id) return { menu, parent }
    if (menu.children && menu.children.length) {
      const found = findMenuAndParent(menu.children, id, menu)
      if (found.menu) return found
    }
  }
  return { menu: null, parent: null }
}

// 检查编码是否已存在
function checkCodeExists(menus, code, excludeId = null) {
  for (const menu of menus) {
    if (menu.id !== excludeId && menu.code === code) return true
    if (menu.children && menu.children.length) {
      if (checkCodeExists(menu.children, code, excludeId)) return true
    }
  }
  return false
}

// 获取所有菜单ID
function getAllMenuIds(menus) {
  let ids = []
  for (const menu of menus) {
    ids.push(menu.id)
    if (menu.children && menu.children.length) {
      ids = ids.concat(getAllMenuIds(menu.children))
    }
  }
  return ids
}

// 根据父级类型确定子级类型
function getChildType(parentId) {
  const parent = findMenuById(menuList, parentId)
  if (!parent) return 1
  return parent.type + 1
}
// 模拟数据库存储
let userList = createUserList()
export default [
  //用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = userList.find((item) => item.username === username && item.password === password)
      //没有用户返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          message: '账号或者密码不正确',
          data: ''
        }
      }
      //如果有返回成功信息
      const { token } = checkUser
      return { code: 200, data: token, message: '成功' }
    }
  },
  //获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      //获取请求头携带token
      const token = request.headers.token
      //查看用户信息是否包含有次token用户
      const checkUser = userList.find((item) => item.token === token)
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: '失败', message: '获取用户信息失败' }
      }
      // 1. 根据roleCodes获取所有角色
      const userRoles = roleList.filter((role) => checkUser.roleCodes.includes(role.roleCode))

      // 2. 获取所有menuId (去重)
      const allMenuIds = [...new Set(userRoles.flatMap((role) => role.menuIdList))]

      // 3. 在menuList中查找所有匹配的菜单项
      const matchedMenus = []
      const findMenusByIds = (menus, ids) => {
        for (const menu of menus) {
          if (ids.includes(menu.id)) {
            matchedMenus.push(menu)
          }
          if (menu.children && menu.children.length) {
            findMenusByIds(menu.children, ids)
          }
        }
      }
      findMenusByIds(menuList, allMenuIds)

      // 4. 处理routes和buttons
      const routes = matchedMenus
        .filter((menu) => menu.type === 1 || menu.type === 2)
        .map((menu) => menu.code)
        .filter((code) => code)
      const buttons = matchedMenus
        .filter((menu) => menu.type === 3)
        .map((menu) => menu.code)
        .filter((code) => code)
      let userInfo = {
        ...checkUser,
        routes,
        buttons
      }
      //如果有返回成功信息
      return { code: 200, data: userInfo, message: '成功' }
    }
  },
  //退出登录
  {
    url: '/api/user/logout',
    method: 'post',
    response: (request) => {
      // 测试没有token退出登录接口报错
      //获取请求头携带token
      const token = request.headers.token
      //查看用户信息是否包含有次token用户
      const checkUser = userList.find((item) => item.token === token)
      if (!checkUser) {
        return { code: 201, data: '失败', message: '退出登录失败' }
      }
      //如果有返回成功信息
      return { code: 200, data: '', message: '成功' }
    }
  },
  // 用户列表查询（带分页）
  {
    url: '/api/user/list',
    method: 'get',
    response: (request) => {
      // 获取分页参数，默认值：pageNum=1, pageSize=10
      const { pageNo = 1, pageSize = 10, username } = request.query

      // 过滤敏感信息
      let safeUserList = userList.map((user) => {
        const { token, ...rest } = user
        return rest
      })
      if (username && typeof username === 'string') {
        safeUserList = safeUserList.filter((item) => item.username.includes(username.trim()))
      }

      // 计算分页数据
      const total = safeUserList.length
      const startIndex = (pageNo - 1) * pageSize
      const endIndex = pageNo * pageSize
      const pageData = safeUserList.slice(startIndex, endIndex)

      return {
        code: 200,
        data: {
          list: pageData,
          total,
          pageNo,
          pageSize
        },
        message: '成功'
      }
    }
  },
  // 新增用户
  {
    url: '/api/user/add',
    method: 'post',
    response: ({ body }) => {
      const { username, password, desc } = body

      // 检查用户名是否已存在
      const exists = userList.some((user) => user.username === username)
      if (exists) {
        return { code: 201, data: null, message: '用户名已存在' }
      }

      // 生成新用户ID
      const newUserId = Math.max(...userList.map((user) => user.userId)) + 1

      const newUser = {
        userId: newUserId,
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        username,
        password,
        desc: desc || '普通用户',
        roles: ['普通用户'],
        roleCodes: ['defaultUser'],
        buttons: [],
        routes: ['home'],
        token: `user-${newUserId}-token`,
        createTime: getCurrentFormattedTime(),
        updateTime: ''
      }

      userList.push(newUser)
      return {
        code: 200,
        data: {
          userId: newUserId
        },
        message: '用户添加成功'
      }
    }
  },
  // 修改用户信息
  {
    url: '/api/user/update/:userId',
    method: 'put',
    response: (request) => {
      const { userId } = request.query
      const { username, password, desc } = request.body
      // 查找要修改的用户
      const userIndex = userList.findIndex((user) => user.userId === parseInt(userId))
      if (userIndex === -1) {
        return { code: 201, data: null, message: '用户不存在' }
      }

      // 检查新用户名是否已被其他用户使用
      // 3. 只有当提供了新用户名且与当前用户名不同时，才检查冲突
      const currentUser = userList[userIndex]
      if (username && username !== currentUser.username) {
        const usernameExists = userList.some(
          (user) => user.username === username // 只需要检查用户名是否已存在
        )

        if (usernameExists) {
          return {
            code: 409,
            data: null,
            message: '用户名已被其他用户使用'
          }
        }
      }

      // 更新用户信息
      userList[userIndex] = {
        ...userList[userIndex],
        username: username || userList[userIndex].username,
        password: password || userList[userIndex].password,
        desc: desc || userList[userIndex].desc,
        updateTime: getCurrentFormattedTime()
      }

      return {
        code: 200,
        data: null,
        message: '用户信息更新成功'
      }
    }
  },
  // 分配用户角色
  {
    url: '/api/user/allocation/:userId',
    method: 'put',
    response: (request) => {
      const { userId } = request.query
      const { roleCodes, roles } = request.body
      // 查找要修改的用户
      const userIndex = userList.findIndex((user) => user.userId === parseInt(userId))
      if (userIndex === -1) {
        return { code: 201, data: null, message: '用户不存在' }
      }
      const user = userList[userIndex]

      // 校验：如果用户是 admin，必须包含 system_manager 角色
      if (user.username === 'admin') {
        if (!roleCodes?.includes('system_manager')) {
          return {
            code: 400,
            data: null,
            message: 'admin 用户必须拥有系统管理员角色'
          }
        }
      }

      // 更新用户信息
      userList[userIndex] = {
        ...userList[userIndex],
        roleCodes: roleCodes || userList[userIndex].roleCodes,
        roles: roles || userList[userIndex].roles
      }

      return {
        code: 200,
        data: null,
        message: '分配角色成功'
      }
    }
  },
  // 批量删除用户
  {
    url: '/api/user/batchDelete',
    method: 'post',
    response: ({ body }) => {
      const { userIds } = body // 接收用户ID数组

      // 验证参数是否为数组且不为空
      if (!Array.isArray(userIds)) {
        return {
          code: 400,
          data: null,
          message: '参数格式错误，请提供用户ID数组'
        }
      }

      if (userIds.length === 0) {
        return {
          code: 400,
          data: null,
          message: '用户ID列表不能为空'
        }
      }

      // 检查所有用户是否存在
      const notFoundIds = userIds.filter((id) => !userList.some((user) => user.userId === id))

      if (notFoundIds.length > 0) {
        return {
          code: 201,
          data: { notFoundIds },
          message: `以下用户不存在: ${notFoundIds.join(', ')}`
        }
      }

      // 检查是否包含admin用户
      const adminUsers = userList.filter((user) => userIds.includes(user.userId) && user.username === 'admin')

      if (adminUsers.length > 0) {
        const adminIds = adminUsers.map((user) => user.userId)
        return {
          code: 201,
          data: { adminIds },
          message: `不允许删除管理员账号: ${adminIds.join(', ')}`
        }
      }

      // 执行批量删除
      const originalCount = userList.length
      userList = userList.filter((user) => !userIds.includes(user.userId))
      const deletedCount = originalCount - userList.length

      return {
        code: 200,
        data: {
          deletedCount,
          successIds: userIds.filter(
            (id) => !notFoundIds.includes(id) && !adminUsers.some((admin) => admin.userId === id)
          )
        },
        message: `成功删除 ${deletedCount} 个用户`
      }
    }
  },
  // 角色列表查询（带分页）
  {
    url: '/api/role/list',
    method: 'get',
    response: (request) => {
      try {
        const {
          pageNo = 1,
          pageSize = 10,
          roleName,
          roleCode,
          roleCodes // 新增：支持多个角色编码查询
        } = request.query

        // 特殊处理：pageNo = -1 时返回全部数据
        if (parseInt(pageNo) === -1) {
          // 如果有批量查询条件，先进行筛选
          let resultList = [...roleList]

          // 批量编码查询处理
          if (roleCodes) {
            const codesArray = Array.isArray(roleCodes) ? roleCodes : roleCodes.split(',')
            resultList = resultList.filter((item) => codesArray.includes(item.roleCode))
          }

          return {
            code: 200,
            message: '成功',
            data: {
              list: resultList,
              total: resultList.length,
              page: 1,
              pageSize: resultList.length
            }
          }
        }

        // 正常分页处理
        const pageNum = parseInt(pageNo)
        const size = parseInt(pageSize)

        if (isNaN(pageNum) || isNaN(size) || pageNum < 1 || size < 1) {
          return {
            code: 400,
            message: '参数错误: pageNo和pageSize必须是正整数',
            data: null
          }
        }

        // 数据筛选
        let filteredList = [...roleList]

        // 按角色名称筛选
        if (roleName) {
          filteredList = filteredList.filter((item) => item.roleName.includes(roleName.trim()))
        }

        // 按单个角色编码筛选
        if (roleCode) {
          filteredList = filteredList.filter((item) => item.roleCode.includes(roleCode.trim()))
        }

        // 批量编码查询处理（新增）
        if (roleCodes) {
          const codesArray = Array.isArray(roleCodes) ? roleCodes : roleCodes.split(',')
          filteredList = filteredList.filter((item) => codesArray.includes(item.roleCode))
        }

        // 分页处理
        const start = (pageNum - 1) * size
        const end = start + size
        const pageData = filteredList.slice(start, end)

        return {
          code: 200,
          message: '成功',
          data: {
            list: pageData,
            total: filteredList.length,
            page: pageNum,
            pageSize: size
          }
        }
      } catch (error) {
        console.error('查询角色列表出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },
  // 新增角色
  {
    url: '/api/role/add',
    method: 'post',
    response: (request) => {
      try {
        const newRole = request.body

        // 参数校验
        if (!newRole.roleName || !newRole.roleCode) {
          return {
            code: 400,
            message: '参数错误: 角色名称和角色编码不能为空',
            data: null
          }
        }

        // 检查角色编码是否已存在
        const codeExists = roleList.some((item) => item.roleCode === newRole.roleCode)
        if (codeExists) {
          return {
            code: 400,
            message: '角色编码已存在',
            data: null
          }
        }

        // 生成新ID
        const newId = Math.max(...roleList.map((item) => item.roleId), 0) + 1
        const now = getCurrentFormattedTime()

        const roleToAdd = {
          roleId: newId,
          roleCode: newRole.roleCode,
          roleName: newRole.roleName,
          menuIdList: [],
          description: newRole.description || '',
          createTime: now,
          updateTime: ''
        }

        // 添加到内存
        roleList.unshift(roleToAdd)

        return {
          code: 200,
          message: '创建成功',
          data: roleToAdd
        }
      } catch (error) {
        console.error('创建角色出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },

  // 修改角色
  {
    url: '/api/role/update/:roleId',
    method: 'put',
    response: (request) => {
      try {
        const { roleId } = request.query
        const updateData = request.body

        // 参数校验
        if (!roleId) {
          return {
            code: 400,
            message: '参数错误: 缺少角色ID',
            data: null
          }
        }

        const index = roleList.findIndex((item) => item.roleId == roleId)
        if (index === -1) {
          return {
            code: 404,
            message: '角色不存在',
            data: null
          }
        }

        // 检查角色编码是否重复（排除自己）
        if (updateData.roleCode) {
          const codeExists = roleList.some((item) => item.roleCode === updateData.roleCode && item.roleId != roleId)
          if (codeExists) {
            return {
              code: 400,
              message: '角色编码已存在',
              data: null
            }
          }
        }

        // 更新数据
        const updatedRole = {
          ...roleList[index],
          ...updateData,
          updateTime: getCurrentFormattedTime()
        }

        // 保存到内存
        roleList[index] = updatedRole

        return {
          code: 200,
          message: '更新成功',
          data: updatedRole
        }
      } catch (error) {
        console.error('更新角色出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },

  // 删除角色
  {
    url: '/api/role/delete/:roleId',
    method: 'delete',
    response: (request) => {
      try {
        const { roleId } = request.query

        // 参数校验
        if (!roleId) {
          return {
            code: 400,
            message: '参数错误: 缺少角色ID',
            data: null
          }
        }
        if (parseInt(roleId) === 1) {
          return {
            code: 401,
            message: '该角色不能删除',
            data: null
          }
        }

        const index = roleList.findIndex((item) => item.roleId === parseInt(roleId))
        if (index === -1) {
          return {
            code: 404,
            message: '角色不存在',
            data: null
          }
        }

        // 从内存中删除
        const [deletedRole] = roleList.splice(index, 1)

        return {
          code: 200,
          message: '删除成功',
          data: deletedRole
        }
      } catch (error) {
        console.error('删除角色出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },
  // 菜单列表查询接口
  {
    url: '/api/menu/list',
    method: 'post',
    response: ({ body }) => {
      try {
        const { ids } = body

        // 处理ids参数
        let idArray = []
        if (ids) {
          idArray = Array.isArray(ids) ? ids.map((id) => parseInt(id)) : ids.split(',').map((id) => parseInt(id))
        }

        // 情况1: 没有ids参数或ids为空数组，直接返回完整menuList
        if (!ids || idArray.length === 0) {
          return {
            code: 200,
            message: '成功',
            data: menuList
          }
        }

        // 情况2: ids有值，递归查找所有匹配的菜单项
        function findMatchedMenus(menus, targetIds) {
          let result = []
          for (const menu of menus) {
            // 如果当前菜单的id在目标ids中，添加到结果中（去掉children）
            if (targetIds.includes(menu.id)) {
              const { children, ...menuWithoutChildren } = menu
              result.push({ ...menuWithoutChildren, children: [] })
            }

            // 递归处理子菜单
            if (menu.children && menu.children.length > 0) {
              result = result.concat(findMatchedMenus(menu.children, targetIds))
            }
          }
          return result
        }

        const matchedMenus = findMatchedMenus(menuList, idArray)

        if (matchedMenus.length === 0) {
          return {
            code: 404,
            message: '未找到匹配的菜单项',
            data: []
          }
        }

        return {
          code: 200,
          message: '成功',
          data: matchedMenus
        }
      } catch (error) {
        console.error('查询菜单列表出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },
  // 菜单新增
  {
    url: '/api/menu/add',
    method: 'post',
    response: ({ body }) => {
      try {
        const { parentId, name, code, level, type } = body

        // 验证必填字段
        if (!name || !code) {
          return {
            code: 400,
            message: '菜单名称和编码不能为空'
          }
        }

        // 查找父级菜单
        let parentMenu = null
        let siblings = menuList

        if (parentId) {
          parentMenu = findMenuById(menuList, parentId)
          if (!parentMenu) {
            return {
              code: 404,
              message: '父级菜单不存在'
            }
          }
          siblings = parentMenu.children || []
        }

        // 检查code是否已存在
        if (checkCodeExists(menuList, code)) {
          return {
            code: 400,
            message: '菜单编码已存在'
          }
        }

        // 生成新ID (实际项目应该用更可靠的方式)
        const newId = Math.max(...getAllMenuIds(menuList), 0) + 1
        const now = new Date().toISOString()

        // 创建新菜单项
        const newMenu = {
          id: newId,
          createTime: getCurrentFormattedTime(),
          updateTime: '',
          name,
          parentId: parentId || 0,
          code,
          type, // 根据父级决定类型
          isOpen: false,
          status: null,
          level,
          children: []
        }

        // 添加到对应层级
        if (parentMenu) {
          parentMenu.children.push(newMenu)
        } else {
          menuList[0].children.push(newMenu) // 默认添加到根菜单下
        }

        return {
          code: 200,
          message: '新增成功',
          data: newMenu
        }
      } catch (error) {
        return {
          code: 500,
          message: '新增菜单失败',
          data: null
        }
      }
    }
  },
  //菜单修改
  {
    url: '/api/menu/update/:id',
    method: 'put',
    response: (request) => {
      try {
        const { id } = request.query
        const { name, code } = request.body

        // 验证必填字段
        if (!name || !code) {
          return {
            code: 400,
            message: '菜单名称和编码不能为空',
            data: null
          }
        }

        // 查找要修改的菜单
        const menuToUpdate = findMenuById(menuList, parseInt(id))
        if (!menuToUpdate) {
          return {
            code: 404,
            message: '菜单不存在',
            data: null
          }
        }

        // 检查code是否被其他菜单使用
        if (code !== menuToUpdate.code && checkCodeExists(menuList, code)) {
          return {
            code: 400,
            message: '菜单编码已存在',
            data: null
          }
        }

        // 更新菜单信息
        menuToUpdate.name = name
        menuToUpdate.code = code
        menuToUpdate.updateTime = getCurrentFormattedTime()

        return {
          code: 200,
          message: '修改成功',
          data: menuToUpdate
        }
      } catch (error) {
        return {
          code: 500,
          message: '修改菜单失败',
          data: null
        }
      }
    }
  },
  // 菜单删除
  {
    url: '/api/menu/delete/:id',
    method: 'delete',
    response: (request) => {
      try {
        const { id } = request.query
        const menuId = parseInt(id)

        // 不能删除根菜单
        if (menuId === 1) {
          return {
            code: 403,
            message: '不能删除根菜单',
            data: null
          }
        }

        // 查找菜单及其父级
        const { menu, parent } = findMenuAndParent(menuList, menuId)
        if (!menu) {
          return {
            code: 404,
            message: '菜单不存在',
            data: null
          }
        }

        // 检查是否有子菜单
        if (menu.children && menu.children.length > 0) {
          return {
            code: 400,
            message: '请先删除子菜单',
            data: null
          }
        }

        // 从父级中删除
        const parentChildren = parent ? parent.children : menuList[0].children
        const index = parentChildren.findIndex((item) => item.id === menuId)
        if (index !== -1) {
          parentChildren.splice(index, 1)
        }

        return {
          code: 200,
          message: '删除成功',
          data: null
        }
      } catch (error) {
        return {
          code: 500,
          message: '删除菜单失败',
          data: null
        }
      }
    }
  }
]
