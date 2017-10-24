<template>
  <div class="allocate-number-view">
    <h1>号码分配</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="自动分配">
        <el-form ref="rulesForm" label-width="150px" :model="rulesForm" :rules="rules">
          <el-form-item label="参赛单位" prop="unit" class="unit">
            <el-input v-model="rulesForm.unit">
            </el-input>
          </el-form-item>
          <el-form-item label="比赛组" prop="group">
            <el-select v-model="rulesForm.group" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="男运动员号码范围" prop="man">
            <el-input-number v-model="rulesForm.manStart" :min="0" :max="10000">
            </el-input-number>
            <el-input-number v-model="rulesForm.manEnd" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item label="女运动员号码范围" prop="woman">
            <el-input-number v-model="rulesForm.womanStart" :min="0" :max="10000">
            </el-input-number>
            <el-input-number v-model="rulesForm.womanEnd" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('rulesForm')">添加</el-button>
            <el-button @click="resetForm('rulesForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="手动分配">
        <el-form ref="rulesForm" label-width="150px" :model="rulesForm" :rules="rules">
          <el-form-item label="参赛单位" prop="unit" class="unit">
            <el-input v-model="rulesForm.unit">
            </el-input>
          </el-form-item>
          <el-form-item label="比赛组" prop="group">
            <el-select v-model="rulesForm.group" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="男运动员号码范围" prop="man">
            <el-input-number v-model="rulesForm.manStart" :min="0" :max="10000">
            </el-input-number>
            <el-input-number v-model="rulesForm.manEnd" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item label="TAG" prop="manTag">
            <el-input v-model="rulesForm.manTag" class="tag" placeholder="请输入TAG"></el-input>
          </el-form-item>
          <el-form-item label="起始号码" prop="manTagNum">
            <el-input-number v-model="rulesForm.manTagNum" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item label="女运动员号码范围" prop="woman">
            <el-input-number v-model="rulesForm.womanStart" :min="0" :max="10000">
            </el-input-number>
            <el-input-number v-model="rulesForm.womanEnd" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item label="TAG" prop="womanTag">
            <el-input v-model="rulesForm.womanTag" class="tag" placeholder="请输入TAG"></el-input>
          </el-form-item>
          <el-form-item label="起始号码" prop="womanTagNum">
            <el-input-number v-model="rulesForm.womanTagNum" :min="0" :max="10000">
            </el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('rulesForm')">添加</el-button>
            <el-button @click="resetForm('rulesForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
export default {
  name: 'allocate-number-view',
  data() {
    return {
      rulesForm: {
        time: 5,
        people: 10,
        group: '',
        manStart: '0',
        manEnd: '10',
        womanStart: '0',
        womanEnd: '10',
        manTag: '',
        manTagNum: 0,
        womanTag: '',
        womanTagNum: 0,
      },
      rules: {},
      options: [{
        value: '甲组',
        label: '甲组',
      }, {
        value: '乙组',
        label: '乙组',
      }],
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
.allocate-number-view {
  .unit {
    width: 50%;
  }
  .tag {
    width: 180px;
  }
}
</style>
