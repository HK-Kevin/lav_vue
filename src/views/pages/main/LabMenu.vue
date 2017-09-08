<template>
    <Menu mode="horizontal" @on-select="getName" active-name="firstPage" style="background-color:#296ea9">
        <MenuItem name="/firstPage" style="color: white">
            <Icon type="ios-paper"></Icon>
            {{ $t('nav.home')}}
        </MenuItem>
        <MenuItem name="/introduce">
            <Icon type="ios-people"></Icon>
            {{ $t('nav.introduce')}}
        </MenuItem>
        <MenuItem name="/team">
            <Icon type="ios-people"></Icon>
            {{ $t('nav.team')}}
        </MenuItem>
        <Submenu name="/research">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
               {{ $t('nav.research.title')}}
            </template>
            <MenuGroup title="复杂油气藏建模及数值模拟">
                <MenuItem name="3-1">高含水油藏</MenuItem>
                <MenuItem name="3-2">碳酸盐岩油藏</MenuItem>
                <MenuItem name="3-3">低渗致密气藏</MenuItem>
            </MenuGroup>
            <MenuGroup title="致密/页岩油气渗流机理及应用">
                <MenuItem name="3-4">致密油气</MenuItem>
                <MenuItem name="3-5">页岩油气</MenuItem>
            </MenuGroup>
            <MenuGroup title=" 稠油开发理论与评价技术">
                <MenuItem name="3-4">稠油冷采</MenuItem>
                <MenuItem name="3-5">稠油热采</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="/achievement">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{ $t('nav.achievement.title')}}
            </template>
                <MenuItem name="/paper"> {{ $t('nav.achievement.paper')}}</MenuItem>
                <MenuItem name="/program"> {{ $t('nav.achievement.program')}}</MenuItem>
                <MenuItem name="/book">{{ $t('nav.achievement.book')}}</MenuItem>
                <MenuItem name="/prize">{{ $t('nav.achievement.prize')}}</MenuItem>
                <MenuItem name="/patent">{{ $t('nav.achievement.patent')}}</MenuItem>
                <MenuItem name="/landmark">{{ $t('nav.achievement.landmark')}}</MenuItem>
        </Submenu>
        <MenuItem name="/news">
            <Icon type="settings"></Icon>
            {{ $t('nav.news')}}
        </MenuItem>
        <Submenu name="/lab">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{ $t('nav.lab')}}
            </template>
            <MenuGroup title="复杂油气藏建模及数值模拟">
                <MenuItem name="3-1">高含水油藏</MenuItem>
                <MenuItem name="3-2">碳酸盐岩油藏</MenuItem>
                <MenuItem name="3-3">低渗致密气藏</MenuItem>
            </MenuGroup>
            <MenuGroup title="致密/页岩油气渗流机理及应用">
                <MenuItem name="3-4">致密油气</MenuItem>
                <MenuItem name="3-5">页岩油气</MenuItem>
            </MenuGroup>
            <MenuGroup title=" 稠油开发理论与评价技术">
                <MenuItem name="3-4">稠油冷采</MenuItem>
                <MenuItem name="3-5">稠油热采</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="/contact">
            <Icon type="settings"></Icon>
            {{ $t('nav.contact')}}
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        methods: {
            getName(a){
                console.log(a)
            }
        }
    };
</script>
<style scoped>
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
        color: white;
        font-size: 18px;
        font-weight: bold;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color: green;
        border-bottom: 2px solid red;
    }
</style>