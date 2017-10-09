<template>
  <div class="base-info-view">
    <h1>基本信息设置</h1>
    <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
      <el-form-item label="运动会名称" prop="sportsName">
        <el-input v-model="baseInfoForm.sportsName" placeholder="请输入运动会名称"></el-input>
      </el-form-item>
      <el-form-item label="运动会时间" required>
        <el-col :span="11">
          <el-form-item prop="dateRange">
            <el-date-picker
              v-model="baseInfoForm.dateRange"
              type="daterange"
              placeholder="选择日期范围">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="持续天数" prop="sportsDay">
        <el-input-number v-model="baseInfoForm.sportsDay" :min="0" :max="100">
        </el-input-number>
      </el-form-item>
      <el-form-item label="运动会场地" prop="place">
        <el-select v-model="baseInfoForm.place" placeholder="请选择运动会场地">
          <el-option label="场地一" value="shanghai"></el-option>
          <el-option label="场地二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="赛道数目" prop="runwayCount">
        <el-select v-model="baseInfoForm.runwayCount" placeholder="请选择赛道数目">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛计时方式" prop="countTimeMethod">
        <el-select v-model="baseInfoForm.countTimeMethod" placeholder="请选择比赛计时方式">
          <el-option label="手动计时" value="method-01"></el-option>
          <el-option label="自动计时" value="method-02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="sports-group" label="自定义比赛组" prop="sportsGroup">
        <el-input v-model="baseInfoForm.sportsGroup" placeholder="请输入比赛分组，如：[甲组, 乙组]"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('baseInfoForm')">保存</el-button>
        <el-button @click="resetForm('baseInfoForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default{
  name: 'base-info-view',
  data() {
    return {
      baseInfoForm: {
        sportsName: '',
        dateRange: '',
        sportsDay: 1,
        place: '',
        runwayCount: '',
        countTimeMethod: '',
      },
      rules: {
        sportsName: [
          { required: true, message: '请输入运动会名称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' },
        ],
        dateRange: [
          { type: 'array', required: true, message: '请选择日期', trigger: 'change' },
        ],
        place: [
          { required: true, message: '请选择运动会场地', trigger: 'change' },
        ],
      },
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
.base-info-view {
  .sports-group {
    width: 50%;
  }
}
</style>
