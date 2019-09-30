import axios from 'axios'
import qs from 'qs';

let ajaxUrl = 'http://elm.cangdu.org'
axios.defaults.baseURL = ajaxUrl;//定义公共地址


const ajax = axios.create({
  baseURL:ajaxUrl,
  timeout: 1000,
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
});

const ajaxJson = axios.create({
  baseURL:ajaxUrl,
  timeout:1000,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' }
})
const ajax3 = axios.create({
  baseURL:ajaxUrl,
  timeout:1000,
  headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
  transformRequest:[data => {
    data = qs.stringify(data)
    return data
  }]
})

let request_interceptors_success = config => {
  if(config.method === 'post') {
    config.withCredentials = true
  }
  return config
}


[
  ajax,
  ajaxJson,
  ajax3
].forEach(item => {
  item.interceptors.request.use(request_interceptors_success)
})

let request = {
  ajax,
  ajaxJson,
  ajax3
}


export default request