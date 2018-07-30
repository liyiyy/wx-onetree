<template>
  <div class="app-container">
    <h4>通知管理</h4>
    <el-row :gutter="20" style="width:95%">
      <el-col :span="24">
        <el-button type="primary" style="float:right" @click="isAdd=true">新增通知</el-button>
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
        prop="url"
        label="URL"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="createAt"
        label="最近修改时间"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        prop="content"
        label="通知内容"
        width="280">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作">
        <template slot-scope="scope">
          <el-button type="warning">禁用</el-button>
          <el-button type="danger" @click="delOneInfo(scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>

    <el-dialog
  title="新增后台用户"
  :visible.sync="isAdd"
  width="30%"
  >
  <el-form label-position="right" label-width="120px" :model="infodata">
  <el-form-item label="标题">
    <el-input v-model="infodata.title"></el-input>
  </el-form-item>
  <el-form-item label="URL">
    <el-input v-model="infodata.url"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input v-model="infodata.content"></el-input>
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
import { addInfo, infolist } from '@/api/info'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      isAdd: false,
      infodata: {
        title: null,
        url: null,
        content: null
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      infolist().then(response => {
        this.list = response.data
        console.log(this.list)
        this.listLoading = false
      })
    },
    addSubmit() {
      if (this.infodata.title && this.infodata.url && this.infodata.content) {
        addInfo(this.infodata).then(res => {
          if (res.code === 0) {
            this.isAdd = false
            this.fetchData()
          }
        })
      }
    },
    delOneInfo(e) {
      console.log(e)
    }
  }
}
</script>
