<template>
        <Row>
            <Col span="16">
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.achievement.paper')}}</p>
                <a href="##" slot="extra" >
                    <Icon type="forward"></Icon>
                    <router-link to="/achievement/2016"> {{ $t('component.more')}}</router-link>

                </a>
                <p v-for="(item,index) in article" :key="index"><Icon type="ios-book-outline"></Icon>{{item}}</p>
            </Card>
            </Col>
            <Col span="8">
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.contact')}}</p>
                <a href="##" slot="extra" >
                    <Icon type="forward"></Icon>
                    <router-link to="/contact"> {{ $t('component.more')}}</router-link>
                </a>
                <p class="contact" v-for="(item,index) in contact" :key="index"><Icon :type="item.icon"></Icon><span>{{eng ? item.eng : item.name}}</span></p>

            </Card>
            </Col>
        </Row>
</template>
<script>
    export default {
        computed:{
            eng(){
                return this.$store.state.eng
            }
        },
        data(){
            return{
                article:[
                        'Cheng L, Gu H, Huang S. A comprehensive mathematical model for estimating oil drainage rate in SAGD process considering wellbore/formation coupling effect[J]. Heat & Mass Transfer, 2016:1-19.',
                        'Huang S, Xiong H, Wei S, et al. Physical simulation of the interlayer effect on SAGD production in mackay river oil sands[J]. Fuel, 2016, 183:373-385.',
                        'Cao R, Wang Y, Cheng L, et al. A New Model for Determining the Effective Permeability of Tight Formation[J]. Transport in Porous Media, 2016, 112(1):21-37.'
                ],
                contact:[
                        {name:'北京市昌平区府学路18号',eng:'18 Fuxue Road, Bejing',icon:'ios-home'},
                    {name:'中油大厦712',eng:'712 ZY building',icon:'card'},
                    {name:'邮编: 102200',eng:'Zip code:102200',icon:'ios-pricetags'},
                    {name:'Email: lscheng@cup.edu.cn',eng:'Email: lscheng@cup.edu.cn',icon:'ios-email'},
                    {name:'Tel: 010-89733218',eng:'Tel: 010-89733218',icon:'ios-telephone'}

                        ]
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

   .contact{
       font-size: 14px;
   }
    .contact span{
        margin-left: 10px;
    }
</style>