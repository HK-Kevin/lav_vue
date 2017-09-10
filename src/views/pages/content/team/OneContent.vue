<template>
    <div>
      <div style="width: 100%;text-align: center">
          <img style="width: 200px;height: 300px" :src="one.img" alt="">
      </div>
        <Card>
            <p slot="title">{{eng ? one.name.china : one.name.eng}}</p>
            <div v-html="one.introduce.china"></div>
        </Card>
        <Card style="margin-top: 30px">
            <p slot="title">教研成果</p>
            <ul>
                <li v-for="(item,index) in one.paperList" :key="index" class="list">{{index+1}} .{{item}}</li>


            </ul>

        </Card>
    </div>
</template>
<script>
    import {teacherData} from './teacherData'

    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },

        data(){
            return {
                teacher:{
                   },
                one:{img:'https://hk-kevin.github.io/vue_api/img/teacher/xyc.jpg',
                    name:{china:'薛永超',eng:'Xue'},
                    introduce:{
                        china:'<div style="width:100%; height:100%;font-size: 18px" class="w-e-text"><p>职位职称：副教授，硕士生导师</p><p>教育经历：1994-1998 大庆石油学院 本科;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1998-2001 大庆石油学院 硕士 ;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2001-2004 石油大学（北京） 博士 ;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-现在 中国石油大学（北京）教师 ;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2010-2011 美国TEXAS A&amp;M大学 访问学者 ;</p><p>&nbsp;电子邮箱： xyc75@cup.edu.cn　</p><p>&nbsp;联系电话： 010-89733218　　&nbsp;</p><p>&nbsp;研究方向： 油气藏开发理论与系统工程 　　</p><p>&nbsp;教学情况： 《油藏工程》、《油气田开发基础》 　　</p><p>&nbsp;教师简介：薛永超，男，博士，副教授，薛永超博士主要从事油藏精细描述、油藏地质建模等研究。承担和完成了国家重大科技攻关、石油企业科技攻关、油田委托等科研课 题多项。其研究成果获省部级3次，在有关学术刊物及学术会议上发表论文40余篇，其中被EI收录10篇，SCI收录2篇，ISTP收录2篇。培养硕士研究生10多名。</p></div>',
                        eng:''
                    },
                    paperList:['Cheng L, Gu H, Huang S. A comprehensive mathematical model for estimating oil drainage rate in SAGD process considering wellbore/formation coupling effect[J]. Heat & Mass Transfer, 2016:1-19.','Cheng L, Gu H, Huang S. A comprehensive mathematical model for estimating oil drainage rate in SAGD process considering wellbore/formation coupling effect[J]. Heat & Mass Transfer, 2016:1-19.','Cheng L, Gu H, Huang S. A comprehensive mathematical model for estimating oil drainage rate in SAGD process considering wellbore/formation coupling effect[J]. Heat & Mass Transfer, 2016:1-19.']
                }

            }
        },
        mounted(){
            let id = this.$route.params.id;
            this.one =teacherData[id]

        },
        watch:{
            '$route':function (newValue) {
                let id = newValue.params.id;
                this.one =teacherData[id];
            }
        },
        methods: {


        }

    };
</script>
<style scoped>
    .ivu-card-head{
        background-color: #0b97c4!important;
    }

    .list{
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
    .list:hover{
        background-color: #f5f5f5;
        border-right:3px solid  green ;
    }
</style>