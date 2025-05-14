<template>
  <div class="base-card-form">
    <el-card>
      <el-form inline="true" ref="ruleFormRef" :model="queryForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="queryForm.roleName" placeholder="请输入角色名称" clearable />
        </el-form-item>
        <el-form-item class="form-actions">
          <el-button type="primary" @click="searchInfo">查询</el-button>
          <el-button @click="restForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-button type="primary" icon="Plus" @click="addRole">添加角色</el-button>
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
              :show-overflow-tooltip="item.showOverflowTooltip"
            >
              <template #default="{ row }" v-if="item.key === 'action'">
                <el-button type="primary" icon="User" @click.stop="setAuth(row)">权限分配</el-button>
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
      <!-- 角色编辑抽屉 -->
      <el-drawer v-if="dialogVisible" v-model="dialogVisible" :title="isChangeFlge ? '修改角色信息' : '新增角色'">
        <el-form ref="brandForm" :model="formData" :rules="rules" label-width="120px" label-position="right">
          <el-form-item label="角色编码：" prop="roleCode">
            <el-input v-model="formData.roleCode" placeholder="请输入角色编码" clearable />
          </el-form-item>
          <el-form-item label="角色名称：" prop="roleName">
            <el-input v-model="formData.roleName" placeholder="请输入角色名称" clearable />
          </el-form-item>
          <el-form-item label="角色描述：" prop="description">
            <el-input
              v-model="formData.description"
              type="textarea"
              :rows="4"
              placeholder="请输入角色描述"
              show-word-limit
              maxlength="200"
            />
          </el-form-item>
        </el-form>

        <template #footer>
          <el-button :loading="loading" @click="dialogVisible = false">取消</el-button>
          <el-button :loading="loading" type="primary" @click="handleSubmit">确定</el-button>
        </template>
      </el-drawer>
      <!-- 权限分配抽屉 -->
      <el-drawer v-if="authVisible" v-model="authVisible" title="权限分配">
        <!-- 这个是权限分配 -->
        <el-tree
          ref="tree"
          style="max-width: 600px"
          :data="menuList"
          show-checkbox
          node-key="id"
          default-expand-all
          :default-checked-keys="menuIdList"
          :props="defaultProps"
        />
        <template #footer>
          <el-button :loading="loading" @click="authVisible = false">取消</el-button>
          <el-button :loading="loading" type="primary" @click="handleAuthSubmit">确定</el-button>
        </template>
      </el-drawer>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="roleManage">
  import { ref, reactive, onMounted, watch } from 'vue'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { userApi } from '@/api'
  import type { FormInstance, FormRules } from 'element-plus'
  import type { PaginationResponseData, CommonResponse } from '@/api/commonType'
  import type { RoleDataTS, queryData, MenuData, MenuResponse } from '@/api/user/type'
  // 这里放变量、常量
  let queryForm = reactive<queryData>({
    pageNo: 1,
    pageSize: 10,
    roleName: ''
  })
  // 弹框显示状态
  const pageData = reactive({
    pageSizes: [10, 30, 50, 100, 200] as number[],
    size: 'default',
    disabled: false,
    background: true,
    total: 0
  })
  // 表格数据
  const columns = [
    {
      type: 'index',
      width: 60,
      label: '序号',
      align: 'center'
    },
    {
      key: 'roleCode',
      minWidth: 120,
      label: '角色编码',
      align: 'center',
      showOverflowTooltip: true
    },
    {
      key: 'roleName',
      minWidth: 120,
      label: '角色名称',
      align: 'center',
      showOverflowTooltip: true
    },
    {
      key: 'description',
      minWidth: 180,
      label: '角色描述',
      align: 'center',
      showOverflowTooltip: true
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
      label: '更新时间',
      align: 'center'
    },
    {
      key: 'action',
      minWidth: 220,
      label: '操作',
      align: 'center'
    }
  ]
  //表格数据
  const tableData = ref<Array<any>>([])
  const brandForm = ref<FormInstance>()
  // 表单数据
  const formData = reactive<RoleDataTS>({
    roleId: null,
    roleName: '',
    roleCode: '',
    description: ''
  })
  const dialogVisible = ref(false)
  // 表单验证规则
  const rules = reactive<FormRules>({
    roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
    roleCode: [{ required: true, message: '请输入角色编码', trigger: 'blur' }]
    // description: [{ required: true, message: '请输入角色描述', trigger: 'blur' }]
  })
  // 搜索表单的dom
  const ruleFormRef = ref<FormInstance>()
  //是否修改
  let isChangeFlge = ref<boolean>(false)
  let loading = ref(false)
  let roleId = ref<number>()
  let menuIdList = ref<number[]>([])
  let menuList = reactive<MenuData[]>([])
  // 表单引用
  const authVisible = ref<boolean>(false)
  const defaultProps = {
    children: 'children',
    label: 'name'
  }
  // 获取tree组件实例
  let tree = ref<any>()
  // 这里放函数
  // 分签器触发
  const handleSizeChange = (val: number) => {
    queryForm.pageSize = val
    queryRoleList()
  }
  const handleCurrentChange = (val: number) => {
    queryForm.pageNo = val
    queryRoleList()
  }
  //查询属性列表
  const queryRoleList = () => {
    userApi.reqRoleList(queryForm).then((res: PaginationResponseData) => {
      pageData.total = res.data.total
      // 如果使用reactive响应，这里得使用Object.assign(tableData.list, res.data.list)防止直接复制，丢失响应
      tableData.value = res.data.list
    })
  }
  const restForm = () => {
    queryForm.pageNo = 1
    ruleFormRef.value?.resetFields()
    queryRoleList()
  }
  const searchInfo = () => {
    queryForm.pageNo = 1
    queryRoleList()
  }
  //删除
  const deleteData = (data: RoleDataTS) => {
    ElMessageBox.confirm(`确定删除${data.roleName}角色吗？`, '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    })
      .then(() => {
        userApi.reqDeleteRole(data.roleId).then((res: CommonResponse) => {
          if (res.code === 200) {
            queryRoleList()
          }
        })
      })
      .catch(() => {})
  }
  // 修改
  const changeData = (row: RoleDataTS) => {
    if (row) {
      formData.roleId = row.roleId
      formData.roleName = row.roleName
      formData.roleCode = row.roleCode
      formData.description = row.description
    }
    isChangeFlge.value = true
    dialogVisible.value = true
  }
  //新增用户
  const addRole = () => {
    isChangeFlge.value = false
    dialogVisible.value = true
  }
  //新增 修改提交
  const handleSubmit = async () => {
    brandForm.value?.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        if (isChangeFlge.value) {
          await userApi.reqUpdateRole(formData.roleId, formData)
        } else {
          await userApi.reqAddRole(formData)
        }
        ElMessage.success(isChangeFlge.value ? '修改成功' : '添加成功')
        dialogVisible.value = false
        loading.value = false
        queryRoleList()
      } catch (error) {
        loading.value = false
      }
    })
  }
  // 权限分配弹框打开
  const setAuth = async (data: RoleDataTS) => {
    roleId.value = data.roleId
    try {
      await queryMenuList() // 先加载数据
      menuIdList.value = data.menuIdList || []
      authVisible.value = true // 数据准备好后再显示弹窗
    } catch (error) {
      ElMessage.error('初始化权限数据失败')
    }
  }

  // 查询菜单数据-权限分配
  const queryMenuList = async () => {
    try {
      const res = await userApi.reqMenuList()
      menuList = Object.assign(menuList, res.data)
    } catch (error) {
      ElMessage.error('获取菜单权限数据失败')
      throw error // 继续抛出错误给上层处理
    }
  }

  //权限分配提交
  const handleAuthSubmit = async () => {
    let chooseData = tree.value?.getCheckedKeys()
    if (chooseData.length < 1) {
      ElMessage.warning('请勾选数据')
      return
    }
    userApi
      .reqUpdateRole(roleId.value, { menuIdList: chooseData, roleId: roleId.value })
      .then((res: CommonResponse) => {
        if (res.code === 200) {
          ElMessage.success('权限分配成功')
          authVisible.value = false
          queryRoleList()
        }
      })
  }
  // 这里放监听
  // 方式1：直接监听 + 处理关闭逻辑
  watch(dialogVisible, (isOpen) => {
    if (!isOpen) {
      // 弹框关闭时重置表单
      formData.roleId = null
      formData.roleName = ''
      formData.roleCode = ''
      formData.description = ''
    }
  })
  // 初始化调用查询接口
  onMounted(() => {
    queryRoleList()
  })
</script>

<style scoped lang="scss">
  .checkbox-group {
    display: flex;
    flex-direction: column;
  }
</style>
