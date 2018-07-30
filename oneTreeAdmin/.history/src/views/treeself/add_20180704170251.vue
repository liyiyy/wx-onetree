<template>
  <div class="app-container">
    <el-row>
  <el-col :span="12">
    <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="input" type="Number" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="种类">
        <el-radio-group v-model="formLabelAlign.type">
    <el-radio :label="1">花</el-radio>
    <el-radio :label="2">树</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="播种季节">
        <el-radio-group v-model="formLabelAlign.sow">
    <el-radio :label="1">春</el-radio>
    <el-radio :label="2">夏</el-radio>
    <el-radio :label="3">秋</el-radio>
    <el-radio :label="4">冬</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="收获季节">
        <el-radio-group v-model="formLabelAlign.crown">
   <el-radio :label="1">春</el-radio>
    <el-radio :label="2">夏</el-radio>
    <el-radio :label="3">秋</el-radio>
    <el-radio :label="4">冬</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="与客户绑定">
        <el-radio-group v-model="formLabelAlign.isbind">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="">
        <el-button round>提交</el-button>
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
        type: '',
        sow: '',
        crown: '',
        userbind: ''
      },

      userbind: ''
    }
  }
}
</script>
