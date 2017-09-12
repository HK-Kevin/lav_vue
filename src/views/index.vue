<template>
    <Row type="flex" style="height:100%" justify="center" class="code-row-bg">
        <Col span="20">

       </div>
        <back-img></back-img>
       <!--menu-->
       <lab-menu></lab-menu>
        <!--content-->
        <div class="content" style="margin-top: 20px">
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
    import BackImg from './pages/main/BackImg.vue'
    export default {
        data () {
            return {
            }
        },
        computed:{
            eng(){
                return this.$store.state.eng
            }
        },
        methods: {

            change(lan){
                this.$store.commit('changeLanguage');
                if (lan) {
                    Vue.config.lang = 'en-US';
                } else {
                    Vue.config.lang = 'zh-CN';
                }
            },

        },
        components: {LabMenu,LabFooter,BackImg}
    };
</script>
<style>

</style>