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
