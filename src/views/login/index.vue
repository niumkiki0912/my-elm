<template>
    <div class="login">
        <div v-if="loginWay=='mobile'">
            <van-nav-bar
              title="登录"
              right-text="密码登录"
              left-arrow
              @click-right="loginWay='pwd'"
              @click-left="handleback">
            </van-nav-bar>
            <van-cell-group>
                <van-row :gutter="20">
                    <van-col span="18">
                        <van-field 
                            v-model="mobile.phoneNum" 
                            placeholder="手机号"
                            label="手机号"
                            required
                            clearable
                            size="large"
                            autocomplete="off">
                        </van-field>
                    </van-col>
                    <van-col span="6" style="margin-top:-7px;">
                        <van-button type="primary" @click="handleGetVerifyCode" size="small" v-if="!isverifyCode" :disabled="mobile.phoneNum.length<11">获取验证码</van-button>
                        <van-button type="primary" disabled size="small" v-else>已发送</van-button>
                    </van-col>
                </van-row>
                <van-field 
                      v-model="user.username" 
                      placeholder="验证码"
                      label="验证码"
                      required
                      clearable
                      size="large"
                      autocomplete="off">
                </van-field>
            </van-cell-group>
        </div>

        <div v-else>
          <van-nav-bar
            title="密码登录"
            left-arrow
            @click-left="handleback">
          </van-nav-bar>
          <van-cell-group>
            <van-field 
              v-model="user.username" 
              placeholder="手机/邮箱/用户名"
              label="账号"
              required
              clearable
              size="large"
              autocomplete="off">
            </van-field>
            <van-field 
              v-model="user.password"
              type="password"
              label="密码"
              required
              size="large"
              placeholder="密码">
            </van-field>
            <van-row :gutter="20">
              <van-col span="15">
                <van-field 
                  v-model="user.captcha_code"
                  label="验证码"
                  required
                  size="large"
                  :maxlength="4"
                  placeholder="验证码">
                </van-field>
              </van-col>
              <van-col span="5"><img v-if="captchaCodeImg" :src="captchaCodeImg" alt="" style="width:100%;"></van-col>
              <van-col span="4" style="padding-top:10px">
                <div style="font-size:12px;">看不清</div>
                <div  style="font-size:12px;color:#3190e8;cursor:pointer" @click="handleGetCaptchas">换一张</div>
              </van-col>
            </van-row>
          </van-cell-group>
        </div>
        <div style="padding:0 10px;width:100%;box-sizing:border-box;">
          <p class="login-tip">温馨提示：未注册过的账号，登录时将自动注册</p>
          <p class="login-tip">注册过的用户可凭账号密码登录</p>
          <van-button  class="login-btn" type="primary" @click="handleLogin">确定</van-button>
        </div>
    </div>
</template>

<script>
import {getCaptchas, mobileCode, login, } from '@/api/user.js'
import Cookies from 'js-cookie';

export default {
  name:'login',
  data() {
    return {
      // 初始登录方式
      loginWay: 'pwd',
      isverifyCode:false,
      // 手机登录信息
      mobile: {
        phoneNum: '',
      },
      // 账户登陆信息
      user:{
        password:'',
        username:'',
        captcha_code:''
      },
      // 图片验证码
      captchaCodeImg:'',
    }
  },
  components:{
  },
  created() {
    this.handleGetCaptchas()
  },
  methods: {
    // 表单验证
    filedValidate() {
      if(!this.user.username || !this.user.password) {
        this.$toast('用户名/密码不能为空');
        return false
      }else if(!this.user.captcha_code) {
        this.$toast('验证码不能为空');
        return false
      } 
      return true
    },

    // 获取验证码
    async handleGetCaptchas() {
      let res = await getCaptchas()
      if(res.status == 1) {
        this.captchaCodeImg = res.code
        Cookies.set('cap', res.code)
      }
    },
    // 登录
    async handleLogin() {
      let isValidate = this.filedValidate()
      if(!isValidate) {
        return 
      }else {
        let loginData = await login(this.user)
        if (loginData.user_id) {
          this.$store.commit('setUserInfo',loginData)
        }else {
          this.$dialog.alert({
            message: loginData.message
          })
        }
      }
      
    },
    handleback(){
      
    },


    // 获取手机验证码
    async handleGetVerifyCode() {
      const { phoneNum } = this.mobile
      let res = await mobileCode(phoneNum)
    },
  },
}
</script>

<style lang="less" scoped>
  .login {
    background-color: #f5f5f5;
    height: 100%;
    .van-nav-bar{
      background-color: #3190e8;
      margin-bottom:20px;
      div {
        color:#fff;
        .van-icon {
          color:#fff;
        }
      }
    }

    .van-cell-group {
      padding:0 10px;
      .van-cell {
        line-height:30px;
      }
      .van-field__control {
        background-color: #fff !important;
        color: #323233 !important;

        ::-webkit-input-placeholder {
            color: #fff;
        }
      } 
    }

    .login-btn {
      width:100%;
      color:#fff;
      box-sizing:border-box;
      margin-top:10px;
    }
    .login-tip {
      color:red;
      font-size:12px;
      margin:12px 0 0 4px;
    }
  }
</style> 
