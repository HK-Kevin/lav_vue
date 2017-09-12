<template>
    <div>
        <Alert type="success">
            <h2>{{ $t('component.teacher')}}</h2>
        </Alert>

        <Row :gutter="16">
            <Col span="8">
            <Card>
                <Row :gutter="16">
                    <Col span="5" style="width: 100%">
                    <div style="width: 100%;text-align:center;">
                        <img class="imgStyle" :src="teacher.cheng.img">
                        <h3 style="text-align: center"><a @click.prevent="getName(teacher.cheng.url)">{{eng?teacher.cheng.eng :teacher.cheng.name}}</a></h3>

                    </div>
                    </Col>

                </Row>
                <p>&nbsp&nbsp&nbsp&nbsp
{{eng ? teacher.cheng.introduceEng :teacher.cheng.introduce}}
                </p>
            </Card>

            </Col>

            <Col span="16">
            <Row :gutter="16">
                <Col span="12" v-for="(item,index) in teacher.others" :key="index">
                <div style="text-align: center">
                    <img class="imgStyle" style="width: 140px;height: 180px"
                         :src="item.img" alt="">
                    <p>
                    <h3 style="    margin-top: 20px;
    margin-bottom: 20px;font-size: 24px;"><a @click.prevent="getName(item.url)">{{eng ? item.eng :item.name}}</a></h3></p>
                </div>
                </Col>


            </Row>
            </Col>
        </Row>


    </div>
</template>
<script>

    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        methods:{
            getName(a){
                this.$router.push(a)
            }
        },
        data(){
            return {
                teacher: {
                    cheng: {
                        img: 'https://hk-kevin.github.io/vue_api/img/cls.png',
                        name: '程林松教授,博士生导师',
                        eng: 'Ls Cheng',
                        introduce: ' 程林松教授1986年7月毕业于华东石油学院开发系并获工学学士学位，1988年12月获得石油大学（北京）油气田开发工程专业硕士学位，1994年6月获石油大学（北京）油气田开发工程专业博士学位，1994年8月-1995年5月访问美国参与美国SSI科学软件公司项目协作。曾任为中国石油大学（北京）石油天然气工程学院副院长，CNPC油层物理与渗流力学重点实验室学术委员，“岩性油气藏”杂志编委，全国力学学会渗流力学专业委员会副组长。',
                        introduceEng:'',
                        url:'/team/cls'
                    }, others: [{
                        name: '李春兰高工',
                        img: 'https://hk-kevin.github.io/vue_api/img/teacher/lcl.jpg',
                        eng: 'Chuanglan Li',
                        url: '/team/lcl'
                    }, {
                        name: '黄世军副教授',
                        img: 'https://hk-kevin.github.io/vue_api/img/teacher/lcl.jpg',
                        eng: 'Huang',
                        url: '/team/hsj'
                    }, {
                        name: '薛永超副教授',
                        img: 'https://hk-kevin.github.io/vue_api/img/teacher/lcl.jpg',
                        eng: 'Xue',
                        url: '/team/xyc'
                    }, {
                        name: '曹仁义副教授',
                        img: 'https://hk-kevin.github.io/vue_api/img/teacher/lcl.jpg',
                        eng: 'Cao Ry',
                        url: '/team/cry'
                    }
                    ]
                },
                student: [{
                    year: '2016级博士',
                    stu: [{
                        name: '程明强',
                        url: '2016/cmq.png'
                    }]
                }]
            }
        }

    };
</script>
<style scoped>
    .avater {
        width: 80%;
        height: 200px;
        box-shadow: 10px 10px 10px #888888;
        border-radius: 10px;
    }

    .avater:hover {
        transform: scale(1.1);

    }

    .imgStyle {
        box-shadow: 10px 10px 10px #888888;
        border-radius: 10px;
    }
</style>