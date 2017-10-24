<template>
  <div class="base-info-view">
    <h1>基本信息</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="——">
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item label="运动会名称" prop="sportsName" class="sports-name">
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
        <el-form-item label="直道数目" prop="straightWay">
          <el-select v-model="baseInfoForm.straightWay" placeholder="请选择直道数目">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="弯道数目" prop="curvedWay">
          <el-select v-model="baseInfoForm.curvedWay" placeholder="请选择弯道数目">
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
        <el-form-item label="比赛分组" prop="sportsGroup">
          <el-select v-model="baseInfoForm.sportsGroup" multiple placeholder="请选择比赛分组（多选）">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('baseInfoForm')">保存</el-button>
          <el-button @click="resetForm('baseInfoForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
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
        straightWay: '',
        curvedWay: '',
        countTimeMethod: '',
        sportsGroup: [],
      },
      options: [{
        value: '甲组',
        label: '甲组',
      }, {
        value: '乙组',
        label: '乙组',
      }, {
        value: '丙组',
        label: '丙组',
      }],
      rules: {
        sportsName: [
          { required: true, message: '请输入运动会名称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' },
        ],
        dateRange: [
          { type: 'array', required: true, message: '请选择日期', trigger: 'change' },
        ],
        sportsGroup: [
          { required: true, message: '请选择比赛分组', trigger: 'blur' },
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
  .sports-name {
    width: 500px;;
  }
}
</style>
