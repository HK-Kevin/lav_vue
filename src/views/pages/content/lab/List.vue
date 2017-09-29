<template>
    <Affix :offset-top="70">
        <div style="margin-bottom: 30px">
            <Menu open-names="['0','1','2']"  :active-name="activeName" @on-select="getName">
                <Submenu v-for="(item,index) in list" :name="index" :key="index">
                    <template slot="title">
                        {{eng ? item.eng : item.title}}
                    </template>
                    <MenuItem
                            v-for="(one,ind) in item.child"
                            :key="ind"
                            :name="one.url"
                    >
                        {{ind+1}}. {{eng ? one.eng :
                        one.name}}
                    </MenuItem>

                </Submenu>
            </Menu>
        </div>
    </Affix>
</template>
<script>
    import Major from '../home/Major.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        mounted(){
            this.id = this.$route.params.id;
            this.activeName = '/labOne/'+this.id;
        },
        data(){
            return {
                openData: ['1'],
                activeName:'',
                list:{},
               /* list: [{
                    title: '一、稠油油藏相关实验', eng: '', child: [
                        {name: '隔夹层对双水平井SAGD蒸汽腔的影响', eng: '', url: '/labOne/sagd'},
                        {name: '海上稠油热采开发效果室内物理模拟实验', eng: '', url: '/labOne/seaOil'},
                    ]
                },
                    {
                        title: '二、低渗油藏相关实验', eng: '', child: [
                        {name: '微尺度流动实验', eng: '', url: '/labOne/micro'},
                        {name: '致密砂岩水驱动态裂缝实验', eng: '', url: '/labOne/frac'},
                        {name: '特低渗透油藏开发电模拟实验研究', eng: '', url: '/labOne/sim'},
                    ]
                    },

                    {
                        title: '三、复杂油藏相关实验', eng: '', child: [
                        {name: '气顶边水的三维气驱实验', eng: '', url: '/labOne/gastop'},
                        {name: '平板模型水驱油实验', eng: '', url: '/labOne/waterFloodOil'},
                    ]
                    }
                ]*/
            }
        },
        methods: {
            getName(a){
                this.$router.push(a)
            }
        },
        created(){
            this.$http.get('/lab').then(res=>{
                this.list = res.data.labList
            })

        },
        components: {Major}
    };
</script>
<style scoped>

</style>
