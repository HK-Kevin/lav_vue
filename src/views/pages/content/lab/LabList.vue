<template>
    <div>
        <Alert><h2>实验研究</h2></Alert>
        <div class="navbox" v-for="(item,index) in landmarkData" :key="index">
            <h2>{{eng ? item.eng : item.title}}</h2>
            <ul class="nav">
                <li v-for="(one ,ind) in item.child" :key="ind"><a @click.prevent="getName(one.url)">{{ind +1}}. {{eng ? one.eng :
                    one.name}}</a></li>

            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        data(){
            return {
                landmarkData: [{
                    title: '一、稠油油藏相关实验', eng: '', child: [
                        {name: '隔夹层对双水平井SAGD蒸汽腔的影响', eng: '', url: '/labOne/sagd'},
                        {name: '海上稠油热采开发效果室内物理模拟实验', eng: '', url: '/labOne/seaOil'},
                    ]
                }, {
                    title: '二、低渗油藏相关实验实验', eng: '', child: [
                        {name: '微尺度流动实验', eng: '', url: '/labOne/micro'},
                        {name: '致密砂岩水驱动态裂缝实验', eng: '', url: '/labOne/frac'},
                        {name: '特低渗透油藏开发电模拟实验研究', eng: '', url: '/labOne/sim'},
                    ]
                },
                    {
                        title: '三、复杂油藏相关实验实验', eng: '', child: [
                        {name: '气顶边水的三维气驱实验', eng: '', url: '/labOne/gastop'},
                        {name: '平板模型水驱油实验', eng: '', url: '/labOne/waterFloodOil'}
                    ]
                    }],
            }
        },
        methods: {

                getName(a){
                    this.$router.push(a)
                }

        },
        components: {}
    };
</script>
<style scoped>
    .ivu-menu-item {
        border-bottom: 1px solid rgba(41, 110, 169, .2);
    }

    .item:hover {
        color: #1b6d85;
        cursor: pointer;
        margin-left: -3px;
        border-right: 3px solid green;
    }

    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .navbox a, img {
        border: 0;
    }

    .demo {
        margin: 10px auto;
        width: 100%;
    }

    .navbox {
        float: left;
        width: 100%;
        margin-left: 20px;
    }

    .navbox ul.nav {
        width: 90%;
        padding: 20px 0 20px 0;

    }

    .navbox ul.nav li {
        margin: 5px 0 0 0;
    }

    .navbox ul.nav li a {
        font-size: 18px;
        background-repeat: no-repeat;
        background-image: url(https://hk-kevin.github.io/vue_api/study/style/images/img/border.png);
        background-color: #FFFFFF;
        color: #174867;
        padding: 7px 15px 7px 15px;
        width: 85%;
        display: block;
        text-decoration: none;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        -webkit-box-shadow: 2px 2px 4px #EDEDED;
        -moz-box-shadow: 2px 2px 4px #888;
        -o-box-shadow: 2px 2px 4px #888;
        border-left: 0px solid #CCCCCC;
        border-right: 1px solid #E3E3E3;
        border-bottom: 1px solid #E3E3E3;
        border-top: 1px solid #E3E3E3;
        box-shadow: 2px 2px 4px #EDEDED;
    }

    .navbox ul.nav li a:hover {
        background: #ebebeb url(https://hk-kevin.github.io/vue_api/study/style/images/img/border.png) no-repeat;
        color: #67a5cd;
        padding: 7px 15px 7px 30px;
    }

</style>