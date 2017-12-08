<template>
    <Row type="flex" style="height:100%" justify="center" class="code-row-bg container">
        <Col span="22">
       </div>
        <back-img></back-img>
       <!--menu-->
      <div>
          <lab-menu></lab-menu>
      </div>
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
<style >
    .container{
        padding-right:15px;
        padding-left:15px;
        margin-right:auto;
        margin-left:auto
    }

    @media (min-width:1200px){
        .container{
            width:1170px
        }

    }
</style>