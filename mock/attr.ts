// attr.ts (extended version)

// Existing attribute category data
function createAttributeList() {
  return [
    {
      id: 1,
      name: '电子产品',
      level: 1,
      children: [
        {
          id: 11,
          name: '手机',
          level: 2,
          children: [
            { id: 111, name: '智能手机', level: 3 },
            { id: 112, name: '功能手机', level: 3 }
          ]
        },
        {
          id: 12,
          name: '电脑',
          level: 2,
          children: [
            { id: 121, name: '笔记本电脑', level: 3 },
            { id: 122, name: '台式电脑', level: 3 },
            { id: 123, name: '平板电脑', level: 3 }
          ]
        }
      ]
    },
    {
      id: 2,
      name: '服装',
      level: 1,
      children: [
        {
          id: 21,
          name: '男装',
          level: 2,
          children: [
            { id: 211, name: 'T恤', level: 3 },
            { id: 212, name: '牛仔裤', level: 3 }
          ]
        },
        {
          id: 22,
          name: '女装',
          level: 2,
          children: [
            { id: 221, name: '连衣裙', level: 3 },
            { id: 222, name: '半身裙', level: 3 }
          ]
        }
      ]
    },
    {
      id: 3,
      name: '家居',
      level: 1,
      children: [
        {
          id: 31,
          name: '家具',
          level: 2,
          children: [
            { id: 311, name: '沙发', level: 3 },
            { id: 312, name: '床', level: 3 }
          ]
        },
        {
          id: 32,
          name: '家纺',
          level: 2,
          children: [
            { id: 321, name: '四件套', level: 3 },
            { id: 322, name: '被褥', level: 3 }
          ]
        }
      ]
    }
  ]
}

// Attribute list mock data
let attributeListData = [
  {
    id: 1,
    catalogId1: 1,
    catalogId2: 11,
    catalogId3: 111,
    attributeName: '颜色',
    attributeValueList: [
      { value: '黑色', color: '#000000' },
      { value: '白色', color: '#0b2948' },
      { value: '金色', color: '#FFD700' }
    ]
  },
  {
    id: 2,
    catalogId1: 1,
    catalogId2: 11,
    catalogId3: 111,
    attributeName: '内存',
    attributeValueList: [
      { value: '64GB', color: '#000000' },
      { value: '128GB', color: '#0b2948' },
      { value: '256GB', color: '#FFD700' }
    ]
  },
  {
    id: 3,
    catalogId1: 1,
    catalogId2: 12,
    catalogId3: 121,
    attributeName: '处理器',
    attributeValueList: [
      { value: 'i5', color: '#0b2948' },
      { value: 'i7', color: '#409eff' },
      { value: 'i9', color: '#FFD700' }
    ]
  },
  {
    id: 4,
    catalogId1: 1,
    catalogId2: 12,
    catalogId3: 122,
    attributeName: '显卡',
    attributeValueList: [
      { value: 'GTX 1660', color: '#0b2948' },
      { value: 'RTX 2060', color: '#409eff' },
      { value: 'RTX 3080', color: '#FFD700' }
    ]
  },
  {
    id: 5,
    catalogId1: 2,
    catalogId2: 21,
    catalogId3: 211,
    attributeName: '尺码',
    attributeValueList: [
      { value: 'S', color: '#409eff' },
      { value: 'M', color: '#0b2948' },
      { value: 'L', color: '#409eff' },
      { value: 'XL', color: '#FFD700' }
    ]
  },
  {
    id: 6,
    catalogId1: 2,
    catalogId2: 21,
    catalogId3: 212,
    attributeName: '裤长',
    attributeValueList: [
      { value: '常规', color: '#0b2948' },
      { value: '九分', color: '#409eff' },
      { value: '长裤', color: '#FFD700' }
    ]
  },
  {
    id: 7,
    catalogId1: 2,
    catalogId2: 22,
    catalogId3: 221,
    attributeName: '裙长',
    attributeValueList: [
      { value: '短裙', color: '#0b2948' },
      { value: '中长裙', color: '#409eff' },
      { value: '长裙', color: '#FFD700' }
    ]
  },
  {
    id: 8,
    catalogId1: 2,
    catalogId2: 22,
    catalogId3: 222,
    attributeName: '腰型',
    attributeValueList: [
      { value: '高腰', color: '#0b2948' },
      { value: '中腰', color: '#409eff' },
      { value: '低腰', color: '#FFD700' }
    ]
  },
  {
    id: 9,
    catalogId1: 3,
    catalogId2: 31,
    catalogId3: 311,
    attributeName: '材质',
    attributeValueList: [
      { value: '真皮', color: '#0b2948' },
      { value: '布艺', color: '#409eff' },
      { value: '人造革', color: '#FFD700' }
    ]
  },
  {
    id: 10,
    catalogId1: 3,
    catalogId2: 31,
    catalogId3: 312,
    attributeName: '床尺寸',
    attributeValueList: [
      { value: '1.5米', color: '#0b2948' },
      { value: '1.8米', color: '#409eff' },
      { value: '2.0米', color: '#FFD700' }
    ]
  },
  {
    id: 11,
    catalogId1: 3,
    catalogId2: 32,
    catalogId3: 321,
    attributeName: '面料',
    attributeValueList: [
      { value: '纯棉', color: '#409eff' },
      { value: '涤纶', color: '#0b2948' },
      { value: '亚麻', color: '#FFD700' }
    ]
  },
  {
    id: 12,
    catalogId1: 3,
    catalogId2: 32,
    catalogId3: 322,
    attributeName: '填充物',
    attributeValueList: [
      { value: '羽绒', color: '#0b2948' },
      { value: '棉花', color: '#FFD700' },
      { value: '蚕丝', color: '#409eff' }
    ]
  }
]

