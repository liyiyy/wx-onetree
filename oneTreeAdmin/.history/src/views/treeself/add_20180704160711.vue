<template>
  <div class="app-container">
    <el-row>
  <el-col :span="12">
    <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    }
  }
</script>
