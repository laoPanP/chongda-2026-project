import request from '../../utils/request'
import type {
  BrandQueryParams,
  BrandPageResponse,
  BrandDetailResponse,
  CommonResponse,
  BrandModifyParams
} from './type'

enum API {
  BRAND_LIST = '/commodity/brands',
  BRAND_UPDATE = '/commodity/brandUpdate',
  BRAND_DELETE = '/commodity/brandDelete/',
  BRAND_ADD = '/commodity/brandAdd',
  BRAND_DETAIL = '/commodity/queryBrandDetail'
}

// 品牌列表查询
export const reqBrandList = (params: BrandQueryParams) =>
  request.get<BrandQueryParams, BrandPageResponse>(API.BRAND_LIST, { params })

// 新增品牌
export const reqAddBrand = (data: BrandModifyParams) =>
  request.post<BrandModifyParams, BrandDetailResponse>(API.BRAND_ADD, data)

// 修改品牌
export const reqUpdateBrand = (id: number, data: BrandModifyParams) =>
  request.put<BrandModifyParams, BrandDetailResponse>(`${API.BRAND_UPDATE}/${id}`, data)

// 删除品牌
export const reqDeleteBrand = (id: number) => request.delete<any, CommonResponse>(`${API.BRAND_DELETE}${id}`)

// 品牌详情
export const reqBrandDetail = (id: number) =>
  request.get<any, BrandDetailResponse>(`${API.BRAND_DETAIL}`, {
    params: { id }
  })
