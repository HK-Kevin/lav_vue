<template>
        <Row>
            <Col span="16">
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.achievement.paper')}}</p>
                <a href="##" slot="extra" >
                    <Icon type="forward"></Icon>
                    <router-link to="/achievement/2016"> {{ $t('component.more')}}</router-link>

                </a>
                <p class="item" v-for="(item,index) in articles" :key="index"><Icon type="ios-book-outline"></Icon>  {{item}}</p>
            </Card>
            </Col>
            <Col span="8">
            <Card>
                <p slot="title" style=""><Icon type="android-arrow-forward"></Icon> {{ $t('nav.contact')}}</p>
                <a href="##" slot="extra" >
                    <Icon type="forward"></Icon>
                    <router-link to="/contact"> {{ $t('component.more')}}</router-link>
                </a>
                <p class="contact" v-for="(item,index) in contacts" :key="index"><Icon :type="item.icon"></Icon><span>{{eng ? item.eng : item.name}}</span></p>

            </Card>
            </Col>
        </Row>
</template>
<script>
    export default {
        props:['articles','contacts'],
        computed:{
            eng(){
                return this.$store.state.eng
            }
        }
    };
</script>
<style scoped>
    .ivu-row .ivu-col .ivu-card div.ivu-card-head{

        background-color: red!important;
        font-size: 16px;
        padding: 11px 15px!important;
    }

   .contact{
       font-size: 14px;
   }
    .contact span{
        margin-left: 10px;
    }
    .ivu-menu-item {
        border-bottom: 1px solid rgba(41, 110, 169, .2);
    }

    .item:hover {
        color: #1b6d85;
        cursor: pointer;
        margin-left: -3px;
        border-right: 3px solid green;
    }
</style>