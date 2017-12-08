<template>
        <div>
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> 招生信息</p>
            </Card>
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.contact')}}</p>

                <p class="contact" v-for="(item,index) in contact" :key="index"><Icon :type="item.icon"></Icon><span style="font-size: 16px;margin-left: 5px">{{eng ? item.eng : item.name}}</span></p>

                <div  id="container" ></div>
                <baidu-map class="bm-view" ak="C442db13ee343023e84546b6765dfcff"  :center="{lng: 116.25398,lat: 40.224471}" :zoom="15">
                    <bm-marker :position="{lng: 116.25398, lat: 40.224471}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-label content="中国石油大学（北京）" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -105, height: 40}"/>
                    </bm-marker>
                </baidu-map>
            </Card>
        </div>


</template>

<script>
    import {BaiduMap} from 'vue-baidu-map'
    import {BmMarker} from 'vue-baidu-map'
    import {BmLabel} from 'vue-baidu-map'
    import Major from '../home/Major.vue'
    export default {
        computed:{
            eng(){
                return this.$store.state.eng
            }
        },
        data(){
            return{
                contact:[
                    {name:'北京市昌平区府学路18号',eng:'18 Fuxue Road, Bejing',icon:'ios-home'},
                    {name:'中油大厦712',eng:'712 ZY building',icon:'card'},
                    {name:'邮编: 102200',eng:'Zip code:102200',icon:'ios-pricetags'},
                    {name:'Email: lscheng@cup.edu.cn',eng:'Email: lscheng@cup.edu.cn',icon:'ios-email'},
                    {name:'Tel: 010-89733218',eng:'Tel: 010-89733218',icon:'ios-telephone'}

                ]
            }
        },
        mounted(){

        },

        components:{Major, BaiduMap,BmMarker,BmLabel}
    };
</script>
<style scoped>
    .contact{
        padding: 5px 0
    }
    .bm-view{
        width: 100%;
        height:400px;
    }
</style>