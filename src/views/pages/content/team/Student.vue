<template>
    <div style="margin-top: 20px">
        <!--<Collapse v-model="1" accordion>
            <Panel name="1">
                史蒂夫·乔布斯
                <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </Panel>

        </Collapse>-->

        <div v-for="(item,index) in student" :key="index">
           <Alert type="success">
               <h2>{{ eng ? item.eng : item.title}}</h2>
           </Alert>


           <Card v-for="(one,ind) in item.content">
               <p slot="title">{{one.year}}</p>
               <Row :gutter="16">
                   <Col span="5" v-for="(o,i) in one.stu">
                   <div style="">
                       <img class="avater" :src="ip+o.url">
                       <h3 style="text-align: center">{{o.name}}</h3>
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
                student: []
            }
        },
        created(){
            this.$http.get('/student').then(res=> {
                this.student = res.data;
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