<template>
  <div id="pageTwo">
    <div class="skill-title">
      <span>部分技术栈</span>
    </div>
    <div class="knowledge">
      <div class="know-left">
        <ul ref="outCircle" class="out-circle">
          <li v-for="item in outCircles" :style="{backgroundColor:item.bc}">{{item.skill}}</li>
        </ul>
        <ul ref="inCircle" class="in-circle">
          <li v-for="item in inCircle" :style="{backgroundColor:item.bc}">{{item.skill}}</li>
        </ul>
      </div>
      <div class="know-right">
        <p>熟练使用vue2.x及各种类库的指令封装</p>
        <p>向往PC/APP/微信三平台前端研发</p>
        <p>喜欢组件封装，能脱离库书写JS代码</p>
        <p>代码有较高的可维护性</p>
      </div>
    </div>
  </div>
</template>
<script>
import {outCircle,inCircle} from '../data.js'
export default {
  name:"pageTwo",
  data(){
    return {
      outCircles:outCircle,
      inCircle:inCircle
    }
  },
  mounted(){
    this.addUlCss()
  },
  methods:{
    addUlCss(){
      let out = this.$refs.outCircle.getElementsByTagName("li")
      let inn = this.$refs.inCircle.getElementsByTagName("li")
      let n = -4,m = 0,o = -4,p = 0
      for(let x of out){
        x.style.animation = ani("outX","outY",n-=2,m-=2)
      }
      for(let x of inn){
        x.style.animation = ani("inX","inY",o-=4,p-=4)
      }
    }
  }
}
function ani(objX,objY,x,y){
  return `${objX} 8s cubic-bezier(.36,0,.64,1) ${x}s infinite alternate,${objY} 8s cubic-bezier(.36,0,.64,1) ${y}s infinite alternate`
}
</script>
<style lang="less">
#pageTwo{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: url('../../static/bannerTwo.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  .skill-title{
    margin: 0 auto;
    margin-top: 100px;
    width: 300px;
    font-size: 50px;
    color: #333;
    span{
      letter-spacing: 10px;
      font-family: "迷你简蝶语";
    }
  }
  .knowledge{
    margin: 20px auto 0 auto;
    max-width: 800px;
    // min-width: 750px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .know-left{
      position: relative;
      text-align: center;
      width: 300px;
      color: #FFF;
      padding: 5px;
      font-size: 10px;
      ul{
        list-style: none;
      }
      .out-circle{
        width: 242px;
        height: 242px;
        border: 4px dashed #999;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;
        li{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: absolute;
          text-align: center;
          line-height: 50px;
        }
      }
      .in-circle{
        width: 142px;
        height: 142px;
        border: 4px dashed #999;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 50px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        li{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          text-align: center;
          line-height: 40px;
        }
      }
    }
    .know-right{
      text-align: center;
      color: #FFF;
      line-height: 24px;
      font-size: 18px;
    }
    p{
      margin:18px 0;
    }
  }
}
@keyframes outX{
 0% {
    left: -25px;
}
100% {
    left: 215px;
} 
}
@keyframes outY{
0% {
    top: -25px;
}

100% {
    top: 215px;
}
}
@keyframes inX{
 0% {
    left: -20px;
}
100% {
    left: 120px;
} 
}
@keyframes inY{
0% {
   top: 120px; 
}
100% {
  top: -20px;
    
}
}
</style>


