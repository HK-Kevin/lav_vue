<template>
    <div>
        <Card v-for="(item,index) in cardData" :key="index" style="margin-bottom: 30px">
            <p slot="title">{{eng ? item.name : item.eng}}</p>
            <p class="item" v-for="(one,ind) in item.child" :key="ind"><span>
                {{ind+1}} .{{one}}
            </span></p>
        </Card>
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
                cardData: {},
                achieveData:{
                    program: [{
                        name: '国家基金',
                        eng: 'fund',
                        child: [' 页岩储层纳孔微缝耦合系统全息表征方法研究》（编号：41672132）；负责人：薛永超；起止时间：2017年-2020年。']
                    },
                        {
                            name: '“973”国家基础理论研究',
                            eng: '973',
                            child: [' 页岩储层纳孔微缝耦合系统全息表征方法研究》（编号：41672132）；负责人：薛永超；起止时间：2017年-2020年。']
                        },
                        {
                            name: '国家重大专项',
                            eng: 'nation',
                            child: [' 页岩储层纳孔微缝耦合系统全息表征方法研究》（编号：41672132）；负责人：薛永超；起止时间：2017年-2020年。']
                        },
                        {
                            name: '省部级科研项目',
                            eng: 'province',
                            child: [' 页岩储层纳孔微缝耦合系统全息表征方法研究》（编号：41672132）；负责人：薛永超；起止时间：2017年-2020年。']
                        }],
                    prize: [{
                        name: '科研获奖',
                        eng: 'fund',
                        child: [' 程林松, 黄世军, 赵凤兰, 李春兰, 曹仁义．《超稠油多介质辅助重力泄油渗流机理及开发关键技术》, 2015年中国石油和石化工业联合会科技进步三等奖。']
                    },
                        {
                            name: '教学获奖',
                            eng: '973',
                            child: [' 页岩储层纳孔微缝耦合系统全息表征方法研究》（编号：41672132）；负责人：薛永超；起止时间：2017年-2020年。']
                        }]
                }
            }
        },
        methods: {

            getName(a){
                this.$router.push(a)
            }
        },
        watch:{
            '$route':function (newValue) {
                let id = newValue.params.id;
                this.cardData =this.achieveData[id];
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

</style>