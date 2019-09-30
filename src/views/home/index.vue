<template>
  <div class='home'> 
    <van-nav-bar>
      <span slot="left"  class="left-address"><van-icon name="location" color="#fff" style="margin-top:-3px;"/>&nbsp;&nbsp;{{address}}</span>
      <span slot="right" class="right-other">扫码</span>
      <span slot="right" class="right-other">天气</span>
    </van-nav-bar>
    <app-tapper/>
  </div>
</template>

<script>
import appTapper from '../tapper'
export default {
  name:'home',
  components: {
    appTapper
  },
  data() {
    return {
      address:'四惠'
    };
  },
  computed: {},
  watch: {},
  methods: {
    
  },
  created() {
    
  },
  mounted() {
    
  },
}
</script>

<style lang='less' scoped>
  .van-nav-bar{
      background-color: #3190e8;
      span {
        color:#fff
      }
      .left-address {
        font-weight:700;
        font-size:16px;
      }

      .right-other {
        font-size:12px;
        margin-left:10px;
      }
  }
</style>