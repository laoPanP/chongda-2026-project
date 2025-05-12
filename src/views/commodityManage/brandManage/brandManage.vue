<template>
  <div>
    <el-card>
      <el-button type="primary" icon="Plus" @click="addBrand">添加品牌</el-button>
      <div class="mt16">
        <el-table :data="tableData" border stripe style="width: 100%">
          <template v-for="(item, index) in columns" :key="item.key || item.type">
            <el-table-column
              :type="item.type"
              :width="item.width"
              :label="item.label"
              :min-width="item.minWidth"
              :align="item.align"
              :prop="item.key"
            >
              <template #default="{ row }" v-if="item.key === 'brandLogo'">
                <el-image :src="row.brandLogo" style="width: 60px; height: 60px" />
              </template>
              <template #default="{ row }" v-else-if="item.key === 'action'">
                <el-button type="primary" icon="Edit" @click.stop="changeData(row)">修改</el-button>
                <el-button type="danger" icon="Delete" @click.stop="deleteData(row)">删除</el-button>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <div class="mt16">
        <!-- layout:调整分页器子组件位置 -->
        <el-pagination
          v-model:current-page="queryData.pageNo"
          v-model:page-size="queryData.pageSize"
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
      <!-- 品牌编辑弹框 -->
      <el-dialog
        v-if="dialogVisible"
        v-model="dialogVisible"
        :title="formData.id ? '编辑品牌' : '添加品牌'"
        width="600px"
      >
        <el-form ref="brandForm" :model="formData" :rules="rules" label-width="80px" label-position="right">
          <el-form-item label="品牌名称" prop="brandName">
            <el-input v-model="formData.brandName" placeholder="请输入品牌名称" clearable />
          </el-form-item>

          <el-form-item label="品牌描述" prop="description">
            <el-input
              v-model="formData.description"
              type="textarea"
              :rows="4"
              placeholder="请输入品牌描述"
              show-word-limit
              maxlength="200"
            />
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

<script setup lang="ts" name="brandManage">
  import { ref, reactive, onMounted, watch } from 'vue'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { commodityApi } from '@/api'
  import type { BrandPageResponse, Brand, CommonResponse } from '@/api/commodity/type'
  // 弹框显示状态
  const pageData = reactive({
    pageSizes: [10, 30, 50, 100, 200],
    size: 'default',
    disabled: false,
    background: true,
    total: 0
  })
  let queryData = reactive({
    pageNo: 1,
    pageSize: 10,
    brandName: ''
  })
  // 初始化调用查询接口
  onMounted(() => {
    queryBrandList()
  })

  //查询品牌列表
  const queryBrandList = () => {
    commodityApi.reqBrandList(queryData).then((res: BrandPageResponse) => {
      pageData.total = res.data.total
      // 如果使用reactive响应，这里得使用Object.assign(tableData.list, res.data.list)防止直接复制，丢失响应
      tableData.value = res.data.list
    })
  }
  // 分签器触发
  const handleSizeChange = (val: number) => {
    queryData.pageSize = val
    queryBrandList()
  }
  const handleCurrentChange = (val: number) => {
    queryData.pageNo = val
    queryBrandList()
  }
  // 表格数据
  const tableData = ref<Array<any>>([])
  const columns = [
    {
      type: 'index',
      width: 60,
      label: '序号',
      align: 'center'
    },
    {
      key: 'brandName',
      minWidth: 160,
      label: '品牌名称',
      align: 'center'
    },
    {
      key: 'description',
      minWidth: 160,
      label: '品牌描述',
      align: 'center'
    },
    {
      key: 'brandLogo',
      minWidth: 160,
      label: '品牌LOGO',
      align: 'center'
    },
    {
      key: 'createTime',
      minWidth: 160,
      label: '创建时间',
      align: 'center'
    },
    {
      key: 'updateTime',
      minWidth: 160,
      label: '修改时间',
      align: 'center'
    },
    {
      key: 'action',
      minWidth: 160,
      label: '操作',
      align: 'center'
    }
  ]
  //删除
  const deleteData = (data: Brand) => {
    ElMessageBox.confirm('确定删除吗？', '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    })
      .then(() => {
        commodityApi.reqDeleteBrand(data.id).then((res: CommonResponse) => {
          if (res.code === 200) {
            queryBrandList()
          }
        })
      })
      .catch(() => {})
  }
  // 修改
  const changeData = (row: Brand) => {
    if (row) {
      Object.assign(formData, row)
    }
    dialogVisible.value = true
  }
  const addBrand = () => {
    dialogVisible.value = true
  }
  // 表单数据
  const formData = reactive({
    id: null,
    brandName: '',
    description: '',
    brandLogo: '',
    createTime: '',
    updateTime: ''
  })
  // 表单验证规则
  const rules = reactive({
    brandName: [
      { required: true, message: '请输入品牌名称', trigger: 'blur' },
      { min: 2, max: 20, message: '长度在2到20个字符', trigger: 'blur' }
    ],
    description: [{ max: 200, message: '不能超过200个字符', trigger: 'blur' }]
  })
  // 表单引用
  const brandForm = ref()
  const dialogVisible = ref(false)
  // 方式1：直接监听 + 处理关闭逻辑
  watch(dialogVisible, (isOpen) => {
    if (!isOpen) {
      // 弹框关闭时重置表单
      formData.id = null
      formData.brandName = ''
      formData.description = ''
      formData.brandLogo = ''
      formData.createTime = ''
      formData.updateTime = ''
    }
  })
  let loading = ref(false)
  const handleSubmit = async () => {
    brandForm.value.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        if (formData.id) {
          await commodityApi.reqUpdateBrand(formData.id, formData)
        } else {
          await commodityApi.reqAddBrand(formData)
        }
        ElMessage.success(formData.id ? '修改成功' : '添加成功')
        dialogVisible.value = false
        loading.value = false
        queryBrandList()
      } catch (error) {
        loading.value = false
      }
    })
  }
</script>

<style scoped></style>
