function createUserList() {
  return [
    {
      userId: 1,
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '123456',
      desc: '系统管理员',
      roles: ['系统管理员'],
      roleCodes: ['systemManager'],
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
      roleCodes: ['planManager'],
      buttons: ['curser.detail', 'curser.user'],
      routes: ['home'],
      token: 'system-token',
      createTime: '2021-01-01 00:00:00',
      updateTime: '2021-01-06 00:00:00'
    }
  ]
}
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
      //如果有返回成功信息
      return { code: 200, data: checkUser, message: '成功' }
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

      // 校验：如果用户是 admin，必须包含 systemManager 角色
      if (user.username === 'admin') {
        if (!roleCodes?.includes('systemManager')) {
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
  }
]
