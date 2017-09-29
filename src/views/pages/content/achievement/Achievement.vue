<template>
    <div>
        <div class="layout-content">
            <Row :gutter="16">
                <Col span="5">
                <div style="width: 100%;height: 1px"></div>
                <Affix :offset-top="60">
                    <Menu :active-name="activeItem"   @on-select="getName" width="auto" :open-names="openName" accordion>

                        <MenuItem v-for="(item,index) in achievementList" :name="item.url">
                            <Icon :type="item.icon"></Icon>
                            {{eng ? item.eng :item.name}}
                        </MenuItem>



                        <Submenu name="paper">
                            <template slot="title">
                                <Icon :type="paperList.icon"></Icon>
                                {{eng ? paperList.eng :paperList.name}}
                            </template>
                            <MenuItem v-for="(item,index) in paperList.child" key="index" :name="item.url">{{item.title}}</MenuItem>
                        </Submenu>
                        <Submenu name="landmark">
                            <template slot="title">
                                <Icon :type="markList.icon"></Icon>
                                {{eng ? markList.eng :markList.name}}
                            </template>
                            <MenuItem v-for="(item,index) in markList.child" key="index" :name="item.url">{{item.title}}</MenuItem>
                        </Submenu>


                    </Menu>
                </Affix>
                </Col>
                <Col span="19">
                <div class="layout-content-main">
                    <a-content v-show="(id !== 'book') && (id !== 'landmark')  "></a-content>
                    <Book v-show="id === 'book'"></Book>
                    <land-mark  v-show="id === 'highWaterCut'"></land-mark>
                    <land-mark  v-show="id === 'lowPerm'"></land-mark>
                    <land-mark  v-show="id === 'tightGas'"></land-mark>
                    <land-mark  v-show="id === 'shale'"></land-mark>
                    <land-mark  v-show="id === 'heavyCold'"></land-mark>
                    <land-mark  v-show="id === 'heavyHot'"></land-mark>
                    <Land v-show="id === 'land'"></Land>
                </div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    import AContent from './AContent.vue'
    import Book from './Book.vue'
    import LandMark from './LamdMark.vue'
    import Land from './Land.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },

        data(){
            return {
                activeItem:'',
                openName:['1'],
                id:'program',
                achievementList: [
                    {name: '承担项目', eng: 'Program', url: '/achievement/program', icon: 'briefcase'},
                    {name: '出版专著', eng: 'Book', url: '/achievement/book', icon: 'ios-book'},
                    {name: '所获奖项', eng: 'Prize', url: '/achievement/prize', icon: 'ios-flag'},
                    {name: '专利申报', eng: 'Patent', url: '/achievement/patent', icon: 'map'}
                ],
                paperList: {
                    name: '发表论文', eng: 'Paper', icon: 'ios-paper', child: [
                        {url: '/achievement/2017', title: 2017,eng:''},
                        {url: '/achievement/2016', title: 2016,eng:''},
                    ]
                },
                markList:{
                    name: '标志性成果', eng: 'Landmark Achievement', icon: 'ios-star', child: [
                        {url: '/achievement/highWaterCut', title: '高含水油藏',eng:''},
                        {url: '/achievement/carbonate', title: '碳酸盐岩油气藏',eng:''},
                        {url: '/achievement/lowPerm', title: '低渗/致密油气',eng:''},
                        {url: '/achievement/tightGas', title: '致密油气',eng:''},
                        {url: '/achievement/shale', title: '页岩油气',eng:''},
                        {url: '/achievement/heavyCold', title: ' 稠油冷采',eng:''},
                        {url: '/achievement/heavyHot', title: '稠油热采',eng:''},
                    ]
                }
            }
        },
        watch:{
            '$route':function (newValue) {
                this.goPage(newValue)
            }
        },
        created(){
            this.goPage(this.$route)
        },
        methods: {
            getName(a){
                this.$router.push(a)
            },
            goPage(newValue){
                this.id = newValue.params.id;
                if(this.id == 'paper'){
                    this.activeItem = '/achievement/2017';
                    this.openName = ['paper'];
                }else{
                    this.openName = [];
                    this.activeItem = '/achievement/'+this.id;

                }
            }
        },

        components: {AContent,Book,LandMark,Land}

    };
</script>
<style scoped>
    .ivu-menu-item {
         border-bottom: 1px solid rgba(41, 110, 169, .2);
     }


</style>