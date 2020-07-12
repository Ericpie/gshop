<template>
  <div>
  123
    <router-view /> 
    <FooterGuide></FooterGuide>
  </div> 
</template>

<script type="text/ecmascript-6">
import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default { 
  components: { 
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
@import "./common/stylus/mixins.styl"; 
</style>
