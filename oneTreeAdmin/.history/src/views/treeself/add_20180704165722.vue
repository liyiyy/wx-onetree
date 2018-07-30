<template>
  <div class="app-container">
    <el-row>
  <el-col :span="12">
    <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
      <el-form-item label="种类">
        <el-radio-group v-model="type">
    <el-radio :label="1">花</el-radio>
    <el-radio :label="2">树</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="播种季节">
        <el-radio-group v-model="sow">
    <el-radio :label="1">春</el-radio>
    <el-radio :label="2">夏</el-radio>
    <el-radio :label="3">秋</el-radio>
    <el-radio :label="4">冬</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="收获季节">
        <el-radio-group v-model="crown">
   <el-radio :label="1">春</el-radio>
    <el-radio :label="2">夏</el-radio>
    <el-radio :label="3">秋</el-radio>
    <el-radio :label="4">冬</el-radio>
  </el-radio-group>
      </el-form-item>
      <el-form-item label="与客户绑定">
        <el-radio-group v-model="userbind">
    <el-radio :label="1">是</el-radio>
    <el-radio :label="2">否</el-radio>
  </el-radio-group>
  <br />
 <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
      </el-form-item>
      <el-form-item label="收获季节">
        <el-button round>圆角按钮</el-button>
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
      },
      userbind: ''
    }
  }
}
</script>
