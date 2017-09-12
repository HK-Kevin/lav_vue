<template>
    <div>
        <Card v-for="(item,index) in cardData" :key="index" style="margin-bottom: 30px">
            <p slot="title">{{eng ? item.eng : item.name}}</p>
            <p class="item" v-for="(one,ind) in item.child" :key="ind"><span>
                {{ind+1}} .{{eng ? one.eng :one.title}}
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
                achieveData: {
                    program: [{
                        name: '国家基金',
                        eng: 'fund',
                        child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                    },
                        {
                            name: '“973”国家基础理论研究',
                            eng: '973',
                            child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                        },
                        {
                            name: '国家重大专项',
                            eng: 'nation',
                            child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                        },
                        {
                            name: '省部级科研项目',
                            eng: 'province',
                            child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                        }],
                    prize: [{
                        name: '科研获奖',
                        eng: 'fund',
                        child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                    },
                        {
                            name: '教学获奖',
                            eng: '973',
                            child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                        }],
                    patent: [{
                        name: '申请专利',
                        eng: '',
                        child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                    },
                        {
                            name: '软件著作权',
                            eng: '',
                            child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]
                        }],
                    2017:[{
                        name: '2017年发表论文',
                        eng: '',
                        child: [{title: '肖鹏,邹明. 制作填砂管模型的填砂压实装置, 发明专利, 申请号：201710240046.4', eng: ''}]}]
                }
            }
        },
        methods: {

            getName(a){
                this.$router.push(a)
            }
        },
        watch: {
            '$route': function (newValue) {
                let id = newValue.params.id;
                this.cardData = this.achieveData[id];
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