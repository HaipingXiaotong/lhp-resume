<template>
  <div id="navigation">
      <div class="header-dot">
          <my-nav-dot :menu="menu" :active="active" @jump="jump"></my-nav-dot>
      </div>
  </div>
</template>
<script>
import MyNavDot from '../components/nav-dot'
import {Menu} from '../data'
export default {
  name:"navigation",
  data(){
      return {
          menu:Menu
      }
  },
  props:{
      active:{
          type:Number,
          default:0
      }
  },
  components:{
      MyNavDot
  },
  methods:{
      jump(val){
          this.$emit('jump',val)
      }
  }
}
</script>
<style lang="less">
#navigation{
    position: absolute;
    top: 0;
    z-index: 200;
}
</style>


