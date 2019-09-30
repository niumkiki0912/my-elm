// import fetchRequest from '@/utils/fetchRequest.js'
// console.log(fetchRequest)

import request from '@/utils/request.js'

// export const login = ({ username, password, captcha_code }) => {
//   fetchRequest.post('/v2/login', { username, password, captcha_code })
// }

// 获取图片验证码
export const getCaptchas = () => request.ajax({
  method:'POST',
  url: '/v1/captchas',
  data:{}
}).then(res => res.data)

// 获取短信验证码
export const mobileCode = (phoneNum) => request.ajax({
  url:'/v4/mobile/verify_code/send',
  method:'POST',
  data: {
    mobile:phoneNum,
    scene: 'login',
    type: 'sms'
  }
}).then(res => res.data)

// 手机验证码登录
export const mobileLogin = ({code, mobile, validate_token}) => request.ajax({
  method: 'POST',
  url: '/v1/login/app_mobile',
  data: {
      code,
      mobile,
      validate_token
  }
}).then(res => res.data)

// 账号登录
export const login = ({ username, password, captcha_code }) => request.ajax({
  method:'POST',
  url: '/v2/login',
  data: {
    username,    
    password,    	
    captcha_code,
  }
}).then(res => res.data)

