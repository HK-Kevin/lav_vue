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
                        <img class="imgStyle" :src="ip+teacher.cheng.img">
                        <h3 style="text-align: center"><a @click.prevent="getName(teacher.cheng.url)">{{eng?teacher.cheng.eng
                            :teacher.cheng.name}}</a></h3>

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
                         :src="ip+item.img" alt="">
                    <p>
                    <h3 style="    margin-top: 20px;
    margin-bottom: 20px;font-size: 24px;"><a @click.prevent="getName(item.url)">{{eng ? item.eng :item.name}}</a>
                    </h3></p>
                </div>
                </Col>


            </Row>
            </Col>
        </Row>


    </div>
</template>
<script>

    export default {
        data(){
            return {
                teacher: {
                },
                student: [{year: '2016级博士',
                    stu: [{
                        name: '程明强',
                        url: '2016/cmq.png'
                    }]
                }]
            }
        },
        computed: {
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },
        created(){
            this.$http.get('/teacherIntroduce').then(res=> {
                this.teacher = res.data.everyTeacherIntroduce;
            })
        },
        methods: {
            getName(a){
                this.$router.push(a)
            }
        },

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