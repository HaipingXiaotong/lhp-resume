<template>
  <div class="nav-dot">
      <ul>
          <li v-for="(item,index) in menu" @click="jump(index)">
              <em :class="{'item-dot':true,'dot-active':index === active}">
                  <img :src="item.img" alt="sd">
              </em>
              <span class="item-title">{{item.title}}</span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"navDot",
  props:{
      menu:{
          type:Array,
          default:[]
      },
      active:{
          type:Number,
          default:0
      }
  },
  methods:{
      jump(val){
          this.$emit('jump',val)
      }
  }
}
</script>
<style lang="less" scoped>
.nav-dot{
    position: fixed;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    ul{
        list-style: none;
        padding: 0;
        li{
            line-height: 24px;
            position: relative;
            width: 24px;
            height: 24px;
            margin: 12px auto;
            .item-dot{
                position: absolute;
                top: 50%;
                left: 20px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 12px;
                height: 12px;
                background: rgba(0,0,0,.7);
                transition: all .3s ease;
                border-radius: 50%;
                opacity: 0.4;
                cursor: pointer;
                img{
                    width: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    opacity: 0;
                }
                &:hover{
                    transform: translateY(-50%) scale(3);
                    opacity: 1;
                    img{
                        opacity: 1;
                    }
                }
                &:hover + span{
                    opacity: 1;
                }
                
            }
            .dot-active{
                    transform: translateY(-50%) scale(3);
                    opacity: 1;
                    img{
                        opacity: 1;
                    }
                }       
            .item-title{
                position: absolute;
                opacity: 0;
                left:-70px;
                width: 60px;
                font-size: 14px;
                text-align: center;
                background: rgba(0,0,0,.7);
                color: #FFF;
                border-radius: 3px 0 0 3px;
                font-weight: 700;
                &:after{
                    content: "";
                    position: absolute;
                    right: -12px;
                    width: 0;
                    height: 0;
                    border-top: 12px solid transparent;
                    border-left: 12px solid rgba(0,0,0,.7);
                    border-bottom: 12px solid transparent;
                }
            }
        }
    }
}
</style>


