<template>
    <div>
        <Alert type="success">
            <h2>{{ $t('component.teacher')}}</h2>
        </Alert>

        <Row :gutter="16">
            <Col span="8" v-for="(item , index) in teacher.members" :key="index">
            <Card style="">
                <Row :gutter="16">
                    <Col span="5" style="width: 100%;">
                    <div style="width: 100%;text-align:center;">
                        <img class="imgStyle" :src="ip+item.img">
                        <h3 style="text-align: center"><a @click.prevent="getName(item.url)">{{eng?item.eng
                            :item.name}}</a></h3>

                    </div>
                    </Col>

                </Row>
                <p v-html="eng ? item.introduceEng :item.introduce">

                </p>
            </Card>
            </Col>

            <Col span="8" v-for="(one , ind) in teacher.others" :key="ind">
            <Card style="">
                <Row :gutter="16">
                    <Col span="5" style="width: 100%;">
                    <div style="width: 100%">
                        <img class="imgStyle" :src="ip+one.img">
                        <h3><a @click.prevent="getName(one.url)">{{eng?one.eng
                            :one.name}}</a></h3>

                    </div>
                    </Col>

                </Row>
                <p style="position: absolute;top: 30px;right: 5px" v-html="eng ? one.introduceEng :one.introduce">

                </p>
            </Card>
            </Col>

           <!-- <Col span="16">
            <Row :gutter="16">
                <Col span="12" v-for="(item,index) in teacher.others" :key="index">
                <div style="text-align: center">
                    <img class="imgStyle" style="width: 120px;height: 160px"
                         :src="ip+item.img" alt="">
                    <p>
                    <h3 style="    margin-top: 20px;
    margin-bottom: 20px;font-size: 16px;"><a @click.prevent="getName(item.url)">{{eng ? item.eng :item.name}}</a>
                    </h3></p>
                </div>
                </Col>


            </Row>
            </Col>-->
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
        width: 100px;
        height: 150px;
        box-shadow: 10px 10px 10px #888888;
        border-radius: 10px;
    }
</style>