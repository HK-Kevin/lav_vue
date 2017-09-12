<template>
    <div>
        <Card v-for="(item,index) in tempData" :key="index" style="margin-bottom: 30px">
            <p slot="title">{{eng ? item.eng : item.type}}</p>
            <div style="width: 100%;text-align: center"  v-for="(one,ind) in item.child" :key="ind" id="child.id">         <!--<p>{{one.name}}</p>-->
                <Alert type="success"><h2>{{index+1}} . {{eng?one.eng:one.name}}</h2></Alert>
                <img style="width: 100%" :src="one.img" alt="">
            </div>

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
                tempData:{},
                markData: {
                    highWaterCut:[{
                        type: '高含水', eng: '', child: [{
                            name: '纳孔-微缝全息表征方法',
                            eng: '',
                            img: 'https://hk-kevin.github.io/vue_api/img/research/nk.png',
                            id: '12'
                        }]
                    }],
                    carbonate:[{
                        type: '页岩油气藏渗流机理', eng: '', child: [{
                            name: '纳孔-微缝全息表征方法',
                            eng: '',
                            img: 'https://hk-kevin.github.io/vue_api/img/research/nk.png',
                            id: ''
                        }]
                    }],
                    lowPerm:[{
                        type: '低渗/致密油气', eng: '', child: [{
                            name: '纳孔-微缝全息表征方法',
                            eng: '',
                            img: 'https://hk-kevin.github.io/vue_api/img/research/nk.png',
                            id: 'nk'
                        }]
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
            '$route': function (newValue) {
                let id = newValue.params.id;
                this.tempData = this.markData[id];


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