<template>
  <div class='order'> 
    <div class="not-login">
      <!-- <van-row  type="flex" justify="center"> -->
        <img src="@/assets/order.jpg" alt="" style="width:140px;margin-top:-70px;">
        <div style="margin-bottom:15px;">登录后查看外卖订单</div>
        <van-button  size="small" class="login-btn" type="primary" @click="jumpToLogin">立即登录</van-button>
      <!-- </van-row> -->
      <!-- <van-row type="flex" justify="center"> -->
      <!-- </van-row> -->
    </div>
    <app-tapper/>
  </div>
</template>

<script>
import appTapper from '../tapper'
export default {
  components: {
    appTapper
  },
  data() {
    return {
      
    };
  },
  computed: {},
  watch: {},
  methods: {
    jumpToLogin(){
      this.$router.push({
        name: 'login'
      })  
    }
  },
  created() {
    
  },
  mounted() {
    
  },
}
</script>

<style lang='less' scoped>
.order {
  height:100%;
  line-height:100%;
  .not-login {
    // width:100%;
    flex-direction:column;
    // justify-content:center;
    font-size:14px;
    height:100%;
    line-height:100%;
    // text-align:center;
    display:flex; 
    align-items:center;
    justify-content:center;

    // .van-button {
    //   height:30px !important;
    //   line-height:30px !important;
    //   font-size:13px;
    // }
  }
}
  
</style>