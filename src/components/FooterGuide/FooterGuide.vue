<template>
  <div class="footer-guide">

    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="goto('/msite')">
      <span>
         <i class="iconfont icon-waimai" :class="{on: $route.path === '/msite'}"></i>
      </span>
      <span>首页 </span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/search'}"  @click="goto('/search')">
      <span>
         <i class="iconfont icon-search2"></i>
      </span>
      <span>搜索</span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="goto('/order')">
      <span>
         <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单 </span>
    </span>

    <span class="guide-item" :class="{on: $route.path === '/profile'}"  @click="goto('/profile')">
      <span>
         <i class="iconfont icon-geren"></i>
      </span>
      <span>个人 </span>
    </span>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide',

  methods: {
    // 编程式跳转链接
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style   lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.footer-guide
   top-border-1px(#ccc)
   display flex
   position fixed
   left 0
   bottom 0
   height 50px 
   width 100%
   .guide-item
      width 25%
      display flex
      flex-direction column 
      text-align center
      justify-content:center
      &.on 
         color: $green
      span
        margin-top 3px
        font-size 12px
        i 
          font-size 22px

</style>
