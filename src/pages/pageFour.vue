<template>
  <div id="pageFour">
      <div class="title">
          <h3>经历</h3>
      </div>
      <div ref="experience" @mousemove="init" @mouseout="out" class="contrain">
          <div class="img">
              <img src="/static/expre.png" alt="">
          </div>
          <div class="body">
            <h3>某某公司就业</h3>
            <h4>201*-至今</h4>
            <h4>web前端开发工程师</h4>
            <h4>less vue jq等库文件</h4>
            <ul>
                <li>高度组件化、模块化思维，拥有各平台调试能力</li>
                <li>同期学习ES6及vue等体会函数式编程思想</li>
            </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'pageFour',
  methods:{
      init(e){   
          let exp = this.$refs.experience
          let x = e.offsetX,y=e.offsetY
        //   设置为相对中心点位置 中心点坐标为（375,175）
        x=(x-375)/46
        y=(y-175)/35
        exp.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
      },
      out(){
           let exp = this.$refs.experience
           exp.style.transform = `rotateY(0deg) rotateX(0deg)`
      }
  }
}
</script>
<style lang="less">
#pageFour{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/static/bannerFour.jpg');
    background-size: cover;
    background-position: center;
    overflow: hidden;
    .title{
        margin: 80px auto 40px auto;
        color: #000;
        font-size: 25px;
        text-align: center
    }
    .contrain{
        margin: 0 auto;
        width: 750px;
        height: 350px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 -3px 15px rgba(0,0,0,.4);
        transition: all .6s linear,all .6s linear;
        overflow: hidden;
        transform-style: preserve-3d;
        display: flex;
        .img{
            width: 200px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            img{
                max-width: 200px;
            }
        }
        .body{
            margin-left: 30px;
            width: 100%;
            padding: 15px 20px;
            color: rgba(36, 177, 81, 0.67);
            h3{
                line-height: 40px;
                font-size: 20px;
            }
            h4{
                line-height: 35px;
                font-size: 15px;
            }
            ul{
                margin-top: 10px;
                list-style: none;
                padding: 0;
            }
            li{
                line-height: 30px;
                position: relative;
                color: #000;
                &:before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -15px;
                    transform: translateY(-50%);
                    border-radius: 50%;
                    height: 10px;
                    width: 10px;
                    background: rgba(36,177,81,0.67);
                }
            }
        }
    }
}
</style>

