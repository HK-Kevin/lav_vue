<template>
            <div id="box" :ref="refRan" class="box">
                <ul>
                    <li v-for="(item,index) in lampData" :key="index"><img src="https://hk-kevin.github.io/vue_api/img/2000/yxp.png" alt=""/></li>

                </ul>
            </div>
</template>
<script>
    let utils ={
    getCss:function (curEle,attr){
        var val=null;
        var reg=null;
        if('getComputedStyle' in window){
            val=getComputedStyle(curEle,false)[attr];
        }else{
            if(attr=='opacity'){
                val=curEle.currentStyle.filter;//alpha(opacity=10)
                reg=/^alpha\(opacity[=:](\d+(\.\d+)?)\)$/g;
                //如果正则中加了全局g,test和exec都会影响lastIndex;
                // return reg.test(val)?reg.exec(val)[1]/100:1;
                /*if(reg.test(val)){
                 console.log(RegExp.$1)//拿到当前大正则的第一个小分组； RegExp.$2 拿到第二个小分组； 。。。。最大能拿到$9；
                 }*/
                return reg.test(val)?RegExp.$1/100:1;
            }
            val=curEle.currentStyle[attr];
        }
        //升级1：对单位的处理
        reg=/^(left|top|right|bottom|width|height|((margin|padding)(left|top|right|bottom)?))$/gi;//记得一定要区分大小写；
        return reg.test(attr)?parseFloat(val):val;
    }
};
    export default {
        props:['lampData'],
        data(){
            return{
                refRan:'box'+Math.round(Math.random()*6)
            }
        },
        mounted(){
            this.light()
        },
        methods:{
            light(){
                //var oBox=document.getElementById('box');
                let box = this.refRan;
                var oBox=this.$refs[box];
                var oUl=oBox.getElementsByTagName('ul')[0];
                var aLi=oUl.getElementsByTagName('li');
                var curLeft=utils.getCss(oUl,'left');

                //1.把ul的内容重新copy一份；--问题：折行 因为ul的宽度
                oUl.innerHTML+=oUl.innerHTML;
                //oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
                oUl.style.width=utils.getCss(aLi[0],'width')*aLi.length+'px';
                var timer=setInterval(function(){
                    if(curLeft<=-utils.getCss(oUl,'width')/2){
                        curLeft=0;
                    }
                    curLeft-=1;
                    oUl.style.left=curLeft+'px';
                },20);

            }
        },
        components: []
    };
</script>
<style scoped>
    .ivu-row .ivu-col .ivu-card div.ivu-card-head {

        background-color: red !important;
        font-size: 16px;
        padding: 11px 15px !important;
    }

    .carouselImg {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .box{
        overflow: hidden;
        width: 400px;
        height: 200px;
        margin:0 10px 0 0;
        position: relative;
        z-index:999;

    }
    .box ul{
        height: 200px;
        position: absolute;
        left:0;
        top:0;
    }
    .box li{
        margin: 0 20px;
        width: 150px;
        height: 200px;
        float: left;

    }
    .box li img{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>