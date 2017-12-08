<template>
    <div>
        <div class="layout-content">
            <Row :gutter="16">
                <Col span="5">
                <div style="width: 100%;height: 1px"></div>
                <Affix :offset-top="60">
                    <Menu :active-name="activeItem" @on-select="getName" width="auto" :open-names="openName" accordion>

                        <MenuItem v-for="(item,index) in achievementList" :name="item.url">
                            <Icon :type="item.icon"></Icon>
                            {{eng ? item.eng :item.name}}
                        </MenuItem>
                        <Submenu name="landmark">
                            <template slot="title">
                                <Icon :type="markList.icon"></Icon>
                                {{eng ? markList.eng :markList.name}}
                            </template>
                            <MenuItem v-for="(item,index) in markList.child" key="index" :name="item.url">
                                {{item.title}}
                            </MenuItem>
                        </Submenu>


                    </Menu>
                </Affix>
                </Col>
                <Col span="19">
                <div class="layout-content-main">
                    <a-content
                            v-show="
                            (id !== 'book')
                            && (id !== 'landmark')
                            && (id !== '2023')
                            && (id !== '2022')
                            && (id !== '2021')
                            && (id !== '2020')
                            && (id !== '2019')
                            && (id !== '2018')
                            && (id !== '2017')
                            && (id !== '2016')
                            && (id !== '2015')
                            && (id !== '2014')
                            && (id !== '2013')
                            && (id !== '2012')
                            && (id !== '2011')
                            && (id !== '2010')
                            && (id !== '2009')
                            && (id !== '2008')
                            && (id !== '2007')
                            && (id !== '2006')
                            && (id !== '2005')
                            && (id !== '2004')
                            && (id !== '2003')
                            && (id !== '2002')
                            && (id !== '2001')
                            && (id !== '2000')


"

                    ></a-content>
                    <Book v-show="id === 'book'"></Book>
                    <Artical v-show="id === '2023'"></Artical>
                    <Artical v-show="id === '2022'"></Artical>
                    <Artical v-show="id === '2021'"></Artical>
                    <Artical v-show="id === '2020'"></Artical>
                    <Artical v-show="id === '2019'"></Artical>
                    <Artical v-show="id === '2018'"></Artical>
                    <Artical v-show="id === '2017'"></Artical>
                    <Artical v-show="id === '2016'"></Artical>
                    <Artical v-show="id === '2015'"></Artical>
                    <Artical v-show="id === '2014'"></Artical>
                    <Artical v-show="id === '2013'"></Artical>
                    <Artical v-show="id === '2012'"></Artical>
                    <Artical v-show="id === '2011'"></Artical>
                    <Artical v-show="id === '2010'"></Artical>
                    <Artical v-show="id === '2009'"></Artical>
                    <Artical v-show="id === '2008'"></Artical>
                    <Artical v-show="id === '2007'"></Artical>
                    <Artical v-show="id === '2006'"></Artical>
                    <Artical v-show="id === '2005'"></Artical>
                    <Artical v-show="id === '2004'"></Artical>
                    <Artical v-show="id === '2003'"></Artical>
                    <Artical v-show="id === '2002'"></Artical>
                    <Artical v-show="id === '2001'"></Artical>
                    <Artical v-show="id === '2000'"></Artical>
                    <land-mark v-show="id === 'highWaterCut'"></land-mark>
                    <land-mark v-show="id === 'lowPerm'"></land-mark>
                    <land-mark v-show="id === 'carbonate'"></land-mark>
                    <land-mark v-show="id === 'tightGas'"></land-mark>
                    <land-mark v-show="id === 'shale'"></land-mark>
                    <land-mark v-show="id === 'heavyCold'"></land-mark>
                    <land-mark v-show="id === 'heavyHot'"></land-mark>
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
    import Artical from './Artical.vue'
    import LandMark from './LamdMark.vue'
    import Land from './Land.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            },
        },

        data(){
            return {
                activeItem: '',
                openName: ['1'],
                id: 'program',
                achievementList: [
                    {name: '承担项目', eng: 'Program', url: '/achievement/program', icon: 'briefcase'},
                    {name: '出版专著', eng: 'Book', url: '/achievement/book', icon: 'ios-book'},
                    {name: '所获奖项', eng: 'Prize', url: '/achievement/prize', icon: 'ios-flag'},
                    {name: '发表文章', eng: 'Paper', url: '/achievement/paper', icon: 'ios-paper'},
                    {name: '专利申报', eng: 'Patent', url: '/achievement/patent', icon: 'map'}
                ],
                markList: {
                    name: '标志性成果', eng: 'Landmark Achievement', icon: 'ios-star', child: [
                        {url: '/achievement/highWaterCut', title: '高含水油藏', eng: ''},
                        {url: '/achievement/carbonate', title: '碳酸盐岩油气藏', eng: ''},
                        {url: '/achievement/lowPerm', title: '低渗/致密油气', eng: ''},
                        {url: '/achievement/tightGas', title: '致密油气', eng: ''},
                        {url: '/achievement/shale', title: '页岩油气', eng: ''},
                        {url: '/achievement/heavyCold', title: ' 稠油冷采', eng: ''},
                        {url: '/achievement/heavyHot', title: '稠油热采', eng: ''},
                    ]
                }
            }
        },
        watch: {
            '$route': function (newValue) {
                this.goPage(newValue)
            }
        },
        created(){
            this.goPage(this.$route)
        },
        methods: {
            getName(a){
                if (a === '/achievement/paper') {
                    this.$router.push('/achievement/2017');
                    return;
                }
                this.$router.push(a)
            },
            goPage(newValue){
                this.id = newValue.params.id;
                if (this.id.startsWith('2')) {
                    this.activeItem = '/achievement/paper';
                } else {
                    this.openName = [];
                    this.activeItem = '/achievement/' + this.id;

                }
            }
        },

        components: {AContent, Book, LandMark, Land, Artical}

    };
</script>
<style scoped>
    .ivu-menu-item {
        border-bottom: 1px solid rgba(41, 110, 169, .2);
    }


</style>