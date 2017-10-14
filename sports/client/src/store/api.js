import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });


const baseURL = 'http://localhost:10010/'

function httpRequest() {
  NProgress.start()
  const config = {
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  const user = JSON.parse(sessionStorage.getItem('user')) ||
    JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    config.auth = {
      username: user.token,
      password: '',
    }
  }

  return axios.create(config)
}

function handleError(error) {
  NProgress.done()
  if (error.response.status === 401) {
    // token 无效的情况
    window.location.href = '/login'
  } else {
    console.log('网络错误！')
  }
  return Promise.reject(error)
}

function httpGet(url, config) {
  return httpRequest().get(url, config).then((response) => {
    NProgress.done()
    return response
  }).catch(handleError)
}

function httpPut(url, data, config = {}) {
  data = JSON.stringify(data)
  return httpRequest().put(url, data, ...config).then((response) => {
    NProgress.done()
    return response
  }).catch(handleError)
}

function httpPost(url, data, config = {}) {
  config.data = JSON.stringify(data)
  return httpRequest().post(url, data, ...config).then((response) => {
    NProgress.done()
    return response
  }).catch(handleError)
}

function httpDelete(url, config = {}) {
  return httpRequest().delete(url, config).then((response) => {
    NProgress.done()
    return response
  }).catch(handleError)
}

export { baseURL, httpGet, httpPut, httpPost, httpDelete }
