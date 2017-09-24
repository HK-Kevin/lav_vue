<template>
        <div>
            <Card style="margin-bottom: 30px">
                <p slot="title" style="text-align: center">{{news.title}} </p>
                <span style="text-align: right">日期:{{date}}</span>;
                <span style="text-align: right">作者:{{news.click}}</span>

                <p v-html=" news.content"></p>
            </Card>

        </div>
</template>
<script>
    export default {
        data(){
            return{
                news:{},
                date:''
            }
        },
        methods: {

        },
        created(){
            let idObj = this.$route.params;
            this.$http.get(`/news/oneTitle?id=${idObj.id}`).then(res => {
               this.news = res.data
                this.date = res.data.date.substring(0,10);

            })

        }
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