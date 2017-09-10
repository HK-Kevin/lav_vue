<template>
        <div>
            <Alert type="success">
                在研学生
            </Alert>

            <Card v-for="(item,index) in student">
                <p slot="title">{{item.year}}</p>
                <Row :gutter="16">
                    <Col span="5" v-for="(one,ind) in item.stu">
                        <div style="">
                            <img class="avater" :src="ip+one.url">
                            <h3 style="text-align: center">{{one.name}}</h3>
                        </div>
                    </Col>

                </Row>
            </Card>


        </div>
</template>
<script>
    export default {
        computed:{
            ip(){
                return this.$store.state.ip
            }
        },

data(){
    return{
        student:[{
            year:'2016级博士',
            stu:[{
                name:'程明强',
                url:'2016/cmq.png'
            }]
        }]
    }
}

    };
</script>
<style scoped>
   .avater{
       width:80%;
       height: 200px;
       box-shadow: 10px 10px 10px #888888;
       border-radius: 10px;
   }
   .avater:hover{
       transform: scale(1.1);

   }
</style>