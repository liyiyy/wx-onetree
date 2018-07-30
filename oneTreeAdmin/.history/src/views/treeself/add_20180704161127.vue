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
        <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="与客户绑定">
        <el-radio-group v-model="radio2">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
        <el-button round v-if="userbind===1">选择客户</el-button>
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
