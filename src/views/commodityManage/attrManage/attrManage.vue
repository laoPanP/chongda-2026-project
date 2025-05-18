<template>
  <div class="base-card-form">
    <el-card>
      <el-form inline="true" ref="ruleFormRef" :model="queryForm">
        <el-form-item label="一级分类" prop="catalogId1">
          <el-select v-model="queryForm.catalogId1" placeholder="请选择" @change="chooseCatalog1">
            <el-option v-for="item in catalogData.catalogList1" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" prop="catalogId2">
          <el-select v-model="queryForm.catalogId2" placeholder="请选择" @change="chooseCatalog2">
            <el-option v-for="item in catalogData.catalogList2" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类" prop="catalogId3">
          <el-select v-model="queryForm.catalogId3" placeholder="请选择">
            <el-option v-for="item in catalogData.catalogList3" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item class="form-actions">
          <el-button type="primary" @click="searchInfo">查询</el-button>
          <el-button @click="restForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-button type="primary" icon="Plus" @click="addAttr" v-isButton="'commodityManage.attrManage.add'">
        添加属性
      </el-button>
      <div class="mt16">
        <el-table :data="tableData" border stripe style="width: 100%">
          <template v-for="item in columns" :key="item.key || item.type">
            <el-table-column
              :type="item.type"
              :width="item.width"
              :label="item.label"
              :min-width="item.minWidth"
              :align="item.align"
              :prop="item.key"
            >
              <template #default="{ row }" v-if="item.key === 'attributeValueList'">
                <div class="attr-value-list">
                  <div
                    class="attr-value-item mr8"
                    :style="{ backgroundColor: `${item.color}33` }"
                    v-for="(item, index) in row.attributeValueList"
                    :key="index"
                  >
                    <span :style="{ color: item.color }">{{ item.value }}</span>
                  </div>
                </div>
              </template>
              <template #default="{ row }" v-else-if="item.key === 'action'">
                <el-button
                  type="primary"
                  icon="Edit"
                  @click.stop="changeData(row)"
                  v-isButton="'commodityManage.attrManage..change'"
                >
                  修改
                </el-button>
                <el-button
                  type="danger"
                  icon="Delete"
                  @click.stop="deleteData(row)"
                  v-isButton="'commodityManage.attrManage.delete'"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div class="mt16">
        <!-- layout:调整分页器子组件位置 -->
        <el-pagination
          v-model:current-page="queryForm.pageNo"
          v-model:page-size="queryForm.pageSize"
          :page-sizes="pageData.pageSizes"
          :size="pageData.size"
          :disabled="pageData.disabled"
          :background="pageData.background"
          layout="prev, pager, next, jumper,->, sizes, total,  "
          :total="pageData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <!-- 属性编辑弹框 -->
      <el-dialog
        v-if="dialogVisible"
        v-model="dialogVisible"
        :title="isChangeFlge ? '编辑属性' : '添加属性'"
        width="800px"
      >
        <el-form ref="brandForm" :model="formData" :rules="rules" label-width="150px" label-position="right">
          <template v-if="!isChangeFlge">
            <el-form-item label="一级分类" prop="catalogId1">
              <el-select v-model="formData.catalogId1" placeholder="请选择" @change="modalChooseCatalog1">
                <el-option
                  v-for="item in moadlCatalogData.catalogList1"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="二级分类" prop="catalogId2">
              <el-select v-model="formData.catalogId2" placeholder="请选择" @change="modalChooseCatalog2">
                <el-option
                  v-for="item in moadlCatalogData.catalogList2"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="三级分类" prop="catalogId3">
              <el-select v-model="formData.catalogId3" placeholder="请选择" @change="modalChooseCatalog3">
                <el-option
                  v-for="item in moadlCatalogData.catalogList3"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </template>
          <el-form-item label="属性名称" prop="attributeName">
            <el-input v-model="formData.attributeName" placeholder="请输入属性名称" clearable />
          </el-form-item>
          <el-form-item label="属性值列表" prop="attributeValueList">
            <el-button class="mb10" type="primary" icon="Plus" @click="addValueList">添加</el-button>
            <el-table :data="valueData" border stripe style="width: 100%">
              <el-table-column type="index" width="50" algin="center" />
              <el-table-column algin="center" label="属性值名称" width="160">
                <template #="{ row }">
                  <el-input v-model="row.value" placeholder="请输入属性值名称" clearable />
                </template>
              </el-table-column>
              <el-table-column algin="center" label="颜色" minWidth="160">
                <template #="{ row }">
                  <el-color-picker v-model="row.color" />
                </template>
              </el-table-column>
              <el-table-column algin="center" label="操作" width="120">
                <template #="{ $index }">
                  <el-button type="danger" icon="Delete" @click.stop="deleteValue($index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>

        <template #footer>
          <el-button :loading="loading" @click="dialogVisible = false">取消</el-button>
          <el-button :loading="loading" type="primary" @click="handleSubmit">确定</el-button>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="attrManage">
  import { ref, reactive, onMounted, watch } from 'vue'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { commodityApi } from '@/api'
  import type { FormInstance } from 'element-plus'
  import type { CategoryList, Category, AttrListResponse, attrList, CommonResponse } from '@/api/commodity/type'
  let queryForm = reactive({
    pageNo: 1,
    pageSize: 10,
    catalogId1: null,
    catalogId2: null,
    catalogId3: null
  })
  // 弹框显示状态
  const pageData = reactive({
    pageSizes: [10, 30, 50, 100, 200],
    size: 'default',
    disabled: false,
    background: true,
    total: 0
  })
  // 初始化调用查询接口
  onMounted(() => {
    queryCategoryList()
    queryAttrList()
  })
  let catalogData = reactive({
    catalogList1: [] as Category[],
    catalogList2: [] as Category[],
    catalogList3: [] as Category[]
  })
  let moadlCatalogData = reactive({
    catalogList1: [] as Category[],
    catalogList2: [] as Category[],
    catalogList3: [] as Category[]
  })
  // 查询分类下拉框
  const queryCategoryList = () => {
    commodityApi.reqCategoryList().then((res: CategoryList) => {
      catalogData.catalogList1 = Object.assign([], res.data)
    })
  }
  // 一级选择事件
  const chooseCatalog1 = (id: number) => {
    let list = catalogData.catalogList1.filter((item: Category) => {
      return item.id === id
    })
    if (list.length > 0) {
      catalogData.catalogList2 = Object.assign([], list[0].children)
    }
  }
  // 二级选择事件
  const chooseCatalog2 = (id: number) => {
    let list = catalogData.catalogList2.filter((item: Category) => {
      return item.id === id
    })
    if (list.length > 0) {
      catalogData.catalogList3 = Object.assign([], list[0].children)
    }
  }
  // 弹框一级选择事件
  const modalChooseCatalog1 = (id: number) => {
    let list = moadlCatalogData.catalogList1.filter((item: Category) => {
      return item.id === id
    })
    if (list.length > 0) {
      moadlCatalogData.catalogList2 = Object.assign([], list[0].children)
    }
    if (id) {
      formData.catalogId1Name = moadlCatalogData.catalogList1.filter((item: Category) => {
        return item.id === id
      })[0].name
    }
  }
  // 弹框二级选择事件
  const modalChooseCatalog2 = (id: number) => {
    let list = moadlCatalogData.catalogList2.filter((item: Category) => {
      return item.id === id
    })
    if (list.length > 0) {
      moadlCatalogData.catalogList3 = Object.assign([], list[0].children)
    }
    if (id) {
      formData.catalogId2Name = moadlCatalogData.catalogList2.filter((item: Category) => {
        return item.id === id
      })[0].name
    }
  }
  // 弹框三级级选择事件
  const modalChooseCatalog3 = (id: number) => {
    if (id) {
      formData.catalogId3Name = moadlCatalogData.catalogList3.filter((item: Category) => {
        return item.id === id
      })[0].name
    }
  }
  const ruleFormRef = ref<FormInstance>()
  const restForm = () => {
    queryForm.pageNo = 1
    ruleFormRef.value?.resetFields()
    catalogData.catalogList2 = Object.assign([])
    catalogData.catalogList3 = Object.assign([])
    queryAttrList()
  }
  const searchInfo = () => {
    queryForm.pageNo = 1
    queryAttrList()
  }
  const tableData = ref<Array<any>>([])
  //查询属性列表
  const queryAttrList = () => {
    commodityApi.queryAttrList(queryForm).then((res: AttrListResponse) => {
      pageData.total = res.data.total
      // 如果使用reactive响应，这里得使用Object.assign(tableData.list, res.data.list)防止直接复制，丢失响应
      tableData.value = res.data.list
    })
  }
  // 分签器触发
  const handleSizeChange = (val: number) => {
    queryForm.pageSize = val
    queryAttrList()
  }
  const handleCurrentChange = (val: number) => {
    queryForm.pageNo = val
    queryAttrList()
  }
  // 表格数据
  const columns = [
    {
      type: 'index',
      width: 60,
      label: '序号',
      align: 'center'
    },
    {
      key: 'catalogId1Name',
      width: 120,
      label: '一级分类',
      align: 'center'
    },
    {
      key: 'catalogId2Name',
      width: 120,
      label: '二级分类',
      align: 'center'
    },
    {
      key: 'catalogId3Name',
      width: 120,
      label: '三级分类',
      align: 'center'
    },
    {
      key: 'attributeName',
      width: 160,
      label: '属性名称',
      align: 'center'
    },
    {
      key: 'attributeValueList',
      minWidth: 160,
      label: '属性值名称',
      align: 'center'
    },
    {
      key: 'action',
      width: 200,
      label: '操作',
      align: 'center'
    }
  ]
  //删除
  const deleteData = (data: attrList) => {
    ElMessageBox.confirm('确定删除吗？', '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    })
      .then(() => {
        commodityApi.reqDeleteAttr(data.id).then((res: CommonResponse) => {
          if (res.code === 200) {
            queryAttrList()
          }
        })
      })
      .catch(() => {})
  }
  const valueData = ref<Array<any>>([])
  //是否修改
  let isChangeFlge = ref(false)
  // 修改
  const changeData = (row: attrList) => {
    if (row) {
      Object.assign(formData, row)
      valueData.value = Object.assign([], row.attributeValueList)
    }
    isChangeFlge.value = true
    dialogVisible.value = true
  }
  // 弹框列表删除
  const deleteValue = (index: number) => {
    valueData.value.splice(index, 1)
  }
  const addAttr = () => {
    moadlCatalogData.catalogList1 = Object.assign([], catalogData.catalogList1)
    isChangeFlge.value = false
    dialogVisible.value = true
  }
  // 新增属性弹框新增
  const addValueList = () => {
    valueData.value.push({
      value: '',
      color: ''
    })
  }
  // 表单数据
  const formData = reactive({
    id: 0,
    catalogId1: null,
    catalogId1Name: '',
    catalogId2: null,
    catalogId2Name: '',
    catalogId3: null,
    catalogId3Name: '',
    attributeName: '',
    attributeValueList: []
  })
  // 表单验证规则
  const rules = reactive({
    attributeName: [
      { required: true, message: '请输入属性名称', trigger: 'blur' },
      { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
    ],
    catalogId1: [{ required: true, message: '请选择一级分类', trigger: 'change' }],
    catalogId2: [{ required: true, message: '请选择二级分类', trigger: 'change' }],
    catalogId3: [{ required: true, message: '请选择三级分类', trigger: 'change' }],
    attributeValueList: [{ required: true, type: 'array', message: '属性值至少有一个', trigger: 'none' }]
  })
  // 表单引用
  const brandForm = ref()
  const dialogVisible = ref(false)
  // 方式1：直接监听 + 处理关闭逻辑
  watch(dialogVisible, (isOpen) => {
    if (!isOpen) {
      // 弹框关闭时重置表单
      formData.id = 0
      formData.catalogId1 = null
      formData.catalogId1Name = ''
      formData.catalogId2 = null
      formData.catalogId2Name = ''
      formData.catalogId3 = null
      formData.catalogId3Name = ''
      formData.attributeName = ''
      formData.attributeValueList = []
      valueData.value = []
      moadlCatalogData.catalogList3 = []
      moadlCatalogData.catalogList2 = []
    }
  })
  let loading = ref(false)
  const handleSubmit = async () => {
    Object.assign(formData.attributeValueList, valueData.value)
    brandForm.value.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        if (isChangeFlge.value) {
          await commodityApi.reqUpdateAttr(formData.id, formData)
        } else {
          await commodityApi.reqAddAttr(formData)
        }
        ElMessage.success(isChangeFlge.value ? '修改成功' : '添加成功')
        dialogVisible.value = false
        loading.value = false
        queryAttrList()
      } catch (error) {
        loading.value = false
      }
    })
  }
</script>

<style scoped lang="scss">
  .attr-value-list {
    display: flex;
    flex-wrap: wrap;
    .attr-value-item {
      border-radius: 4px;
      padding: 0 4px;
    }
  }
</style>
