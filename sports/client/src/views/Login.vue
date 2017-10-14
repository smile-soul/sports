<template>
  <div class="login-view">
    <el-row style="height: 100%;">
      <el-col :xs="20" :sm="10" :md="8" :lg="8" class="login-form">
        <el-card class="box-card">
          <div slot="header">
            <span style="font-size: 16px">运动会登录</span>
          </div>
          <el-form label-position="top">
            <el-form-item label="用户名">
              <el-input type="text"
                v-model="username"
                :class="{ error: loginError.username }"
                :placeholder="loginError.username"
                @focus="loginError.username=''">
              </el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password"
                v-model="password"
                v-bind:class="{ error: loginError.password }"
                v-bind:placeholder="loginError.password"
                @focus="loginError.password=''"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="login-footer">
            <el-button type="success" @click="login()">Log In</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import axios from 'axios'
import { mapActions } from 'vuex'

import { baseURL } from '../store/api'
import { USER_LOGIN } from '../store/mutation-types'

export default {
  name: 'login-view',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      loginError: {
        username: '',
        password: '',
      },
    }
  },

  methods: {
    ...mapActions([USER_LOGIN]),
    signup() {
      this.$router.push({ path: '/signup' })
    },
    login() {
      if (!this.username) {
        this.loginError.username = 'Username Required'
        return false
      } else if (!this.password) {
        this.loginError.password = 'Password Required'
        return false
      }

      const headers = {
        'Content-Type': 'application/json',
      }
      axios({
        baseURL,
        headers,
        method: 'get',
        url: 'username',
      }).then((response) => {
        console.log(response);

        this.USER_LOGIN({ user: response.data, remember: this.remember })
        const path = decodeURIComponent(this.$route.query.redirect || '/')
        this.$router.push({ path })
      }).catch((error) => {
        if (error.response.status === 401) {
          this.loginError.username = 'Username Or Password Error'
          this.username = ''
          this.password = ''
        } else {
          console.log('Server error！')
        }
      })
    },
  },
}
</script>


<style>
.login-view {
  background-color: #181818;
  height: 100%;
}
.login-view .login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-view .el-card {
  border: none;
}
.login-view .el-card__header {
  border-color: #EFF2F7;
}
.login-view .el-input.error input {
  border-color: #E0B4B4;
  border-width: 2px;
}
.login-view .el-button {
  padding: 9px 25px;
}
.login-view .login-footer {
  margin: 25px 0;
  text-align: right;
  border-bottom: 1px solid #EFF2F7;
  padding-bottom: 25px;
}
.login-view .checkbox {
  float: left;
  display: inline-block;
  margin: 6.5px 0 0;
}
</style>
