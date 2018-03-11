<template>
  <div id="pageSix">
      <div class="title">
          <h3>交 流</h3>
      </div>
      <div class="contrain">
          <div class="one">
              <span style="color:red">成功</span>
              <span style="color:rgba(0, 231, 255, 0.88)">兴趣</span>
              <span style="color:#9f00ff">爱好</span>
              <span style="color:rgb(0, 255, 33)">代码</span>
          </div>
          <div class="two">
              <p>重视一个问题深入了解</p>
              <p>对代码的热爱，对作品的满意</p>
              <p>注重效率，看重时间</p>
              <p>前端路上，一片迷茫，大佬带我飞吧</p>
              <p>一起去看更远的世界</p>
          </div>
          <div class="three">
              <ul>
                  <li v-for="item in links">
                      <a :href="item.href">
                          <img :src="item.src" alt="sd">
                      </a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="underline">
          <div class="bottom">
            <p>F12（command+option+J）有彩蛋</p>
            <p>All Rights Reserved</p>
            <p>********* Copyright © 2015 - 2017</p>
          </div>
      </div>
  </div>
</template>
<script>
import {link} from '../data'
export default {
  name:'pageSix',
  data(){
      return{
          links:link
      }
  }
}
</script>
<style lang="less">
#pageSix{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('/static/bannerSix.jpg');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .title{
        margin:60px auto 30px auto;
        text-align: center;
        font-size: 25px;
        color: #96ad3a;
    }
    .contrain{
        margin: 0 auto;
        width: 40%;
        max-width: 400px;
        .one{
            width: 100%;
            line-height: 30px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            font-size: 20px;
            font-weight: 700;
        }
        .two{
            width: 100%;
            p{
                margin: 20px 0;
                line-height: 30px;
                color: #666;
                font-size: 16px;
                font-weight: 600;
                text-align: center;
            }
        }
        .three{
            margin: 50px auto 0 auto;
            width: 80%;
            ul{
                list-style: none;
                padding: 0;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            li{
                position: relative;
                border-radius: 50%;
                border:1px solid #515151;
                width: 40px;
                height: 40px;
                img{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    max-height: 25px;
                }
            }
        }
    }
    .underline{
        position: absolute;
        bottom: 20px;
        width: 100%;
        height: 80px;
        border-top: 1px solid #515151;
        .bottom{
            text-align: center;
            p{
                line-height: 30px;
                color: rgba(81, 81, 81, 0.71);
                font-size: 13px;
            }
        }
    }
}
</style>
