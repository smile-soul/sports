import axios from 'axios'
import { USER_LOGIN } from '../mutation-types'
import { baseURL, headers } from '../api';

const module = {
  state: {
    username: '',
    password: '',
    loginError: {
      username: '',
      password: '',
    },
  },
  actions: {
    [USER_LOGIN]({ commit, state }, data) {
      axios({
        baseURL,
        headers,
        method: 'post',
        url: 'username',
        data,
      }).then((response) => {
        const res = JSON.parse(response.data);
        if (res.auth) {
          if (res.type === '0') {
            // const path = decodeURIComponent(this.$route.query.redirect || '/')
            window.location = '/';
          } else {
            //   const path = decodeURIComponent(this.$route.query.redirect || '/baoming')
            window.location = '/baoming';
          }
        } else {
          state.loginError.username = 'Username Or Password Error'
          state.username = ''
          state.password = ''
        }
      }).catch((error) => {
        state.loginError.username = 'Username Or Password Error'
        state.username = ''
        state.password = ''
      });
    },
  },
}
export default module;
