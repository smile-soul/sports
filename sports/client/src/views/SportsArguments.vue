<template>
  <div class="sports-arguments-view">
    <h1>项目参数</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="比赛时间（分钟/每组）">
        <el-form ref="rulesForm" label-width="100px" :model="rulesForm" :rules="rules">
          <el-form-item label="100米" prop="time">
            <el-input-number v-model="rulesForm.time" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="400米" prop="time">
            <el-input-number v-model="rulesForm.time" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="1000米" prop="time">
            <el-input-number v-model="rulesForm.time" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="110米栏" prop="time">
            <el-input-number v-model="rulesForm.time" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="4x100米" prop="time">
            <el-input-number v-model="rulesForm.time" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('rulesForm')">保存</el-button>
            <el-button @click="resetForm('rulesForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="比赛人数（人/每组）">
        <el-form ref="rulesForm" label-width="100px" :model="rulesForm" :rules="rules">
          <el-form-item label="100米" prop="people">
            <el-input-number v-model="rulesForm.people" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="400米" prop="people">
            <el-input-number v-model="rulesForm.people" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="1000米" prop="people">
            <el-input-number v-model="rulesForm.people" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="110米栏" prop="people">
            <el-input-number v-model="rulesForm.people" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item label="4x100米" prop="people">
            <el-input-number v-model="rulesForm.people" :min="0" :max="100">
            </el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('rulesForm')">保存</el-button>
            <el-button @click="resetForm('rulesForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
export default {
  name: 'sports-arguments-view',
  data() {
    return {
      rulesForm: {
        time: 5,
        people: 10,
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
.sports-arguments-view {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
