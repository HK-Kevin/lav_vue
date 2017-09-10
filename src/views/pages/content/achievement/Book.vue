<template>
    <div>
        <Card v-for="(item,index) in bookData" :key="index" style="margin-bottom: 30px">
            <p slot="title">{{eng ? item.type : item.eng}}</p>
            <div style="width: 100%;text-align: center" v-for="(one,ind) in item.child" :key="ind">
                <img :src="one.img" alt="">
                <p>
                    <Icon type="ios-bookmarks"></Icon>
                    <span style="font-size: 18px">{{one.info}}</span></p>
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
                bookData: [{
                    type: '出版教材', eng: '', child: [{
                        name: '高等渗流力学',
                        eng: '',
                        img: 'https://hk-kevin.github.io/vue_api/img/book/sl.png',
                        info: '渗流力学，石油工业出版社，程林松主编。2011年'
                    }]
                }]

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

</style>