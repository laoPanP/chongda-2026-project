<template>
  <div>
    <el-card>
      <div class="mt16">
        <el-table :data="tableData" border stripe style="width: 100%" row-key="id">
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
                <el-button type="primary" :disabled="row.level === 3" icon="Plus" @click.stop="addMenu(row)">
                  新增菜单
                </el-button>
                <el-button type="primary" icon="Edit" @click.stop="changeData(row)" :disabled="row.level === 0">
                  编辑菜单
                </el-button>
                <el-button type="danger" icon="Delete" @click.stop="deleteData(row)" :disabled="row.level === 0">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
      <!-- 菜单编辑弹框 -->
      <el-dialog
        v-if="dialogVisible"
        v-model="dialogVisible"
        :title="formData.id ? '编辑菜单' : '添加菜单'"
        width="600px"
      >
        <el-form ref="brandForm" :model="formData" :rules="rules" label-width="100px" label-position="right">
          <el-form-item label="菜单名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入菜单名称" clearable />
          </el-form-item>
          <el-form-item label="权限值" prop="code">
            <el-input v-model="formData.code" placeholder="请输入权限值" clearable />
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

<script setup lang="ts" name="menuManage">
  import { ref, reactive, onMounted, watch } from 'vue'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { userApi } from '@/api'
  import type { FormInstance, FormRules } from 'element-plus'
  import type { MenuData, MenuInfo } from '@/api/user/type'
  import type { CommonResponse } from '@/api/commonType'
  let tableData = ref<MenuData[]>([])
  // 表格数据
  const columns = [
    {
      key: 'name',
      minWidth: 160,
      label: '名称',
      align: 'left'
    },
    {
      key: 'code',
      minWidth: 160,
      label: '权限值',
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
      minWidth: 250,
      label: '操作',
      align: 'center'
    }
  ]
  let formData = reactive<MenuInfo>({
    id: 0,
    name: '',
    parentId: 0,
    code: '',
    type: 0,
    level: 0
  })
  // 表单验证规则
  const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
    code: [{ required: true, message: '请输入权限值', trigger: 'blur' }]
  })
  let loading = ref<boolean>(false)
  // 表单引用
  const brandForm = ref<FormInstance>()
  const dialogVisible = ref<boolean>(false)

  // 查询菜单数据-权限分配
  const queryMenuList = async () => {
    try {
      const res = await userApi.reqMenuList()
      tableData.value = Object.assign([], res.data)
    } catch (error) {
      ElMessage.error('获取菜单权限数据失败')
      throw error // 继续抛出错误给上层处理
    }
  }
  //新增菜单
  const addMenu = (row: MenuData) => {
    if (row) {
      formData.parentId = row.id
      formData.level = row.level + 1
      formData.type = row.type + 1
    }
    dialogVisible.value = true
  }
  // 修改
  const changeData = (row: MenuData) => {
    if (row) {
      formData.id = row.id
      formData.name = row.name
      formData.parentId = row.id
      formData.level = row.level
      formData.type = row.type
      formData.code = row.code
    }
    dialogVisible.value = true
  }
  //新增修改确认
  const handleSubmit = async () => {
    brandForm.value?.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        if (formData.id) {
          await userApi.reqUpdateMenu(formData.id, formData)
        } else {
          await userApi.reqAddMenu(formData)
        }
        ElMessage.success(formData.id ? '修改成功' : '添加成功')
        dialogVisible.value = false
        loading.value = false
        queryMenuList()
      } catch (error) {
        loading.value = false
      }
    })
  }
  //删除
  const deleteData = (data: MenuData) => {
    ElMessageBox.confirm('确定删除吗？', '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    })
      .then(() => {
        userApi.reqDeleteMenu(data.id).then((res: CommonResponse) => {
          if (res.code === 200) {
            queryMenuList()
            ElMessage.success('操作成功')
          }
        })
      })
      .catch(() => {})
  }

  // 初始化调用查询接口
  onMounted(() => {
    queryMenuList()
  })

  // 方式1：直接监听 + 处理关闭逻辑
  watch(dialogVisible, (isOpen) => {
    if (!isOpen) {
      // 弹框关闭时重置表单
      formData.id = 0
      formData.name = ''
      formData.parentId = 0
      formData.code = ''
      formData.type = 0
      formData.level = 0
    }
  })
</script>

<style scoped></style>
