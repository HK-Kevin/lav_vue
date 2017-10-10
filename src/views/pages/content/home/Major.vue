<template>
    <Card>
        <p slot="title" style="">
            <Icon type="android-arrow-forward"></Icon>
            {{ $t('component.research')}}
        </p>
        <a href="#" slot="extra">
            <Icon type="forward"></Icon>
            {{ $t('component.more')}}
        </a>
        <img style="width: 100%" src="https://hk-kevin.github.io/vue_api/img/oilfield.jpeg" alt="">
        <div v-for="(one,index) in research" :key="index" style="margin-left: 10px">
            <p>
                <Icon type="ios-star"></Icon>
                {{eng ? one.main.eng : one.main.title}}
            </p>
            <ol style="margin-left: 15px">
                <li v-for="item in one.items" style="height: 30px">
                    <router-link  :to="item.router">{{eng ? item.eng : item.name}}</router-link>

                </li>
            </ol>
        </div>


    </Card>
</template>
<script>
    export default {
        computed:{
            eng(){
                return this.$store.state.eng
            }
        },
        data(){
            return {
                research: [{
                    main:{title: '复杂油气藏建模及数值模拟',eng:'complex oil'},
                    items: [{router: '/achievement/highWaterCut', name: '· 高含水油藏',eng:'· HighWaterCut'},
                        {router: '/achievement/carbonate', name: '· 碳酸盐岩油气藏',eng:'· HighWaterCut'},
                        {router: '/achievement/lowPerm', name: '· 低渗/致密油气',eng:'· HighWaterCut'}]
                },
                    {
                        main:{title: '致密/页岩油气渗流机理及应用',eng:'complex oil'} ,
                        items: [{router: '/achievement/tightGas', name: ' · 致密油气',eng:'· HighWaterCut'},
                            {router: '/achievement/shale', name: ' · 页岩油气',eng:'· HighWaterCut'}]
                    },
                    {
                        main: {title: ' 稠油开采理论与评价技术',eng:'complex oil'} ,
                        items: [
                            {router: '/achievement/heavyCold', name: ' · 稠油热采',eng:'· HighWaterCut'},
                            {router: '/achievement/heavyHot', name: ' · 稠油冷采',eng:'· HighWaterCut'}]
                    }
                ]
            }
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