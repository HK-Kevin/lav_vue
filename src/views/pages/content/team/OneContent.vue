<template>
    <div>
        <div style="width: 100%;text-align: center">
            <img style="width: 200px;height: 300px" :src="ip+one.img" alt="">
        </div>
        <Card>
            <p slot="title" style="font-size: 18px">{{eng ? one.name.eng : one.name.china}}</p>
            <div v-html="one.introduce.china"></div>
        </Card>
        <Card style="margin-top: 30px">
            <p slot="title" style="font-size: 18px">教研成果</p>
            <ul>
                <li v-for="(item,index) in one.paperList" :key="index" class="list">{{index+1}} .{{item}}</li>


            </ul>

        </Card>
    </div>
</template>
<script>
    import {teacherData} from './teacherData'

    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },

        data(){
            return {
                teacherData:{},
                teacher: {},
                one: {}

            }
        },
        created(){
            this.$http.get('/teacherIntroduce').then(res=> {
                this.teacherData = res.data.teacherIntroduce;
                let id = this.$route.params.id;
                this.one = this.teacherData[id];
                console.log(this.teacherData);
                console.log(123);
            })
        },
        mounted(){
            let id = this.$route.params.id;
            this.one = this.teacherData[id]

        },
        watch: {
            '$route': function (newValue) {
                let id = newValue.params.id;
                this.one = this.teacherData[id];
            }
        },
        methods: {}

    };
</script>
<style scoped>
    .ivu-card-head {
        background-color: #0b97c4 !important;
    }

    .list {
        color: #555;
        position: relative;
        display: block;
        padding: 10px 15px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
        cursor: pointer;
        font-size: 14px;
    }

    .list:hover {
        background-color: #f5f5f5;
        border-right: 3px solid green;
    }
</style>