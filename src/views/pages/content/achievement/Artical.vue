<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem v-for="(item,index) in paperList" :key="index" :href="item.href">{{item.content}}</BreadcrumbItem>
        </Breadcrumb>
        <Card style="margin-bottom: 30px">
            <p slot="title">{{tempData.title}}</p>
            <p class="item" v-for="(one,ind) in tempData.content" :key="ind"><span>
                {{ind+1}} .{{one}}
            </span></p>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tempData:{},
                paperData:{},
                paperList:{}
            }
        },
        components: {},
        created(){
            this.$http.get('/paper').then(res=> {
                this.paperList = res.data.paperList;
                this.paperData = res.data;
            })
        },
        watch: {
            '$route': function (newValue) {
                let id = newValue.params.id;
                this.tempData = this.paperData[id];
            }
        },

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