<template>
    <div>
        <Row :gutter="16">
            <Col span="6">
            <Major style=""></Major>
            </Col>
            <Col span="18">
            <lab-list></lab-list>
            <div style="width: 600px;height: 200px;margin-left: 30px;clear: both">
               <vue-img-slider
                       style="width: 600px;height: 200px;"
                       :type="'left'"
                       margin="'20px'"
                       :speed="20"
                       :imgData="demoData"
                       :txtPos="['40%','10%']"
               ></vue-img-slider>
           </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import  Major from '../home/Major.vue'
    import  LabList from './LabList.vue'
    import  VueImgSlider from './VueImgSlider.vue'
    export default {
        data(){
            return {
                demoData: [
                    {
                        img: "/lab/fyf.jpg"

                    },
                    {
                        img: '/lab/gjcsagd.png'
                    },
                    {
                        img: "/lab/hshyb.jpg"
                    },
                    {
                        img: "/lab/lby.jpg"
                    },
                    {
                        img: "/lab/qtzz.jpg"
                    },
                    {
                        img: "/lab/sq1.jpg"
                    },
                    {
                        img: "/lab/sq2.jpg"
                    },
                    {
                        img: "/lab/sw.jpg"
                    },
                    {
                        img: "/lab/swmn.jpg"
                    },
                    {
                        img: "/lab/xwj.jpg"
                    }
                    ],
                labData: {}
            }
        },
        methods: {},
        created(){
            this.$http.get('/homeData').then(res=> {
                this.labData = res.data.lab;
                console.log(this.labData)
            })
        },
        components: {Major, LabList, VueImgSlider}
    };
</script>
<style scoped>

</style>