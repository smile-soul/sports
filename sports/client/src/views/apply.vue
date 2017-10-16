<template>
  <div class="sports-items-view">
    <h1>比赛项目</h1>
    <h4>{{ name.user }}</h4>
    <el-tabs type="border-card">
      <el-tab-pane label="男子报名">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="nubmerid" label="号码" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="itemone" label="比赛项目1" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemtwo" label="比赛项目2" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemthree" label="比赛项目3" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemfour" label="比赛项目4" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="dateday" label="出生日期" width="120">
          </el-table-column>
          <el-table-column prop="resid" label="注册ID" width="120">
          </el-table-column>
          <el-table-column prop="type" label="比赛类型" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item>
            <el-button type="primary" @click="name()">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="女子报名">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="nubmerid" label="号码" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="itemone" label="比赛项目1" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemtwo" label="比赛项目2" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemthree" label="比赛项目3" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="itemfour" label="比赛项目4" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="dateday" label="出生日期" width="120">
          </el-table-column>
          <el-table-column prop="resid" label="注册ID" width="120">
          </el-table-column>
          <el-table-column prop="type" label="比赛类型" width="140">
            <template scope="scope">
              <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item>
            <el-button type="primary" @click="name()">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="教练领队">
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="单位名称">
              <el-input v-model="coach.unitname"></el-input>
            </el-form-item>
            <el-form-item label="组别">
              <el-input v-model="coach.groupname"></el-input>
            </el-form-item>
            <el-form-item label="团长领队">
              <el-input v-model="coach.groupleader"></el-input>
            </el-form-item>
            <el-form-item label="教练">
              <el-input v-model="coach.coach"></el-input>
            </el-form-item>
            <el-form-item label="医生">
              <el-input v-model="coach.doctor"></el-input>
            </el-form-item>
            <el-form-item label="工作人员">
              <el-input v-model="coach.worker"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="coach.tel"></el-input>
            </el-form-item>
          </el-form>
          <el-form-item>
            <el-button type="primary" @click="coachsubmit()">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="信息汇总">
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item>
            <el-button type="primary" @click="submitForm('baseInfoForm')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import axios from 'axios';
import { baseURL, headers } from '../store/api';

export default {
  name: 'sports-items-view',
  data() {
    return {
      labelPosition: 'right',
      coach: {
        unitname: '',
        groupname: '',
        groupleader: '',
        coach: '',
        doctor: '',
        worker: '',
        tel: '',
      },
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value8: '',
      baseInfoForm: {
        sportsName: '',
        sportsGroup: '',
      },
      rules: {},
      unitname: 'dsdsds',
      tableData: [],
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    coachsubmit() {
      const datainfo = {
        unitname: this.coach["unitname"],
          groupname: this.coach["groupname"],
          groupleader: this.coach["groupleader"],
          coach: this.coach["coach"],
          doctor: this.coach["doctor"],
          worker: this.coach["worker"],
          tel: Number(this.coach["tel"]),
      }
      axios({
        baseURL,
        headers,
        method: 'post',
        url: 'coachinfo',
        data: datainfo,
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    ...mapState({
      name: 'user',
    }),
    ...mapGetters({
      doneCount: 'names',
    }),
  },
  mounted: function() {
    this.$nextTick(() => {
      axios({
        baseURL,
        headers,
        method: 'get',
        url: 'coachinfo',
      }).then((response) => {
        const res = response.data[0];
        this.coach = {
          unitname: res["unitname"],
          groupname: res["groupname"],
          groupleader: res["groupleader"],
          coach: res["coach"],
          doctor: res["doctor"],
          worker: res["worker"],
          tel: res["tel"],
        }
      });
      axios({
        baseURL,
        headers,
        method: 'get',
        url: 'applyinfo',
      }).then((response) => {
        this.tableData = response.data;
        console.log(response.data);
      });
    })
  }
}
</script>


<style lang="scss">
.sports-items-view {}
</style>
