<template>
        <div>
            <Row :gutter="16">
                <Col span="6">
                <Major style=""></Major>
                </Col>
                <Col span="18">
                <lab-list></lab-list>
                <Lamp style="width: 600px;border: 1px solid grey"  :lampData="labData"></Lamp>
                </Col>
            </Row>
        </div>
</template>
<script>
    import  Major from '../home/Major.vue'
    import  Lamp from '../home/Lamp.vue'
    import  LabList from './LabList.vue'
    export default {
        data(){
            return{
                labData:{}
            }
        },
        methods: {

        },
        created(){
            this.$http.get('/homeData').then(res=>{
                this.labData =res.data.lab
            })
        },
        components:{Major,LabList,Lamp}
    };
</script>
<style scoped>

</style>