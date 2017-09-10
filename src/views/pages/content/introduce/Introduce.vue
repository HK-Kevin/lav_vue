<template>
    <Row :gutter="12">
        <Col span="6">
        <Major></Major>
        </Col>
        <Col span="18">
        <History></History>
        </Col>
    </Row>

</template>
<script>
    import Major from '../home/Major.vue'
    import History from './History.vue'
    export default {
        methods: {

        },
        components:{Major,History}
    };
</script>
<style scoped>
    .carouselImg{
        width: 100%;
        height: 200px;
    }
</style>