<template>
  <div class="base-card-form">
    <el-card>
      <el-form inline="true" ref="ruleFormRef" :model="queryForm">
        <el-form-item label="登录账号" prop="username">
          <el-input v-model="queryForm.username" placeholder="请输入登录账号" clearable />
        </el-form-item>
        <el-form-item class="form-actions">
          <el-button type="primary" @click="searchInfo">查询</el-button>
          <el-button @click="restForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-button type="primary" icon="Plus" @click="addUser">添加用户</el-button>
      <el-button type="danger" icon="Delete" @click="deleteData(selectData)">批量删除</el-button>
      <div class="mt16">
        <el-table :data="tableData" border stripe style="width: 100%" @selection-change="getSelectionRows">
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
              <template #default="{ row }" v-if="item.key === 'avatar'">
                <el-image :src="row.avatar" style="width: 60px; height: 60px" />
              </template>
              <template #default="{ row }" v-else-if="item.key === 'roles'">
                <span>{{ row.roles.join('、') }}</span>
              </template>
              <template #default="{ row }" v-else-if="item.key === 'action'">
                <el-button type="primary" icon="User" @click.stop="setRole(row)">角色分配</el-button>
                <el-button type="primary" icon="Edit" @click.stop="changeData(row)">修改</el-button>
                <el-button type="danger" icon="Delete" @click.stop="deleteData([row])">删除</el-button>
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
      <!-- 用户编辑抽屉 -->
      <el-drawer v-if="dialogVisible" v-model="dialogVisible" :title="isChangeFlge ? '修改用户信息' : '新增用户'">
        <el-form ref="brandForm" :model="formData" :rules="rules" label-width="120px" label-position="right">
          <el-form-item label="登录账号：" prop="username">
            <el-input v-model="formData.username" placeholder="请输入登录账号" clearable />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="formData.password" placeholder="请输入密码" clearable />
          </el-form-item>
          <el-form-item label="用户名：" prop="desc">
            <el-input v-model="formData.desc" placeholder="请输入用户名" clearable />
          </el-form-item>
        </el-form>

        <template #footer>
          <el-button :loading="loading" @click="dialogVisible = false">取消</el-button>
          <el-button :loading="loading" type="primary" @click="handleSubmit">确定</el-button>
        </template>
      </el-drawer>
      <!-- 角色分配抽屉 -->
      <el-drawer v-if="roleVisible" v-model="roleVisible" title="分配用户角色">
        <el-form ref="roleForm" :model="userFormData" :rules="userRules" label-width="120px" label-position="right">
          <el-form-item label="登录账号：" prop="username">
            <el-input v-model="userFormData.username" disabled placeholder="请输入登录账号" clearable />
          </el-form-item>
          <el-form-item label="角色分配：" prop="roleCodes">
            <div class="checkbox-group">
              <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                全选
              </el-checkbox>

              <el-checkbox-group v-model="userFormData.roleCodes" @change="handleCheckedChange">
                <el-checkbox
                  :disabled="userFormData.userId == 1 && item.value == 'systemManager'"
                  v-for="item in rolesList"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value"
                />
              </el-checkbox-group>
            </div>
          </el-form-item>
        </el-form>

        <template #footer>
          <el-button :loading="loading" @click="roleVisible = false">取消</el-button>
          <el-button :loading="loading" type="primary" @click="handleRoleSubmit">确定</el-button>
        </template>
      </el-drawer>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="userManage">
  import { ref, reactive, onMounted, watch } from 'vue'
  import { ElMessageBox, ElMessage } from 'element-plus'
  import { userApi } from '@/api'
  import type { FormInstance, CheckboxValueType } from 'element-plus'
  import type { PaginationResponseData, CommonResponse } from '@/api/commonType'
  import type { userInfo, UserAllocationParams } from '@/api/user/type'
  // 这里放变量、常量
  let queryForm = reactive({
    pageNo: 1,
    pageSize: 10,
    username: ''
  })
  // 弹框显示状态
  const pageData = reactive({
    pageSizes: [10, 30, 50, 100, 200],
    size: 'default',
    disabled: false,
    background: true,
    total: 0
  })
  // 表格数据
  const columns = [
    {
      type: 'selection',
      width: 60,
      label: '序号',
      align: 'center'
    },
    {
      type: 'index',
      width: 60,
      label: '序号',
      align: 'center'
    },
    {
      key: 'desc',
      minWidth: 120,
      label: '用户名',
      align: 'center',
      showOverflowTooltip: true
    },
    {
      key: 'username',
      minWidth: 120,
      label: '登录账号',
      align: 'center'
    },
    {
      key: 'avatar',
      minWidth: 120,
      label: '用户头像',
      align: 'center'
    },
    {
      key: 'roles',
      minWidth: 250,
      label: '用户角色',
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
  const checkAll = ref(false)
  const isIndeterminate = ref(true)
  //表格数据
  const tableData = ref<Array<any>>([])
  // 搜索表单的dom
  const ruleFormRef = ref<FormInstance>()
  let selectData = ref<userInfo[]>([])
  //是否修改
  let isChangeFlge = ref(false)
  // 表单引用
  const brandForm = ref()
  const roleForm = ref()
  const dialogVisible = ref(false)
  const roleVisible = ref(false)
  // 表单数据
  const formData = reactive({
    userId: null,
    username: '',
    password: '',
    desc: ''
  })
  let rolesList = ref([
    {
      name: '系统管理员',
      value: 'systemManager'
    },
    {
      name: '平台管理员',
      value: 'planManager'
    },
    {
      name: '普通用户',
      value: 'defaultUser'
    }
  ])
  //分配用户角色表单数据
  const userFormData = reactive<UserAllocationParams>({
    userId: null,
    username: '',
    roleCodes: [],
    roles: []
  })
  // 表单验证规则
  const rules = reactive({
    username: [
      { required: true, message: '请输入登录账户', trigger: 'blur' },
      { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'change' }
    ],
    password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  })
  // 表单验证规则
  const userRules = reactive({
    roleCodes: [{ required: true, type: 'array', message: '请选择角色', trigger: 'change' }]
  })
  let loading = ref(false)

  // 这里放函数
  // 分签器触发
  const handleSizeChange = (val: number) => {
    queryForm.pageSize = val
    queryUserList()
  }
  const handleCurrentChange = (val: number) => {
    queryForm.pageNo = val
    queryUserList()
  }
  //查询属性列表
  const queryUserList = () => {
    userApi.reqUserList(queryForm).then((res: PaginationResponseData) => {
      pageData.total = res.data.total
      // 如果使用reactive响应，这里得使用Object.assign(tableData.list, res.data.list)防止直接复制，丢失响应
      tableData.value = res.data.list
    })
  }
  const restForm = () => {
    queryForm.pageNo = 1
    ruleFormRef.value?.resetFields()
    queryUserList()
  }
  const searchInfo = () => {
    queryForm.pageNo = 1
    queryUserList()
  }
  //表格勾选
  const getSelectionRows = (data: any[]) => {
    selectData.value = data
  }
  //删除
  const deleteData = (data: userInfo[]) => {
    if (!data.length) {
      ElMessage.warning('请选择要删除的数据!')
      return
    }
    const idArray = data.map((item) => item.userId)
    const username = data.map((item) => item.username).join()
    ElMessageBox.confirm(`确定删除${username}账户吗？`, '温馨提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
      draggable: true
    })
      .then(() => {
        userApi.reqDeleteUser({ userIds: idArray }).then((res: CommonResponse) => {
          if (res.code === 200) {
            queryUserList()
          }
        })
      })
      .catch(() => {})
  }
  // 修改
  const changeData = (row: userInfo) => {
    if (row) {
      formData.userId = row.userId
      formData.username = row.username
      formData.password = row.password
      formData.desc = row.desc
    }
    isChangeFlge.value = true
    dialogVisible.value = true
  }
  //新增用户
  const addUser = () => {
    isChangeFlge.value = false
    dialogVisible.value = true
  }
  //新增 修改提交
  const handleSubmit = async () => {
    brandForm.value.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      // 这里也可以使用.then
      try {
        if (isChangeFlge.value) {
          await userApi.reqUpdateUser(formData.userId, formData)
        } else {
          await userApi.reqAddUser(formData)
        }
        ElMessage.success(isChangeFlge.value ? '修改成功' : '添加成功')
        dialogVisible.value = false
        loading.value = false
        queryUserList()
      } catch (error) {
        loading.value = false
      }
    })
  }
  //角色分配提交
  const handleRoleSubmit = async () => {
    roleForm.value.validate(async (valid: boolean) => {
      if (!valid) return
      loading.value = true
      userFormData.roles = []
      userFormData.roleCodes.forEach((item: string) => {
        const matchedRole = rolesList.value.find((role: { value: string; name: string }) => role.value === item)
        if (matchedRole) {
          userFormData.roles.push(matchedRole.name)
        }
      })
      // 这里也可以使用.then
      try {
        await userApi.reqAllocationUser(userFormData.userId, userFormData)
        ElMessage.success('操作成功！')
        roleVisible.value = false
        loading.value = false
        queryUserList()
      } catch (error) {
        loading.value = false
      }
    })
  }
  const setRole = (data: userInfo) => {
    userFormData.userId = data.userId
    userFormData.username = data.username
    userFormData.roleCodes = data.roleCodes
    userFormData.roles = data.roles
    roleVisible.value = true
  }
  const handleCheckAllChange = (val: CheckboxValueType) => {
    //如果是系统管理员，则不能对系统管理员角色进行操作
    if (userFormData.userId == 1) {
      if (val) {
        userFormData.roleCodes = val ? rolesList.value.map((item) => item.value) : []
      } else {
        // 返回只有 'systemManager' 的数组
        userFormData.roleCodes = rolesList.value
          .filter((item) => item.value === 'systemManager')
          .map((item) => item.value) // 提取 value
      }
    } else {
      userFormData.roleCodes = val ? rolesList.value.map((item) => item.value) : []
    }
    isIndeterminate.value = false
  }
  const handleCheckedChange = (value: CheckboxValueType[]) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === rolesList.value.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < rolesList.value.length
  }
  // 这里放监听
  // 方式1：直接监听 + 处理关闭逻辑
  watch(dialogVisible, (isOpen) => {
    if (!isOpen) {
      // 弹框关闭时重置表单
      formData.userId = null
      formData.username = ''
      formData.password = ''
      formData.desc = ''
    }
  })
  // 初始化调用查询接口
  onMounted(() => {
    queryUserList()
  })
</script>

<style scoped lang="scss">
  .checkbox-group {
    display: flex;
    flex-direction: column;
  }
</style>
