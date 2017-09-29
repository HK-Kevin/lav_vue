<template>
        <div>

            <Card style="margin-bottom: 30px">
                <p slot="title">国际交流</p>
                <Row>
                    <Col span="8">

                    <p class="item" v-for="(item,index) in internationalNews" @click="goOneNews(item._id)" :key="index"><span>
                {{index+1}} .{{item.title}}
            </span></p>
                    </Col>
                   <Col span="16">
                    <Carousel autoplay>
                        <CarouselItem v-for="(item,index) in imgData" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 400px;width: 100%" :src="ip+item.img" alt="">
                            </div>
                        </CarouselItem>

                    </Carousel>
                    </Col>
                </Row>
            </Card>
            <Row :gutter="6">

               <Col span="12">
                <Card style="margin-bottom: 30px">
                    <p slot="title">学术活动</p>
                    <Carousel autoplay>
                        <CarouselItem v-for="(item,index) in imgData" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 200px;width: 100%" :src="ip+item.img" alt="">
                            </div>
                        </CarouselItem>

                    </Carousel>
                    <p class="item" v-for="(item,index) in searchNews" @click="goOneNews(item._id)" :key="index"><span>
                {{index+1}} .{{item.title}}
            </span></p>
                </Card>
                </Col>
                <Col span="12">
                <Card style="margin-bottom: 30px">
                    <p slot="title">文体活动</p>
                    <Carousel autoplay>
                        <CarouselItem v-for="(item,index) in imgData" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 200px;width: 100%" :src="ip+item.img" alt="">
                            </div>
                        </CarouselItem>

                    </Carousel>
                    <p class="item" v-for="(item,index) in sportNews" @click="goOneNews(item._id)" :key="index"><span>
                {{index+1}} .{{item.title}}
            </span></p>
                </Card>
                </Col>
            </Row>


        </div>
</template>
<script>
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
            return{
                imgData:[{img:'/news/sd.png'},{img:'/news/ty.png'}],
                internationalNews:{},
                searchNews:{},
                sportNews:{},
                title_page: 1,
                totalPage: 100,
                limit: 3,

            }
        },
        methods: {
            goOneNews(a){
                this.$router.push('/news/'+a)
            }

        },
        created(){
            let searchCon = {page: this.title_page, limit: this.limit, type: '国际交流'};
            this.$http.post('/news/typeTitles', searchCon).then(res => {
                this.internationalNews =res.data
            })
             searchCon = {page: this.title_page, limit: this.limit, type: '学术'};
            this.$http.post('/news/typeTitles', searchCon).then(res => {
                this.searchNews =res.data
            })
            searchCon = {page: this.title_page, limit: this.limit, type: '文体活动'};
            this.$http.post('/news/typeTitles', searchCon).then(res => {
                this.sportNews =res.data
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