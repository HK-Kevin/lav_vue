<template>
        <Card>
            <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.news')}}</p>

            <a href="##" slot="extra" >
                <Icon type="forward"></Icon>
                <router-link to="/news"> {{ $t('component.more')}}</router-link>
            </a>
            <Carousel autoplay >
                <CarouselItem v-for="(item,index) in news.img" :key="index">
                    <div class="demo-carousel" >
                        <img class="carouselImg" :src="ip+item" alt="">
                    </div>
                </CarouselItem>

            </Carousel>
            <p class="item" v-for="(item,index) in news.title">
                <router-link style="color: black" :to="item.ip">{{index +1}} .   {{eng ? item.eng :item.name}}</router-link>
                <a href="##"></a>
            </p>

        </Card>
</template>
<script>
    export default {
        props:['news'],
        computed:{
            eng(){
                return this.$store.state.eng;
            },
            ip(){
                return this.$store.state.ip;
            }
        }

    };
</script>
<style scoped>
    .ivu-row .ivu-col .ivu-card div.ivu-card-head{

        background-color: red!important;
        font-size: 16px;
        padding: 11px 15px!important;
    }
.carouselImg{
    width: 100%;
    height: 200px;
}
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