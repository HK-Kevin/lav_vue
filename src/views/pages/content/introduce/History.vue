<template>
    <Card>
        <p slot="title" style="">
            <Icon type="android-arrow-forward"></Icon>
            {{ $t('nav.introduce')}}
        </p>
<div v-if="!eng" v-html="introduce.introduce ">

</div>
        <div v-else v-html="introduce.eng "></div>


    </Card>
</template>
<script>
    export default {
        computed:{
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },
        data(){
            return {
                introduce:{}
            }
        },
        created(){
            this.$http.get('/introduce').then(res=>{
                this.introduce = res.data;
            })
        }

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