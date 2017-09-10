<template>
    <div>
        <div class="layout-content">
            <Row :gutter="16">
                <Col span="5">
                <div style="width: 100%;height: 1px"></div>
                <Affix :offset-top="90">
                    <Menu active-name="cls" @on-select="getName" width="auto" :open-names="['1']">

                        <MenuItem v-for="(item,index) in achievementList" :name="item.url">
                            <Icon :type="item.icon"></Icon>
                            {{eng ? item.name :item.eng}}
                        </MenuItem>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon :type="paperList.icon"></Icon>
                                {{eng ? paperList.name :paperList.eng}}
                            </template>
                            <MenuItem v-for="(item,index) in paperList.child" key="index" :name="item.url">{{item.title}}</MenuItem>
                        </Submenu>
                    </Menu>
                </Affix>
                </Col>
                <Col span="19">
                <div class="layout-content-main">
                    <a-content v-show="id !== 'book'"></a-content>
                    <Book v-show="id === 'book'"></Book>

                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import AContent from './AContent.vue'
    import Book from './Book.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },

        data(){
            return {
                id:'program',
                achievementList: [
                    {name: '承担项目', eng: 'Program', url: '/achievement/program', icon: 'briefcase'},
                    {name: '出版专著', eng: 'Book', url: '/achievement/book', icon: 'ios-book'},
                    {name: '所获奖项', eng: 'Prize', url: '/achievement/prize', icon: 'ios-flag'},
                    {name: '专利申报', eng: 'Patent', url: '/achievement/patent', icon: 'map'},
                    {name: '标志性成果', eng: 'Landmark Achievement', url: '/achievement/landmark', icon: 'ios-star'},
                ],
                paperList: {
                    name: '发表论文', eng: 'Paper', icon: 'ios-paper', child: [
                        {url: '/achievement/2017', title: 2017},
                        {url: '/achievement/2016', title: 2016},
                    ]
                }
            }
        },
        watch:{
            '$route':function (newValue) {
                this.id = newValue.params.id;
            }
        },
        methods: {
            getName(a){
                this.$router.push(a)
            }
        },

        components: {AContent,Book}

    };
</script>
<style scoped>
    .ivu-menu-item {
         border-bottom: 1px solid rgba(41, 110, 169, .2);
     }


</style>