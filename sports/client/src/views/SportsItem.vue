<template>
  <div class="sports-item-view">
    <h1>比赛项目</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="径赛直道">
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item label="跨栏项目" prop="sportsName">
            <el-input v-model="baseInfoForm.sportsName" placeholder="请输入跨栏项目，如：110米栏, 100米栏"></el-input>
          </el-form-item>
          <el-form-item class="sports-group" label="普通直道项目" prop="sportsGroup">
            <el-input v-model="baseInfoForm.sportsGroup" placeholder="请输入普通直道项目，如：100米, 50米"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('baseInfoForm')">保存</el-button>
            <el-button @click="resetForm('baseInfoForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="径赛弯道">
      </el-tab-pane>
      <el-tab-pane label="田赛">
      </el-tab-pane>
      <el-tab-pane label="接力项目/集体趣味项目">
      </el-tab-pane>
      <el-tab-pane label="全能项目">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
export default {
  name: 'sports-item-view',
  data() {
    return {
      baseInfoForm: {
        sportsName: '',
        sportsGroup: '',
      },
      rules: {},
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit');
        } else {
          console.log('error submit!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
}
</script>


<style lang="scss">
.sports-item-view {
}
</style>
