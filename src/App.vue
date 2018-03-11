<template>
  <div id="app">
    <navigation :active="curId" @jump="jump"></navigation>
    <div class="contra">
      <page-one class="page cur-page"></page-one>
      <page-three class="page next-page"></page-three>
      <page-two class="page"></page-two>
      <page-four class="page"></page-four>
      <page-fifth class="page"></page-fifth>
      <page-six class="page"></page-six>
    </div>
  </div>
</template>

<script>
import navigation from './pages/navigation'
import pageOne from './pages/pageOne'
import pageTwo from './pages/pageTwo'
import pageThree from './pages/pageThree'
import pageFour from './pages/pageFour'
import pageFifth from './pages/pageFifth'
import pageSix from './pages/pageSix'
export default {
  name: 'App',
  components:{
    navigation,pageOne,pageTwo,
    pageThree,pageFour,pageFifth,pageSix
  },
  data(){
    return {
      curId:0
    }
  },
  mounted(){
    this.addListen()
  },
  methods:{
    jump(val){
      if(this.curId===val){
        return
      }
      let doms = document.getElementsByClassName('page');
      if(val<this.curId){
        // 先改成对应节点
        doms[val].classList.add('pre-page')
        setTimeout(()=>{
          doms[this.curId].classList.remove('cur-page')
          doms[this.curId].classList.add('next-page')
          doms[val].classList.remove('pre-page')
          doms[val].classList.add('cur-page')
          // 把之前的节点类移除
          let m = this.curId,n=val
          this.curId = val
          setTimeout(()=>{
            doms[m].classList.remove('next-page')
            if(m!==5){
              doms[m+1].classList.remove('next-page')
            }
            if(m!==0){
              doms[m-1].classList.remove('pre-page')
            }
            if(n!==5){
              doms[n+1].classList.add('next-page')
            }
            if(n!==0){
             doms[n-1].classList.add('pre-page')
            }
          },500)
        },200)
      }else{
        doms[val].classList.add('next-page')
        setTimeout(()=>{
          doms[this.curId].classList.remove('cur-page')
          doms[this.curId].classList.add('pre-page')
          doms[val].classList.remove('next-page')
          doms[val].classList.add('cur-page')
          // 把之前的节点类移除
          let m = this.curId,n=val
          this.curId = val
          setTimeout(()=>{
            doms[m].classList.remove('pre-page')
            if(m!==5){
              doms[m+1].classList.remove('next-page')
            }
            if(m!==0){
              doms[m-1].classList.remove('pre-page')
            }
            if(n!==5){
              doms[n+1].classList.add('next-page')
            }
            if(n!==0){
              doms[n-1].classList.add('pre-page')
            }
          },500)
        },200)
      }
    },
    nextPage(){
      if(this.curId==5){
        return
      }
      let doms = document.getElementsByClassName('page');
      if(this.curId!==0){
        doms[this.curId-1].classList.remove('pre-page')
      }
      doms[this.curId].classList.remove('cur-page')
      doms[this.curId].classList.add('pre-page')
      doms[this.curId+1].classList.remove('next-page')
      doms[this.curId+1].classList.add('cur-page')
      this.curId +=1
      if(this.curId==5){
        return
      }
      doms[this.curId+1].classList.add('next-page')
    },
    prePage(){
      if(this.curId==0){
        return
      }
      let doms = document.getElementsByClassName('page');
      if(this.curId!==5){
        doms[this.curId+1].classList.remove('next-page')
      }
      doms[this.curId].classList.remove('cur-page')
      doms[this.curId].classList.add('next-page')
      doms[this.curId-1].classList.remove('pre-page')
      doms[this.curId-1].classList.add('cur-page')
      this.curId -=1
      if(this.curId==0){
        return
      }
      doms[this.curId-1].classList.add('pre-page')
    },
    addListen(){
      let that = this
      let add = false
      if (document.addEventListener) {  
            document.addEventListener("DOMMouseScroll", myWheel, false);  
        }
      document.addEventListener("mousewheel",myWheel)
      function myWheel(e){
          if(e.wheelDelta > 0){//兼容IE,Opera,Chrome
            if(add)return
            that.prePage()
            add=true
            setTimeout(()=>{
              add=false
            },500) 
            }else if(e.detail > 0){//兼容Firefox
              if(add)return
              that.prePage()
              add=true
              setTimeout(()=>{
                add=false
              },500)
            }else{  
              if(add)return
              that.nextPage()
              add=true
              setTimeout(()=>{
                add=false
              },500) 
            } 
      }
    }
  }
}
</script>

<style>

/* lobster-regular */
@font-face {
  font-family: 'Lobster';
  font-style: normal;
  font-weight: regular;
  src: url('//lib.baomitu.com/fonts/lobster/lobster-regular.eot'); /* IE9 Compat Modes */
  src: local('Lobster'), local('Lobster-Normal'),
       url('//lib.baomitu.com/fonts/lobster/lobster-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('//lib.baomitu.com/fonts/lobster/lobster-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('//lib.baomitu.com/fonts/lobster/lobster-regular.woff') format('woff'), /* Modern Browsers */
       url('//lib.baomitu.com/fonts/lobster/lobster-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('//lib.baomitu.com/fonts/lobster/lobster-regular.svg#Lobster') format('svg'); /* Legacy iOS */
}
  
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.09);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.contra{
      position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page{
  transition: all .5s ease-in-out;
  display: none;
}
.cur-page, .next-page, .pre-page {
    display: block;
}
.pre-page{
  transform: translateY(-100%);
}
.cur-page{
  transform: translateY(0);
}
.next-page{
  transform: translateY(100%);
}
</style>
