<template>

    <Card>
        <p slot="title"> {{ $t('nav.team')}}</p>
        <a href="##" slot="extra">
            <Icon type="forward"></Icon>
            <router-link to="/team"> {{ $t('component.more')}}</router-link>
        </a>
        <Carousel autoplay >
            <CarouselItem v-for="(item,index) in teacherData" :key="index">
                <div class="demo-carousel">
                    <img :src="ip+item.img" style="width: 100%" alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <p>
            <router-link v-for="(item,index) in teacherData" :key="index" :to="item.url" class="list">
                <Icon type="university"></Icon>
                {{eng ? item.eng : item.name}}</router-link>
        </p>
    </Card>

</template>
<script>

    export default {
        data(){
            return{
                teacherData:[]
            }
        },
        computed: {
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },
        created(){
            this.$http.get('/teacherList').then(res=> {
                console.log(res.data)
                this.teacherData = res.data;
            })
        }
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