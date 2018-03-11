<template>
  <div id="pageFifth">
    <div class="title">
        <h3>作品</h3>
    </div>
    <div class="contrain">
        <ul>
            <li>
                <h3>XTHP(聊天室)</h3>
                <p>1.用户：包括登录、注册、个人信息管理、群组信息管理
                    2.消息：实现了群聊、私聊。包括表情图片文件发送，其中表情可以快捷输入，图片可以使用ctrl+v粘贴发送
                    3.群组：可以修改群组信息，还可以通过链接加入群组
                    4.favico提醒：消息提醒
                    5.屏蔽用户：实现屏蔽私聊，以及桌面消息提醒（部分浏览器支持）（更新）</p>
                <a href="http://haiping313.cn"><i class="material-icons">link</i></a>
            </li>
            <li><h3>个人简历</h3>
                <p>介绍自己的一些认识，在简历中谈及了自己学习的技术以及想走的方向。希望能得到大家的认可，希望自己能有
                    一份好的工作，希望自己能遇到一些志同道合的人
                </p>
                <a href="http://haiping313.cn"><i class="material-icons">link</i></a>
            </li>
            <li><h3>未完待续</h3>
                <!-- <p>介绍自己的一些认识，在简历中谈及了自己学习的技术以及想走的方向。希望能得到大家的认可，希望自己能有
                    一份好的工作，希望自己能遇到一些志同道合的人
                </p>-->
                <a href="http://haiping313.cn"><i class="material-icons">link</i></a> 
            </li>
            <li>
                <h3>未完待续</h3>
                <!-- <p>介绍自己的一些认识，在简历中谈及了自己学习的技术以及想走的方向。希望能得到大家的认可，希望自己能有
                    一份好的工作，希望自己能遇到一些志同道合的人
                </p>-->
                <a href="http://haiping313.cn"><i class="material-icons">link</i></a> 
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'pageFifth'
}
</script>
<style lang="less">
#pageFifth{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url('/static/bannerFifth.jpg');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .title{
        margin:60px auto 30px auto;
        text-align: center;
        font-size: 25px;
        color: #fff;
    }
    .contrain{
        margin: 0 auto;
        max-width: 1100px;
        height: 300px;
        ul{
            list-style: none;
            padding: 0;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
        }
        li{
            max-width: 500px;
            margin-top: 15px;
            width: 45%;
            height: 180px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,.3);
            padding:10px 20px;
            h3{
                line-height: 50px;
                font-size: 20px;
                height: 50px;
                color: #465;
            }
            p{
                width: 100%;
                white-space: initial;
                text-overflow: ellipsis;
                color: #333;
                font-size: 14px;
                max-height: 60px;
                line-height: 20px;
                overflow: hidden;
            }
            a{
                margin: 10px 0;
                display: inline-block;
                padding: 3px 60px;
                width: 150px;
                height: 30px;
                line-height: 30px;
                background-color: rgba(0,0,0,.03);
                border-radius: 5px;
                border:1px solid rgba(0,0,0,.03);
                text-decoration: none;
                transition: all .3s;
                &:hover{
                    background-color: rgba(0,0,0,.3);
                }
            }
        }
    }
}
</style>

