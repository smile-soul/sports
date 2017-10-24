<template>
  <div class="signup-view">
    <el-row style="height: 100%;">
      <el-col :xs="20" :sm="10" :md="8" :lg="8" class="signup-form">
        <el-card class="box-card">
          <div slot="header">
            <span style="font-size: 16px">SIGN UP</span>
          </div>
          <el-form label-position="top">
            <el-form-item label="Username">
              <el-input
                v-model="username"
                :class="{ error: signupError.username }"
                :placeholder="signupError.username"
                @focus="signupError.username=''">
              </el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input
                v-model="email"
                :class="{ error: signupError.email }"
                :placeholder="signupError.email"
                @focus="signupError.email=''">
              </el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password"
                v-model="password"
                :class="{ error: signupError.password }"
                :placeholder="signupError.password"
                @focus="signupError.password=''">
              </el-input>
            </el-form-item>
          </el-form>
          <div style="text-align: right;">
            <el-button type="primary" @click="signup">Sign Up</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>


<script>
import axios from 'axios'
import { SHA256 } from 'crypto-js'
import { mapActions } from 'vuex'

import { baseURL } from '../store/api'
import { USER_LOGIN } from '../store/mutation-types'

export default {
  name: 'signup-view',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      signupError: {
        username: '',
        email: '',
        password: '',
      },
    }
  },

  methods: {
    ...mapActions([USER_LOGIN]),
    signup() {
      if (this.username === '') {
        this.signupError.username = 'Username Required'
        return false
      } else if (this.email === '') {
        this.signupError.email = 'Email Required'
        return false
      } else if (this.password === '') {
        this.signupError.password = 'Password Required'
        return false
      }

      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        username: this.username,
        email: this.email,
        password: SHA256(this.password).toString(),
      }
      axios({
        baseURL,
        headers,
        method: 'post',
        url: '/users',
        data: JSON.stringify(data),
      }).then((response) => {
        this.USER_LOGIN({ user: response.data, remember: false })
        this.$router.push({ path: '/' })
      }).catch((error) => {
        if (error.response.status === 400) {
          const formError = error.response.data.error_form
          Object.keys(formError).forEach((key) => {
            this[key] = ''
            this.signupError[key] = formError[key][0]
          })
        } else {
          console.log('Server Error')
        }
      })
    },
  },

}
</script>


<style>
.signup-view {
  background-color: #181818;
  height: 100%;
}
.signup-view .signup-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.signup-view .el-input.error input {
  border-color: #E0B4B4;
  border-width: 2px;
}
.signup-view .el-button {
  padding: 9px 25px;
}
</style>
