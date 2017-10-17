<template>
  <div class="sports-items-view">
    <h1>比赛项目</h1>
    <h4>{{ name.user }}</h4>
    <el-tabs type="border-card">
      <el-tab-pane label="男子报名">
        <el-table :data="tableDatamen" border style="width: 100%">
          <el-table-column prop="nubmerid" label="号码" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="itemone" label="比赛项目1" width="140">
          </el-table-column>
          <el-table-column prop="itemtwo" label="比赛项目2" width="140">
          </el-table-column>
          <el-table-column prop="itemthree" label="比赛项目3" width="140">
          </el-table-column>
          <el-table-column prop="itemfour" label="比赛项目4" width="140">
          </el-table-column>
          <el-table-column prop="dateday" label="出生日期" width="120">
          </el-table-column>
          <el-table-column prop="resid" label="注册ID" width="120">
          </el-table-column>
          <el-table-column prop="type" label="比赛类型" width="140">
          </el-table-column>
          <el-table-column prop="opertion" label="操作" width="140">
            <template scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableDatamen)" type="text" size="small">
                移除
              </el-button>
              <el-button type="text" @click.native.prevent="changeRow(scope.$index, tableDatamen)" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item>
            <el-button type="primary" @click="saveTable(tableDatamen)">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="女子报名">
         <el-table :data="tableDatawomen" border style="width: 100%">
          <el-table-column prop="nubmerid" label="号码" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="itemone" label="比赛项目1" width="140">
          </el-table-column>
          <el-table-column prop="itemtwo" label="比赛项目2" width="140">
          </el-table-column>
          <el-table-column prop="itemthree" label="比赛项目3" width="140">
          </el-table-column>
          <el-table-column prop="itemfour" label="比赛项目4" width="140">
          </el-table-column>
          <el-table-column prop="dateday" label="出生日期" width="120">
          </el-table-column>
          <el-table-column prop="resid" label="注册ID" width="120">
          </el-table-column>
          <el-table-column prop="type" label="比赛类型" width="140">
          </el-table-column>
          <el-table-column prop="opertion" label="操作" width="140">
            <template scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableDatawomen)" type="text" size="small">
                移除
              </el-button>
              <el-button type="text" @click.native.prevent="changeRow(scope.$index, tableDatawomen)" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-form ref="baseInfoForm" label-width="100px" :model="baseInfoForm" :rules="rules">
          <el-form-item>
            <el-button type="primary" @click="saveTable(tableDatawomen)">保存</el-button>
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
      <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
            <el-form :label-position="labelPosition" label-width="80px">
            <el-form-item label="号码">
              <el-input v-model="editData.nubmerid"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="editData.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="editData.sex"></el-input>
            </el-form-item>
            <el-form-item label="比赛项目1">
              <el-input v-model="editData.itemone"></el-input>
            </el-form-item>
            <el-form-item label="比赛项目2">
              <el-input v-model="editData.itemtwo"></el-input>
            </el-form-item>
            <el-form-item label="比赛项目3">
              <el-input v-model="editData.itemthree"></el-input>
            </el-form-item>
            <el-form-item label="比赛项目4">
              <el-input v-model="editData.itemfour"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-input v-model="editData.dateday"></el-input>
            </el-form-item>
            <el-form-item label="注册id">
              <el-input v-model="editData.resid"></el-input>
            </el-form-item>
            <el-form-item label="比赛类型">
              <el-input v-model="editData.type"></el-input>
            </el-form-item>
          </el-form>
              <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="savedata()">确 定</el-button>
              </span>
              </el-dialog>
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
      dialogVisible: false,
      labelPosition: 'right',
      itemone: '',
      itemtwo: '',
      baoming: [{
        numberid: '',
        name: '',
        itemone: '',
        itemtwo: '',
        itemthree: '',
        itemfour: '',
        sex: '',
        dateday: '',
        resid: '',
        type: '',
      }],
      value8: '',
      coach: {
        unitname: '',
        groupname: '',
        groupleader: '',
        coach: '',
        doctor: '',
        worker: '',
        tel: '',
      },
      options: [],
      baseInfoForm: {
        sportsName: '',
        sportsGroup: '',
      },
      rules: {},
      unitname: 'dsdsds',
      tableDatamen: [],
      editData: {},
      tableDatawomen: [],
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    changeSelect(data, items) {
      console.log(data);
      console.log(items);
    },
    saveTable(tableDatamen) {
      axios({
        baseURL,
        headers,
        method: 'post',
        url: 'applyinfo',
        data: tableDatamen,
      });
    },
    changeRow(index, rows) {
      this.dialogVisible = true;
      this.editData = rows[index];
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    savedata(){
      this.dialogVisible = false;
      const newdata = [];
      newdata.push(this.editData);
      axios({
        baseURL,
        headers,
        method: 'put',
        url: 'applyinfo',
        data: newdata,
      });
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
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
        this.tableDatamen = response.data;
      });
      axios({
        baseURL,
        headers,
        method: 'get',
        url: 'applyinfowomen',
      }).then((response) => {
        this.tableDatawomen = response.data;
      });
      axios({
        baseURL,
        headers,
        method: 'get',
        url: 'item',
      }).then((response) => {
        response.data.map((value) => {
          this.options.push({
            value: value["item"],
            label: value["item"],
            number: value["limitnumber"]
          })
        });
      });
    })
  }
}
</script>


<style lang="scss">
.sports-items-view {}
</style>
