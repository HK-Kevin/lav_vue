<template>
    <Row :gutter="12">
        <Col span="6">
        <Major></Major>
        </Col>
        <Col span="18">
       <Add></Add>


        </Col>
    </Row>

</template>
<script>
    import Major from '../home/Major.vue'
    import Add from './Add.vue'
    export default {
        methods: {


        },
        components:{Major,Add}
    };
</script>
<style scoped>
    .carouselImg{
        width: 100%;
        height: 200px;
    }
</style>