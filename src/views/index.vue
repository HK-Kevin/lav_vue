<template>
    <Row type="flex" style="height:100%" justify="center" class="code-row-bg">
        <Col span="18">

       <!--menu-->
        <lab-menu></lab-menu>

        <!--content-->
        <div class="content" style="height:100px">
            <router-view></router-view>
        </div>

        <!--footer-->
        <lab-footer></lab-footer>
        </Col>


        <i-switch @on-change="change">
            <span slot="open">ENG</span>
            <span slot="close">中</span>
        </i-switch>
    </Row>
</template>
<script>
    import Vue from 'vue'
    import LabMenu from './pages/main/LabMenu.vue'
    import LabFooter from './pages/main/LabFooter.vue'
    export default {
        data () {
            return {
            }
        },
        methods: {
            change(lan){
                if (lan) {
                    Vue.config.lang = 'zh-CN';
                } else {
                    Vue.config.lang = 'en-US';
                }
            },
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        },
        components: {LabMenu,LabFooter}
    };
</script>
<style>

</style>