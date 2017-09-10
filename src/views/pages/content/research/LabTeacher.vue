<template>

    <Card>
        <p slot="title"> {{ $t('nav.team')}}</p>
        <a href="/team" slot="extra">
            <Icon type="forward"></Icon>
            {{ $t('component.more')}}
        </a>
        <Carousel autoplay v-model="value2">
            <CarouselItem v-for="(item,index) in teacherData" :key="index">
                <div class="demo-carousel">
                    <img :src="item.img" style="width: 100%" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <p>
            <a v-for="(item,index) in teacherData" :key="index" :href="item.url" class="list">
                <Icon type="university"></Icon>
                {{eng ? item.eng : item.name}}</a>
        </p>
    </Card>

</template>
<script>

    export default {
        props: ['teacherData'],
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        mounted(){

        },
    };
</script>
<style scoped>
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