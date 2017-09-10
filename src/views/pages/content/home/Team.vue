<template>
    <Row>
        <Col span="16">
        <Card>
            <p slot="title" style="">
                <Icon type="android-arrow-forward"></Icon>
                {{ $t('nav.team')}}
            </p>
            <a href="/team" slot="extra">
                <Icon type="forward"></Icon>
                {{ $t('component.more')}}
            </a>
            <Lamp :lampData="team"></Lamp>
        </Card>
        </Col>
        <Col span="8">
        <Card style="overflow: hidden">
            <p slot="title" style="">
                <Icon type="android-arrow-forward"></Icon>
                {{ $t('nav.lab')}}
            </p>
            <a href="/contact" slot="extra">
                <Icon type="forward"></Icon>
                {{ $t('component.more')}}
            </a>
            <Lamp :lampData = lab></Lamp>
        </Card>
        </Col>
    </Row>
</template>
<script>
    import Lamp from  './Lamp.vue'
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
        props:['team','lab'],
        mounted(){

        },
        components: {Lamp}
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
    }
</style>