<template>
  <div id="pageThree">
      <div class="title3">
          <span>关于我的那些事</span>
      </div>
      <div class="msgs">
           <msg src="../../static/img/age.png" label="年龄/21岁"></msg>
           <msg src="../../static/img/colle.png" label="学历/本科"></msg>
           <msg src="../../static/img/here.png" label="位置/南昌"></msg>
           <msg src="../../static/img/time.png" label="就业/待业"></msg>
      </div>
      <div class="me">
        <p>大三学生，暂无经验，自学前端一年多</p>
        <p>熟悉VUE框架，了解mv*模式开发，前端自动化的重要性</p>
        <p>高效的自学能力，喜欢自己独立解决问题</p>
        <p>不完成目标，誓不罢休</p>
      </div>
  </div>
</template>
<script>
import msg from '@/components/msg'
export default {
  name:"pageThree",
  components:{
      msg
  }
}
</script>
<style lang="less">
#pageThree{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/bannerThree.jpg');
    background-size: cover;
    background-position: center;
    overflow: hidden;
    .title3{
        margin: 80px auto;
        color: #fff;
        font-size: 25px;
        text-align: center;
    }
    .msgs{
        margin: 0 auto;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .me{
        margin: 40px auto 0 auto;
        text-align: center;
        p{
            height: 40px;
            line-height: 40px;
            color: #fff;
            font-size: 20px;
        }
    }
}
</style>

