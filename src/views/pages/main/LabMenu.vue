<template>
    <Affix >
    <Menu mode="horizontal" @on-select="getName" :active-name="page" style="background-color:#296ea9;z-index: 99999">
        <MenuItem name="/" >
            <Icon type="ios-home"></Icon>
            {{ $t('nav.home')}}
        </MenuItem>
        <MenuItem name="/introduce">
            <Icon type="ios-book"></Icon>
            {{ $t('nav.introduce')}}
        </MenuItem>
        <MenuItem name="/team">
            <Icon type="ios-people"></Icon>
            {{ $t('nav.team')}}
        </MenuItem>
        <MenuItem name="/research">
            <Icon type="ios-people"></Icon>
            {{ $t('nav.research.title')}}
        </MenuItem>
        <Submenu name="/achievement">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{ $t('nav.achievement.title')}}
            </template>
                <MenuItem name="/achievement/2017"> {{ $t('nav.achievement.paper')}}</MenuItem>
                <MenuItem name="/achievement/program"> {{ $t('nav.achievement.program')}}</MenuItem>
                <MenuItem name="/achievement/book">{{ $t('nav.achievement.book')}}</MenuItem>
                <MenuItem name="/achievement/prize">{{ $t('nav.achievement.prize')}}</MenuItem>
                <MenuItem name="/achievement/patent">{{ $t('nav.achievement.patent')}}</MenuItem>
                <MenuItem name="/achievement/highWaterCut">{{ $t('nav.achievement.landmark')}}</MenuItem>
        </Submenu>
        <MenuItem name="/news">
            <Icon type="social-designernews"></Icon>

            {{ $t('nav.news')}}
        </MenuItem>
        <MenuItem name="/lab">
            <Icon type="ios-flask"></Icon>

            {{ $t('nav.lab')}}
        </MenuItem>
        <MenuItem name="/contact">
            <Icon type="ios-telephone"></Icon>
            {{ $t('nav.contact')}}
        </MenuItem>
    </Menu></Affix>
</template>
<script>
    export default {
        data:function () {
            return {
              page:'/home'
            }
        },
        methods: {
            getName(a){
                this.$router.push(a)
            }
        },
        watch: {
            '$route': function (newVal) {
                if(newVal.path === '/achievement/2016'){
                    this.page = '/achievement/2017';
                    return;
                }
                let temp = newVal.path.substr(1);
                if(temp.indexOf('/') !== -1){
                    return;
                }
                 this.page = newVal.path
            }
        },
    };
</script>
<style scoped>
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color: green;
        border-bottom: 2px solid red;
    }
    .ivu-affix ul{
        background-color: rgba(41, 110, 169,.8) !important;
    }

</style>