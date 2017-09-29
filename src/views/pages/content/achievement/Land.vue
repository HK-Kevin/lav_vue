<template>
    <div>

        <div class="navbox" v-for="(item,index) in landmarkData" :key="index">
            <h5>{{eng ? item.eng : item.title}}</h5>
            <ul class="nav">
                <li v-for="(one ,ind) in item.child" :key="ind"><router-link :to="one.url">{{ind +1}}. {{eng ? one.eng : one.name}}</router-link></li>

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
                landmarkData: [{title: '页岩油气藏渗流机理', eng: '', child: [
                        {name: '纳孔-微缝全息表征方法',eng:'',url:'/achievement/shale#sj'},
                        {name: '流动机理表征及建模',eng:'',url:''},
                        {name: '天然裂缝与人工裂缝耦合模拟',eng:'',url:''},
                        {name: '产能评价模型及动态分析方法',eng:'',url:''},
                        {name: '页岩气井试井解释方法',eng:'',url:''},
                        {name: '基于FMM的储量动用规律表征',eng:'',url:''},
                        {name: '产能不确定分析与评价方法',eng:'',url:''},
                        ]}],

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
    }

    .navbox ul.nav {
        width: 400px;
        padding: 20px 0 20px 0;
        background: url(https://hk-kevin.github.io/vue_api/study/style/images/img/shad2.png) no-repeat;
    }

    .navbox ul.nav li {
        margin: 5px 0 0 0;
    }

    .navbox ul.nav li a {
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