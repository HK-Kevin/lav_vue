<template>
        <div>

            <Card style="margin-bottom: 30px">
                <p slot="title">国际交流</p>
                <Row>
                    <Col span="10">

                   <div style="height: 270px">
                       <p class="item" style="height: 30px;font-size: 14px" v-for="(item,index) in internationalNews" @click="goOneNews(item._id)" :key="index"><span style="overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;width: 300px;display: inline-block">
                {{index+1+9*(title_page-1)}} .{{item.title}}
            </span> <span style="float: right;margin-right: 10px">{{item.date.slice(0,10)}}</span></p>
                   </div>
                    <Page
                            :current="1"
                            :total="interTotalPage"
                            simple
                            :page-size="9"
                            @on-change="interChange"
                    ></Page>
                    </Col>
                   <Col span="14">
                    <Carousel autoplay>
                        <CarouselItem v-for="(item,index) in imgData.internationalNews" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 300px;width: 100%" :src="ip+item" alt="">
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
                        <CarouselItem v-for="(item,index) in imgData.searchNews" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 200px;width: 100%" :src="ip+item" alt="">
                            </div>
                        </CarouselItem>

                    </Carousel>
                   <div style="height: 270px">
                       <p class="item" style="height: 30px;font-size: 14px" v-for="(item,index) in searchNews" @click="goOneNews(item._id)" :key="index"><span class="spanStyle">
                {{index+1+9*(study_page-1)}} .{{item.title}}
            </span><span style="float: right;margin-right: 10px">{{item.date.slice(0,10)}}</span></p>
                   </div>
                    <Page
                            :current="1"
                            :total="studyTotalPage"
                            simple
                            :page-size="9"
                            @on-change="studyChange"
                    ></Page>
                </Card>
                </Col>
                <Col span="12">
                <Card style="margin-bottom: 30px">
                    <p slot="title">文体活动</p>
                    <Carousel autoplay>
                        <CarouselItem v-for="(item,index) in imgData.sportNews" :key="index">
                            <div class="demo-carousel">
                                <img style="height: 200px;width: 100%" :src="ip+item" alt="">
                            </div>
                        </CarouselItem>

                    </Carousel>
                   <div style="height: 270px">
                       <p class="item" style="height: 30px;font-size: 14px" v-for="(item,index) in sportNews" @click="goOneNews(item._id)" :key="index"><span class="spanStyle">
                {{index+1+9*(sport_page-1)}} .{{item.title}}
            </span><span style="float: right;margin-right: 10px">{{item.date.slice(0,10)}}</span></p>
                   </div>
                    <Page
                            :current="1"
                            :total="sportTotalPage"
                            simple
                            :page-size="9"
                            @on-change="sportChange"
                    ></Page>
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
                imgData:{},
                internationalNews:{},
                searchNews:{},
                sportNews:{},
                title_page: 1,
                interTotalPage: 100,
                studyTotalPage: 100,
                study_page:1,
                sportTotalPage: 100,
                sport_page:1,
                limit: 9,

            }
        },
        methods: {
            goOneNews(a){
                this.$router.push('/news/'+a)
            },
            interChange(val) {
                this.title_page = val;
                this.searchInter();
            },
            studyChange(val) {
                this.study_page = val;
                this.searchStudy();
            },
            sportChange(val){
                this.sport_page = val;
                this.searchSport();
            },
            searchInter() {
                let searchCon = {page: this.title_page, limit: this.limit, type: '国际交流'};
                this.$http.post('/news/typeTitles', searchCon).then(res => {
                    this.internationalNews = res.data.data;
                    this.interTotalPage =  res.data.count
                })
            },
            searchStudy(){
                let  searchCon = {page: this.study_page, limit: this.limit, type: '学术'};
                this.$http.post('/news/typeTitles', searchCon).then(res => {
                    this.searchNews = res.data.data;
                    this.studyTotalPage =  res.data.count
                })
            },
            searchSport(){
                let  searchCon = {page: this.sport_page, limit: this.limit, type: '文体活动'};
                this.$http.post('/news/typeTitles', searchCon).then(res => {
                    this.sportNews =res.data.data;
                    this.sportTotalPage =  res.data.count

                })
            }

        },
        created(){
            this.$http.get('/newsImg').then(res=> {
                 this.imgData = res.data;
            });
           this.searchInter();
           this.searchStudy();
           this.searchSport()
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
        font-size: 16px;
        margin-left: -3px;
        border-right: 3px solid green;
    }
    .spanStyle{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 400px;
        display: inline-block
    }
</style>