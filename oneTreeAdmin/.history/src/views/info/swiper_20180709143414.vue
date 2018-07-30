<template>
  <div class="app-container">
    <h4>轮播图管理</h4>
    <el-row :gutter="20" style="width:95%">
      <el-col :span="24">
        <el-button type="primary" style="float:right" @click="addbtn">新增轮播图</el-button>
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
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="src"
        label="缩略图"
        width="180">
        <template slot-scope="scope">
        <img :src="scope.row.src" alt="" width="30" height="30">
        </template>
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
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
          <el-button type="warning" icon="el-icon-info" @click="forbid(scope.row)">禁用</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-dialog
  title="新增轮播图"
  :visible.sync="isAdd"
  width="30%"
  >
  <el-form label-position="right" label-width="120px" :model="adminInfo" @submit.prevent="submit">
  <el-form-item label="上传图片：">
    <form action="http://localhost:1122/info/upload" method="post" @submit.prevent="submit">
    <input type="file" @change="upPic" />
    <br/>
    <img :src="resPicUrl" alt="" v-show="resPicUrl" width="100" height="100">
    <el-button type="submit"> 提交</el-button>
    </form>
  </el-form-item>
  <el-form-item label="URL：">
    <el-input v-model="url"></el-input>
  </el-form-item>
  <el-form-item label="标题：">
    <el-input v-model="title"></el-input>
  </el-form-item>
  <el-form-item label="简介：">
    <el-input v-model="intro"></el-input>
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
import { upPic, addswiper, getlist, delOne } from '@/api/info'

export default {
  data() {
    return {
      url: '',
      title: '',
      intro: '',
      resPicUrl: '',
      handle: 1,
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
      getlist(this.listQuery).then(response => {
        this.list = response.data
        console.log(this.list)
        this.listLoading = false
      })
    },
    addbtn() {
      this.isAdd = true
      this.handle = 1
    },
    edit(row) {
      this.handle = 2
      this.isAdd = true
      this.resPicUrl = row.src
      this.url = row.url
      this.title = row.title
      this.intro = row.intro
      // console.log(row)
    },
    forbid(row) {

    },
    del(row) {
      delOne({ id: row._id }).then(res => {
        if (res.code === 0) {
          this.fetchData()
        }
        console.log(res)
      })
    },
    searchAdmin() {
      this.listQuery.username = this.searchContent
      this.fetchData()
    },
    submit() {
      console.log('提交')

    },
    upPic(e) {

      // var that = this
      // // console.log(e);
      // var file = e.target.files[0]
      // // console.log(file);
      // var fr = new FileReader()
      // fr.readAsDataURL(file)
      // fr.onloadend = function() {
      //   upPic({ data: fr.result }).then(res => {
      //     if (res.data.data) {
      //       that.resPicUrl = res.data.data
      //       // console.log(that.resPicUrl)
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // }
    },
    addSubmit() {
      var data = {
        src: this.resPicUrl,
        url: this.url,
        title: this.title,
        intro: this.intro
      }
      addswiper(data).then(res => {
        // console.log(res)
        if (res.code === 0) {
          this.isAdd = false
          this.fetchData()
        }
      })
    }
  }
}
</script>
