<template>
        <Card>
            <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.contact')}}</p>
            <a href="/contact" slot="extra" >
                <Icon type="forward"></Icon>
                {{ $t('component.more')}}
            </a>
            <p class="contact" v-for="(item,index) in contact" :key="index"><Icon :type="item.icon"></Icon><span style="font-size: 16px;margin-left: 5px">{{eng ? item.eng : item.name}}</span></p>
            </div>
            <div  id="container" ></div>
            </div>
        </Card>


</template>
<script>
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
            this.runMap()
        },
        methods: {
            runMap(){
                var map = new BMap.Map("container");          // 创建地图实例
                var point = new BMap.Point(116.25398,40.224471);  // 创建点坐标
                /* map.centerAndZoom(point, 18);   */              // 初始化地图，设置中心点坐标和地图级别
                var local = new BMap.LocalSearch(map, {
                    renderOptions:{map: map}
                });
                local.search("北京市昌平区府学路18号");
                console.log(map)
            }

        },
        components:{Major}
    };
</script>
<style scoped>
    .contact{
        padding: 5px 0
    }
    #container{
        width: 100%;
        height:400px;
    }
</style>