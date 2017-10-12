<template>
  <div class="topbar">
    <div class="topbar-left">
      <span class="site-title">运动会编排系统</span>
    </div>
    <div class="topbar-center">
      <a href="javascript:;" @click="">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <div class="topbar-right">
      <i class="material-icons">notifications_none</i>
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          {{ user.username }}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userInfo">用户信息</el-dropdown-item>
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'
import { USER_LOGOUT, LEFTBAR_SWITCH } from '../store/mutation-types'

export default {
  name: 'topbar',
  data() {
    return {
      leftbarWide: this.$store.state.leftbar.wide,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    ...mapActions([USER_LOGOUT, LEFTBAR_SWITCH]),
    // 左侧导航切换
    leftbarSwitch() {
      this.leftbarWide = !this.leftbarWide
      this.LEFTBAR_SWITCH({ leftbar: { wide: this.leftbarWide } })
    },
    logout() {
      this.USER_LOGOUT()
      this.$router.push({ path: '/login' })
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
      }
    },
  },
}
</script>


<style lang="scss">
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 56px;
  padding: 0 30px 0 20px;
  color: #fff;
  background-color: #222222;
  .topbar-left,
  .topbar-center,
  .topbar-right {
    display: inline-block;
    line-height: 56px;
  }
  .material-icons {
    vertical-align: top;
    line-height: 56px;
  }
  .topbar-left {
    min-width: 175px;
  }
  .topbar-right {
    float: right;
  }
  .topbar-right .el-dropdown {
    float: right;
    margin-left: 15px;
    color: #a8a8a8;
  }
  .topbar-right .el-dropdown-link {
    cursor: pointer;
  }
}
.el-dropdown-menu {
  font-size: 14px !important;
  color: #a8a8a8 !important;
  background-color: rgba(55, 55, 55, .9) !important;
  border: none !important;
  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: rgba(34, 34, 34, 0.7) !important;
    color: inherit !important;
  }
}
</style>
