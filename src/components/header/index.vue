<template>
  <div class="header" >
    <span class="left cancel-login"><</span>
    <span  class="left header-center">密码登录</span>
    <span class="right login-by-psw"></span>
    <!-- 密码登录 -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
  .header {
    color:#fff;
    text-align: center;
    width:100%;
    height:5%;
    line-height: 250%;
    background-color: #3190e8;
    display:flex;
    justify-content: space-between;
    padding:0 10px;

    .cancel-login {
      color:#fff;
      // flex:10%
    }

    .header-center {
      color:#fff;

    }

    .login-by-psw {
      color:#fff;
      // flex:20%
    }
  }
</style>
