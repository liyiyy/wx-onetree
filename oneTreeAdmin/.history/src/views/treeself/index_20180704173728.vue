<template>
  <div class="app-container">
    <h4>成长管理</h4>
    <el-row :gutter="20" style="width:95%">
      <el-col :span="8">
        <el-input v-model="searchContent" placeholder="标题进行搜索"></el-input>
      </el-col>
      <el-col :span="6">
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>
      <el-col :span="4">
        <el-button plain @click="searchAdmin">搜索</el-button>
      </el-col>
      <el-col :span="4">
        <!-- <el-button type="primary" style="float:right" @click="isAdd=true">新增后台用户</el-button> -->
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
        prop="name"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="platAt"
        label="栽种时间"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="status"
        label="认领状态"
        width="280">

      </el-table-column>
      <el-table-column
        align="center"
        prop="lastNurse"
        label="最近护理记录"
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
  </div>
</template>

<script>
import { getlist } from '@/api/treeself'

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
        name: ''
      },
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
import { getlist } from '@/api/treeself'
      addtree(this.listQuery).then(response => {
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
