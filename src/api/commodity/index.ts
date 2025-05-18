import request from '../../utils/request'
import type {
  BrandQueryParams,
  BrandPageResponse,
  BrandDetailResponse,
  CommonResponse,
  BrandModifyParams,
  CategoryList,
  queryAttrParams,
  AttrListResponse,
  attrList,
  attrAddResponse
} from './type'

enum API {
  // 品牌接口
  BRAND_LIST = '/commodity/brands',
  BRAND_UPDATE = '/commodity/brandUpdate',
  BRAND_DELETE = '/commodity/brandDelete/',
  BRAND_ADD = '/commodity/brandAdd',
  BRAND_DETAIL = '/commodity/queryBrandDetail',
  // 属性接口
  ATTR_CATEGORY = '/attribute/category',
  ATTR_LIST = '/attribute/list',
  ATTR_Delete = '/attribute/delete/',
  ATTR_UPDATE = '/attribute/update',
  ATTR_ADD = '/attribute/add'
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
// 属性分类查询
export const reqCategoryList = () => request.get<any, CategoryList>(API.ATTR_CATEGORY)
// 属性列表查询
export const queryAttrList = (params: queryAttrParams) =>
  request.get<queryAttrParams, AttrListResponse>(API.ATTR_LIST, { params })

// 属性删除
export const reqDeleteAttr = (id: any) => request.delete<any, CommonResponse>(`${API.ATTR_Delete}${id}`)
// 属性修改
export const reqUpdateAttr = (id: number, data: attrList) =>
  request.put<attrList, attrAddResponse>(`${API.ATTR_UPDATE}/${id}`, data)
// 属性新增
export const reqAddAttr = (data: attrList) => request.post<attrList, attrAddResponse>(API.ATTR_ADD, data)