// Helper function to get category names by IDs
function getCategoryNames(catalogId1: number, catalogId2: number, catalogId3: number) {
  const categories = createAttributeList()
  const category1 = categories.find((item) => item.id === catalogId1)
  if (!category1) return { catalogId1Name: '', catalogId2Name: '', catalogId3Name: '' }

  const category2 = category1.children?.find((item) => item.id === catalogId2)
  if (!category2) return { catalogId1Name: category1.name, catalogId2Name: '', catalogId3Name: '' }

  const category3 = category2.children?.find((item) => item.id === catalogId3)
  return {
    catalogId1Name: category1.name,
    catalogId2Name: category2.name,
    catalogId3Name: category3?.name || ''
  }
}

export default [
  // 分类查询
  {
    url: '/api/attribute/category',
    method: 'get',
    response: () => {
      const attributeList = createAttributeList()
      return {
        code: 200,
        message: '成功',
        data: attributeList
      }
    }
  },

  // 属性列表查询
  {
    url: '/api/attribute/list',
    method: 'get',
    response: (req: any) => {
      const { pageNo = 1, pageSize = 10, catalogId1, catalogId2, catalogId3 } = req.query

      let filteredData = [...attributeListData]
      if (catalogId1) filteredData = filteredData.filter((item) => item.catalogId1 === +catalogId1)
      if (catalogId2) filteredData = filteredData.filter((item) => item.catalogId2 === +catalogId2)
      if (catalogId3) filteredData = filteredData.filter((item) => item.catalogId3 === +catalogId3)
      const start = (pageNo - 1) * pageSize
      const end = start + pageSize
      const paginatedData = filteredData.slice(start, end)

      const dataWithCategoryNames = paginatedData.map((item) => {
        const { catalogId1Name, catalogId2Name, catalogId3Name } = getCategoryNames(
          item.catalogId1,
          item.catalogId2,
          item.catalogId3
        )
        return {
          ...item,
          catalogId1Name,
          catalogId2Name,
          catalogId3Name
        }
      })

      return {
        code: 200,
        message: '成功',
        data: {
          list: dataWithCategoryNames,
          total: filteredData.length,
          pageNo: +pageNo,
          pageSize: +pageSize
        }
      }
    }
  },

  // 属性新增
  {
    url: '/api/attribute/add',
    method: 'post',
    response: (req: any) => {
      const newId = attributeListData.length > 0 ? Math.max(...attributeListData.map((item) => item.id)) + 1 : 1

      const newAttribute = {
        ...req.body,
        id: newId
      }

      attributeListData.push(newAttribute)

      return {
        code: 200,
        message: '添加成功',
        data: newAttribute
      }
    }
  },

  // 属性修改
  {
    url: '/api/attribute/update/:id',
    method: 'put',
    response: (req: any) => {
      const { id } = req.query
      const index = attributeListData.findIndex((item) => item.id === parseInt(id))

      if (index === -1) {
        return {
          code: 404,
          message: '属性不存在',
          data: null
        }
      }

      attributeListData[index] = {
        ...attributeListData[index],
        ...req.body
      }

      return {
        code: 200,
        message: '更新成功',
        data: attributeListData[index]
      }
    }
  },

  // 属性删除
  {
    url: '/api/attribute/delete/:id',
    method: 'delete',
    response: (req: any) => {
      const { id } = req.query
      const index = attributeListData.findIndex((item) => item.id === parseInt(id))

      if (index === -1) {
        return {
          code: 404,
          message: '属性不存在',
          data: null
        }
      }

      const deletedItem = attributeListData.splice(index, 1)[0]

      return {
        code: 200,
        message: '删除成功',
        data: deletedItem
      }
    }
  }
]
