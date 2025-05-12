// 品牌基础类型
export interface Brand {
  id: number
  brandName: string
  brandLogo: string
  description: string
  createTime: string
  updateTime: string
}

// 品牌查询参数
export interface BrandQueryParams {
  page?: number
  pageSize?: number
  brandName?: string
}

// 品牌分页响应
export interface BrandPageResponse {
  code: number
  message: string
  data: {
    list: Brand[]
    total: number
    page: number
    pageSize: number
  }
}

// 品牌详情响应
export interface BrandDetailResponse {
  code: number
  message: string
  data: Brand
}

// 通用响应
export interface CommonResponse {
  code: number
  message: string
  data: any
}

// 品牌修改/新增参数
export interface BrandModifyParams {
  id?: number
  brandName: string
  description?: string
}
// 属性基础类型
export interface Category {
  id: number
  name: string
  level: number
  children?: Category[]
}
// 属性分类响应
export interface CategoryList {
  code: number
  message: string
  data: Category[]
}
// 属性列表查询参数类型
export interface queryAttrParams {
  pageNo: number
  pageSize: number
  catalogId1: number | string
  catalogId2: number | string
  catalogId3: number | string
}
// 列表查询响应
export interface attributeValueList {
  value: string
  color: string
}
export interface attrList {
  id: number | string
  catalogId1: number | string
  catalog1Name?: string
  catalogId2: number | string
  catalog2Name?: string
  catalogId3: number | string
  catalog3Name?: string
  attributeName: string
  attributeValueList: attributeValueList[]
}
export interface AttrListResponse {
  code: number
  message: string
  data: {
    total: number
    pageNo: number
    pageSize: number
    list: attrList[]
  }
}
// 修改接口返回类型
export interface attrAddResponse {
  code: number
  message: string
  data: attrList
}
