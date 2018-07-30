<template>
  <div class="app-container">
    <h4>用户管理</h4>
    <el-row :gutter="20" style="width:95%">
      <el-col :span="8">
        <el-input v-model="searchContent" placeholder="id,昵称进行搜索"></el-input>
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
        prop="nikename"
        label="昵称"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="createAt"
        label="注册时间"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="lastLoginAt"
        label="最近登录时间"
        width="280">

      </el-table-column>
      <el-table-column
        align="center"
        prop="treeCase"
        label="树况"
        width="180">
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
// import { login } from '@/api/user'

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
      getlist().then(response => {
        this.list = response.data
        // console.log(this.list)
        this.listLoading = false
      })
    },
    searchAdmin() {
      this.listQuery.username = this.searchContent
      this.fetchData()
    }
  }
}
</script>
