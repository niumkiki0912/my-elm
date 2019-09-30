<template>
  <div class='home'> 
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item to="/" >
        <span><van-icon class="iconfont" class-prefix="my-elm-changyonglogo40" name="changyonglogo40"/></span>
        <span>外卖</span>
      </van-tabbar-item>
      <van-tabbar-item to="/search">
        <span><van-icon class="iconfont" class-prefix="my-elm" name="sousuo" /></span>
        <span>搜索</span>
      </van-tabbar-item>
      <van-tabbar-item to="/order">
        <span><van-icon class="iconfont" class-prefix="my-elm" name="single" /></span>
        <span>订单</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span><van-icon class="iconfont" class-prefix="my-elm" name="wode" /></span>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:'appTapper',
}
</script>

<style lang='less' scoped>
.home {
  .ele-btn {
    // font-size:35px;
  }

  .van-tabbar-item {
    font-size:14px;

    span {
      display: block;
      text-align: center;
      margin-bottom: 3px;
    }
  }
}
  
</style>
