<template>
  <div class="sports-rules-view">
    <h1>比赛规则</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="甲组">
        <el-form ref="rulesForm" label-width="200px" :model="rulesForm" :rules="rules">
          <h4>1. 名次加分</h4>
          <el-form-item label="第1名" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="第2名" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="第3名" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="第4名" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="第5名" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <h4>2. 平/破纪录额外加分</h4>
          <el-form-item label="平/破校记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破区县记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破市记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破省记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破全国记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破世锦赛记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="平/破奥运会记录" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <h4>3. 加分系数</h4>
          <el-form-item label="一般项目: × (倍数)" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="接力项目: × (倍数)" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="全能项目: × (倍数)" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <h4>4. 参赛规则</h4>
          <el-form-item label="每个项目、每个单位限报人数" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="每位运动员个人项目限报数" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <el-form-item label="每位运动员接力项目限报数" prop="grade">
            <el-input-number v-model="rulesForm.grade" :min="0" :max="100" :controls="false">
            </el-input-number>
          </el-form-item>
          <h4><a href="#">5. 运动等级加分</a></h4>
          <el-form-item>
            <el-button type="primary" @click="submitForm('rulesForm')">保存</el-button>
            <el-button @click="resetForm('rulesForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- tab02 -->
      <el-tab-pane label="乙组">
        tab02
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
export default {
  name: 'sports-rules-view',
  data() {
    return {
      rulesForm: {
        grade: 1,
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
.sports-rules-view {
  margin-bottom: 20px;
  .el-form-item {
    margin-bottom: 15px;
  }
}
</style>
