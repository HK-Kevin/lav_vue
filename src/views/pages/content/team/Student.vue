<template>
    <div style="margin-top: 20px">
        <div v-for="(item,index) in student" :key="index">
            <Alert type="success">
                <h2>{{ eng ? item.eng : item.title}}</h2>
            </Alert>


            <Card v-for="(one,ind) in item.content">
                <p slot="title">{{one.year}}</p>
                <Row :gutter="12">
                    <Col span="4" v-for="(o,i) in one.stu">
                    <div style="">
                        <img class="avater" :src="ip+o.url">
                        <h3 style="text-align: center;margin-left: -20px">{{o.name}}</h3>
                    </div>
                    </Col>

                </Row>
            </Card>
        </div>


    </div>
</template>
<script>
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },

        data(){
            return {
                student: {}
            }
        },
        created(){
            this.$http.get('/student').then(res=> {
                this.student = (res.data);
            })
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
</style>