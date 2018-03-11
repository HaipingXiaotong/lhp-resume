<template>
  <div id="pageOne" key="pageOne">
    <!-- <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles> -->
      <div class="contrain">
        <!-- <div class="border"></div> -->
        <div class="avatar" :style="{backgroundImage:avatar}"></div>
        <div class="person-title">
          <span style="font-size:120px">P</span>
          <p class="zh-ch">个人简历</p>
          <p class="zh-en"><span style="color:#0295A7">ers</span>onal <span style="color:#0295A7">re</span>sume</p>
        </div>
          <div class="title1">
            <h3>过放荡不羁的生活，容易得像顺水推舟，但是要结识良朋益友，却难如登天。 —— 巴尔扎克</h3>
          </div>
        <div class="grow">
            <p class="item" v-for="item in personMsg">
                <i style="font-size:30px;" class="material-icons">{{item.icon}}</i>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="msg" v-html="item.msg"></span>  
            </p>
        </div>
      </div>
  </div>
</template>
<script>
import {personMsg,avatar} from '../data'
export default {
  name:"pageOne",
  data(){
    return{
      personMsg:personMsg,
      avatar:avatar
    }
  },
  created(){
    console.log(this.$router)
  }
}
</script>
<style lang="less" >
a{
  color: #fff;
}
#pageOne{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../static/banner.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  .contrain{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
  .avatar{
    margin: 0 auto;
    margin-top: 100px;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
    box-shadow: 0 0 3px 4px #fff;
    border-radius: 50%;
    // background-image: url('/static/avatar.jpg');
    background-size: cover;
    background-position: center;
  }
  .person-title{
    position: absolute;
    top: 30px;
    left: 50px;
    width: 300px;
    height: auto;
    color: #fff;
    text-shadow: 5px 5px 3px #000;
    pointer-events: painted;
    // transform: rotate(-30deg);
    .zh-ch{
      position: absolute;
      top: 39px;
      left: 80px;
      line-height: 50px;
      letter-spacing:10px;
      font-size: 32px;
    }
    .zh-en{
      position: absolute;
      top: 85px;
      left: 40px;
      letter-spacing: 2px;
      font-size: 25px;
    }
  }
  
    .title1{
      margin: 20px auto;
      border-bottom: 2px solid rgba(255, 255, 255, 0.6);
      padding: 5px 0;
      text-align: center;
      width: 80%;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      h3{
        letter-spacing: 2px;
      }
    }
  .grow{
    margin: 20px auto;
    height: 300px;
    width: 300px;
    pointer-events: painted;
    color: #fff;
    .item{
      margin-top: 8px;
      width: 100%;
      height: 40px;
      font-size: 15px;
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .msg{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }
    }
  }
}
</style>

