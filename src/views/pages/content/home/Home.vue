<template>
    <Row :gutter="12">
        <Col span="7">
        <News :news=homeData.news></News>
        <Major></Major>

        </Col>
        <Col span="17">
        <video src="" style="height: 400px" :poster="ip+homeData.video.poster"></video>
        <Team :team=homeData.team :lab=homeData.lab></Team>
        <Aticle></Aticle>
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
                    /*video: {url: '', poster: 'https://hk-kevin.github.io/vue_api/img/123.png'},
                    article: [
                        'Cheng L, Gu H, Huang S. A comprehensive mathematical model for estimating oil drainage rate in SAGD process considering wellbore/formation coupling effect[J]. Heat & Mass Transfer, 2016:1-19.',
                        'Huang S, Xiong H, Wei S, et al. Physical simulation of the interlayer effect on SAGD production in mackay river oil sands[J]. Fuel, 2016, 183:373-385.',
                        'Cao R, Wang Y, Cheng L, et al. A New Model for Determining the Effective Permeability of Tight Formation[J]. Transport in Porous Media, 2016, 112(1):21-37.',
                        'Jia P, Cheng L, Huang S, et al. Pressure-Transient Analysis of a Finite-Conductivity Inclined Fracture Connected to a Slanted Wellbore[J]. Spe Journal, 2016.'
                    ],
                    contact: [
                        {name: '北京市昌平区府学路18号', eng: '18 Fuxue Road, Bejing', icon: 'ios-home'},
                        {name: '中油大厦712', eng: '712 ZY building', icon: 'card'},
                        {name: '邮编: 102200', eng: 'Zip code:102200', icon: 'ios-pricetags'},
                        {name: 'Email: lscheng@cup.edu.cn', eng: 'Email: lscheng@cup.edu.cn', icon: 'ios-email'},
                        {name: 'Tel: 010-89733218', eng: 'Tel: 010-89733218', icon: 'ios-telephone'}

                    ],
                    research: [{
                        main: {title: '复杂油气藏建模及数值模拟', eng: 'complex oil'},
                        items: [{router: '/highWaterCut', name: '· 高含水油藏', eng: '· HighWaterCut'},
                            {router: '/carbonate', name: '· 碳酸盐岩油气藏', eng: '· HighWaterCut'},
                            {router: '/lowPerm', name: '· 低渗/致密油气', eng: '· HighWaterCut'}]
                    },
                        {
                            main: {title: '致密/页岩油气渗流机理及应用', eng: 'complex oil'},
                            items: [{router: '/tightOil', name: ' · 致密油气', eng: '· HighWaterCut'},
                                {router: '/shaleGas', name: ' · 页岩油气', eng: '· HighWaterCut'}]
                        },
                        {
                            main: {title: ' 稠油开采理论与评价技术', eng: 'complex oil'},
                            items: [
                                {router: '/heavyHotOil', name: ' · 稠油热采', eng: '· HighWaterCut'},
                                {router: '/heavyColdOil', name: ' · 稠油冷采', eng: '· HighWaterCut'}]
                        }
                    ],
                    news: {
                        img: ['https://hk-kevin.github.io/vue_api/img/news/jl1.png', 'https://hk-kevin.github.io/vue_api/img/news/jl1.png', 'https://hk-kevin.github.io/vue_api/img/news/jl1.png', 'https://hk-kevin.github.io/vue_api/img/news/jl1.png'],
                        title: ['2017年6月邀请University of Oklahoma邬星儒进行学术讲座', '2017年6月邀请University of Oklahoma邬星儒进行学术讲座', '2017年6月邀请University of Oklahoma邬星儒进行学术讲座', '2017年6月邀请University of Oklahoma邬星儒进行学术讲座']
                    },
                    team: ['https://hk-kevin.github.io/vue_api/img/2000/yxp.png', 'https://hk-kevin.github.io/vue_api/img/2000/yxp.png', 'https://hk-kevin.github.io/vue_api/img/2000/yxp.png'],
                    lab: ['https://hk-kevin.github.io/vue_api/img/2000/yxp.png', 'https://hk-kevin.github.io/vue_api/img/2000/yxp.png', 'https://hk-kevin.github.io/vue_api/img/2000/yxp.png']*/
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