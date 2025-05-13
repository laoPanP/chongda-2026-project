// 定义通用类型
// 分页列表出参通用类型
export interface PaginationResponseData<T = any> {
  code: number
  message: string
  data: {
    total: number
    pageNo: number
    pageSize: number
    list: T[]
  }
}
// 删除、修改、新增、详情出差通用类型
export interface CommonResponse {
  code: number
  message: string
  data: any
}
