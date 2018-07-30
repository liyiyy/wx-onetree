<template>
  <div class="app-container">
    <h4>轮播图管理</h4>
    <el-row :gutter="20" style="width:95%">
      <el-col :span="24">
        <el-button type="primary" style="float:right" @click="isAdd=true">新增轮播图</el-button>
      </el-col>
    </el-row>

     <el-table
      :data="list"
      border
      style="width: 100%;margin-top:30px">
      <el-table-column
        align="center"
        prop="_id"
        label="ID"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="thumb"
        label="缩略图"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="url"
        label="URL"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="lastEditAt"
        label="最近修改时间"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="intro"
        label="简介"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作">
        <template slot-scope="scope">
          <el-button type="warning">禁用</el-button>
          <el-button type="danger">删除</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-dialog
  title="新增轮播图"
  :visible.sync="isAdd"
  width="30%"
  >
  <el-form label-position="right" label-width="120px" :model="adminInfo">
  <el-form-item label="上传图片：">
    <el-input v-model="adminInfo.name" type="file" @click="checkPic"></el-input>
  </el-form-item>
  <el-form-item label="登录密码：">
    <el-input v-model="adminInfo.psw"></el-input>
  </el-form-item>
  <el-form-item label="权限：">
    <el-radio-group v-model="limitsc">
    <el-radio :label="1">仅读取</el-radio>
    <el-radio :label="2">操作用户</el-radio>
    <el-radio :label="3">操作管理员</el-radio>
  </el-radio-group>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="isAdd = false">取 消</el-button>
    <el-button type="primary" @click="addSubmit">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
// import { getList } from '@/api/admin'
import { adminRegist, getList } from '@/api/adminMg'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      adminData: [],
      isAdd: false,
      adminInfo: {},
      limitsc: '',
      searchContent: '',
      listQuery: {
        // page: 1,
        username: ''
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data
        console.log(this.list)
        this.listLoading = false
      })
    },
    searchAdmin() {
      this.listQuery.username = this.searchContent
      this.fetchData()
    },
    checkAddUser() {
      let isOK = true
      if (this.adminInfo.name && this.adminInfo.name.length < 5) {
        isOK = false
        this.$message.error('昵称长度少于5位')
      }
      if (this.adminInfo.psw && this.adminInfo.psw.length < 6) {
        isOK = false
        this.$message.error('密码长度少于6位')
      }
      if (!this.limitsc) {
        isOK = false
        this.$message.error('没有选择权限')
      }
      return isOK
    },
    addSubmit() {
      if (this.checkAddUser()) {
        var data = {
          username: this.adminInfo.name,
          password: this.adminInfo.psw,
          limitsc: this.limitsc
        }
        adminRegist(data).then(res => {
          if (res.status === 0) {
            this.isAdd = false
            this.fetchData()
          } else {
            this.$message.error(res.message)
          }
          console.log(res)
        })
      }
    }
  }
}
</script>
