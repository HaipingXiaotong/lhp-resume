<template>
  <div class="msg">
      <div ref="msgs" class="cir">
        <img :src="src" style="width:40px;text-align:center;" alt="sd">
      </div>
      <p>{{label}}</p> 
  </div>
</template>
<script>
export default {
  name:"msg",
  props:{
      size:{
          type:Number,
          default:100
      },
      src:{
          type:String,
          default:""
      },
      label:{
          type:String,
          default:"label"
      }
  },
  mounted(){
      this.init()
  },
  methods:{
      init(){
          let dom = this.$refs.msgs
          dom.style.width=this.size + "px"
          dom.style.height=this.size + "px"
      }
  }
}
</script>
<style lang="less" scoped>
.msg{
    position: relative;
    display: inline;
    .cir{
        background-color: rgba(7, 100, 161, 0.53);
        border-radius: 50%;
        padding: 30px;
        cursor: pointer;
        z-index: 10;
        transition: all .5s linear;
        &:hover{
            background-color: rgba(7, 100, 161, 0.9);
            transform: scale(0.95);
            &:after{
                animation: effect 1.3s ease-out 75ms;
            }
        }
        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: 0 0 0 2px rgba(255,255,255,.1);
            opacity: 0;
            -webkit-transform: scale(.9);
            transform: scale(.9);
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    p{
        padding: 10px 5px;
        color: #fff;
        text-align: center;
        text-overflow: ellipsis;
    }
}
@keyframes effect {
	0% {
		opacity: 0.3;
	}
	40% {
		opacity: 0.5;
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #1a89ce, 0 0 0 10px rgba(255,255,255,0.5);
	}
	100% {
		box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #1a89ce, 0 0 0 10px rgba(255,255,255,0.5);
		transform: scale(1.5);
		opacity: 0;
	}
}
</style>


