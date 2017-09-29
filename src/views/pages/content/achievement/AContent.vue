<template>
    <div>
        <Card v-for="(item,index) in cardData" :key="index" style="margin-bottom: 30px">
            <p slot="title">{{eng ? item.eng : item.name}}</p>
            <p class="item" v-for="(one,ind) in item.child" :key="ind"><span>
                {{ind+1}} .{{eng ? one.eng :one.title}}
            </span></p>
        </Card>
    </div>
</template>
<script>
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        mounted(){
            this.$http.get('/achievement').then(res=>{
             this.achieveData =res.data.achievementData

            })
        },

        data(){
            return {
                cardData: {},
                achieveData: {}
            }
        },
        methods: {

            getName(a){
                this.$router.push(a)
            }
        },
        watch: {
            '$route': function (newValue) {
                let id = newValue.params.id;
                this.cardData = this.achieveData[id];
            }
        },
        components: {}

    };
</script>
<style scoped>
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