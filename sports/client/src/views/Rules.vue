<template>
  <div class="rules-view">
    <h1>比赛规则</h1>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="甲组" name="firstTab">
        tab01
      </el-tab-pane>
      <el-tab-pane label="乙组" name="secondTab">
        tab02
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
export default {
  name: 'rules-view',
  data() {
    return {
      activeName: 'firstTab',
    }
  },
}
</script>


<style lang="scss">
.rules-view {
}
</style>
