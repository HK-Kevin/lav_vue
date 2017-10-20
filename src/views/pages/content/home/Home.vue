<template>
    <Row :gutter="12">
        <Col span="7">
        <News :news=homeData.news></News>
        <Major style="margin-top: 10px"></Major>

        </Col>
        <Col span="17">
        <video src="" style="height: 400px" controls="controls" :poster="ip+homeData.video.poster"></video>
        <Team :team=homeData.team :lab=homeData.lab></Team>
        <Aticle style="margin-top: 10px"></Aticle>
        </Col>
    </Row>

</template>
<script>
    import News from './News.vue'
    import Major from './Major.vue'
    import Team from './Team.vue'
    import Aticle from './Aticle.vue'
    export default {
        data(){
            return {
                homeData: {
                }

            }
        },
        mounted(){
            this.$http.get('/homeData').then(res=>{
                console.log(res.data);
                this.homeData =res.data
            })
        },
        computed:{
            ip(){
              return this.$store.state.ip
            }
        },
        methods: {},
        components: {News, Major, Team, Aticle}
    };
</script>
<style scoped>
    .carouselImg {
        width: 100%;
        height: 200px;
    }
</style>