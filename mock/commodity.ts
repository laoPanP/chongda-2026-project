// 使用全局变量实现内存持久化（页面不刷新时数据保持修改）
let brandList = [
  {
    id: 1,
    brandName: '耐克',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: 'Just Do It',
    status: 1, // 1-启用 0-禁用
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 2,
    brandName: '阿迪达斯',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: 'Impossible is Nothing',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 3,
    brandName: '苹果',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: 'Think Different',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 4,
    brandName: '小米',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '为发烧而生',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 5,
    brandName: '华为',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '构建万物互联的智能世界',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 6,
    brandName: 'OPPO',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '至美科技',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 7,
    brandName: 'VIVO',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '乐享极智',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 8,
    brandName: '三星',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: "Do What You Can't",
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 9,
    brandName: '联想',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '智慧联想 服务中国',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 10,
    brandName: '戴尔',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '激发无限',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 11,
    brandName: '惠普',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '创新科技成就梦想',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 12,
    brandName: '索尼',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: 'Make.Believe',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 13,
    brandName: '佳能',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '感动常在',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 14,
    brandName: '尼康',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '影像从心',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 15,
    brandName: '飞利浦',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '创新为你',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 16,
    brandName: '松下',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: 'Ideas for Life',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 17,
    brandName: 'LG',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: "Life's Good",
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 18,
    brandName: '美的',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '原来生活可以更美的',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 19,
    brandName: '格力',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '让世界爱上中国造',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
  },
  {
    id: 20,
    brandName: '海尔',
    brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    description: '真诚到永远',
    status: 1,
    createTime: '2025-01-25 23:59:59',
    updateTime: '2025-01-25 23:59:59'
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

export default [
  // 品牌列表查询（带分页）
  {
    url: '/api/commodity/brands',
    method: 'get',
    response: (request) => {
      try {
        // 参数校验
        const { pageNo = 1, pageSize = 10, brandName, status } = request.query

        // 类型转换
        const pageNum = parseInt(pageNo)
        const size = parseInt(pageSize)

        // 参数验证
        if (isNaN(pageNum) || isNaN(size) || pageNum < 1 || size < 1) {
          return {
            code: 400,
            message: '参数错误: page和pageSize必须是正整数',
            data: null
          }
        }

        // 数据筛选
        let filteredList = [...brandList]

        // 按品牌名称筛选
        if (brandName && typeof brandName === 'string') {
          filteredList = filteredList.filter((item) => item.brandName.includes(brandName.trim()))
        }

        // 按状态筛选
        if (status !== undefined) {
          const statusNum = parseInt(status)
          if ([0, 1].includes(statusNum)) {
            filteredList = filteredList.filter((item) => item.status === statusNum)
          }
        }

        // 分页处理
        const start = (pageNum - 1) * size
        const end = start + size
        const pageList = filteredList.slice(start, end) // slice(start, end) 包含start，不包含end
        console.log('start:', start)
        return {
          code: 200,
          message: '成功',
          data: {
            list: pageList,
            total: filteredList.length,
            page: pageNum,
            pageSize: size
          }
        }
      } catch (error) {
        console.error('查询品牌列表出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },

  // 品牌修改（根据ID）
  {
    url: '/api/commodity/brandUpdate/:id',
    method: 'put',
    response: (request) => {
      try {
        const { id } = request.query
        const updateData = request.body

        // 参数校验
        if (!id) {
          return {
            code: 400,
            message: '参数错误: 缺少品牌ID',
            data: null
          }
        }

        const index = brandList.findIndex((item) => item.id === parseInt(id))

        if (index === -1) {
          return {
            code: 404,
            message: '品牌不存在',
            data: null
          }
        }

        // 更新数据
        const updatedBrand = {
          ...brandList[index],
          ...updateData,
          updateTime: getCurrentFormattedTime()
        }

        // 保存到内存
        brandList[index] = updatedBrand

        return {
          code: 200,
          message: '更新成功',
          data: updatedBrand
        }
      } catch (error) {
        console.error('更新品牌出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },

  // 删除品牌（DELETE）- 符合RESTful风格
  {
    url: '/api/commodity/brandDelete/:id',
    method: 'delete',
    response: (request) => {
      try {
        const { id } = request.query

        // 参数校验
        if (!id) {
          return {
            code: 400,
            message: '参数错误: 缺少品牌ID',
            data: null
          }
        }

        const index = brandList.findIndex((item) => item.id === parseInt(id))

        if (index === -1) {
          return {
            code: 404,
            message: '品牌不存在',
            data: null
          }
        }

        // 从内存中删除
        const [deletedBrand] = brandList.splice(index, 1)

        return {
          code: 200,
          message: '删除成功',
          data: deletedBrand
        }
      } catch (error) {
        console.error('删除品牌出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },
  // 新增品牌
  {
    url: '/api/commodity/brandAdd',
    method: 'post',
    response: (request) => {
      try {
        const newBrand = request.body

        // 参数校验
        if (!newBrand.brandName) {
          return {
            code: 400,
            message: '参数错误: 品牌名称不能为空',
            data: null
          }
        }

        // 生成新ID
        const newId = Math.max(...brandList.map((item) => item.id), 0) + 1
        const now = getCurrentFormattedTime()

        const brandToAdd = {
          id: newId,
          brandName: newBrand.brandName,
          brandLogo: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          description: newBrand.description || '',
          status: newBrand.status || 1,
          createTime: now,
          updateTime: null
        }

        // 添加到内存
        brandList.unshift(brandToAdd)

        return {
          code: 200,
          message: '创建成功',
          data: brandToAdd
        }
      } catch (error) {
        console.error('创建品牌出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  },

  // 品牌详情
  {
    url: '/api/commodity/queryBrandDetail',
    method: 'get',
    response: (request) => {
      try {
        const { id } = request.query

        // 参数校验
        if (!id) {
          return {
            code: 400,
            message: '参数错误: 缺少品牌ID',
            data: null
          }
        }

        const brand = brandList.find((item) => item.id === parseInt(id))

        if (!brand) {
          return {
            code: 404,
            message: '品牌不存在',
            data: null
          }
        }

        return {
          code: 200,
          message: '成功',
          data: brand
        }
      } catch (error) {
        console.error('获取品牌详情出错:', error)
        return {
          code: 500,
          message: '服务器内部错误',
          data: null
        }
      }
    }
  }
]
