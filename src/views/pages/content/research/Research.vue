<template>
    <div>
        <Row :gutter="16">
            <Col span="6">
            <lab-teacher></lab-teacher>
            <Major style="margin-top: 20px"></Major>
            </Col>
            <Col span="18">
            <Tree></Tree>
            </Col>
        </Row>
    </div>
</template>
<script>
    import  Major from '../home/Major.vue'
    import Tree from './Tree.vue'
    import LabTeacher from './LabTeacher.vue'
    export default {
        data(){
            return {
            }
        },


        components: {Tree,LabTeacher,Major}
    };
</script>
<style scoped>
    .list {
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

    .list:hover {
        background-color: #f5f5f5;
        border-right: 3px solid green;
    }
</style>