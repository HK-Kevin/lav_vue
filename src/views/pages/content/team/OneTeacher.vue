<template>
    <div>
        <div class="layout-content">
            <Row>
                <Col span="5">
                <div style="width: 100%;height: 1px"></div>
                <Affix :offset-top="90">
                    <Menu :active-name="activeItem" @on-select="getName" width="auto">

                        <MenuItem v-for="(item,index) in teacherList" :name="item.url">
                            <Icon :type="item.type"></Icon>
                            {{eng ? item.eng :item.name}}
                        </MenuItem>

                    </Menu>
                </Affix>
                </Col>
                <Col span="19">
                <div class="layout-content-main">
                    <one-content></one-content>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import OneContent from './OneContent.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },

        data(){
            return {
                activeItem:'',
                teacherList: [
                    {name: '程林松', url: '/team/cls', eng: 'Cheng', type: 'university'},
                    {name: '李春兰', url: '/team/lcl', eng: 'Li', type: 'university'},
                    {name: '黄世军', url: '/team/hsj', eng: 'Huang', type: 'university'},
                    {name: '薛永超', url: '/team/xyc', eng: 'Xue', type: 'university'},
                    {name: '曹仁义', url: '/team/cry', eng: 'Cao', type: 'university'},
                ]
            }
        },
        methods: {

            getName(a){
                this.$router.push(a)
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.activeItem = '/team/'+this.id;
        },
        components: {OneContent}

    };
</script>
<style scoped>
    .ivu-menu-item {
        border-bottom: 1px solid rgba(41, 110, 169, .2);
    }
</style>