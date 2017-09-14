<template>

    <div>
        <div class="tree well">

            <ul>
                <li v-for="(first,index) in treeData" :key="index">

                   <span> {{eng ? first.eng : first.first}}
</span>

                    <ul>

                        <li v-for="(second,ind) in first.content" :key="ind">

                            <span> {{eng ? second.eng : second.second}}</span>
                            <ul>

                                <li v-for="(third,i) in second.content" :key="i">

                                    <span><i class="glyphicon glyphicon-menu-right"></i><a
                                            :href="third.url">  {{eng ? third.eng : third.name}}</a></span>
                                </li>



                            </ul>

                        </li>


                    </ul>

                </li>
            </ul>
        </div>
    </div>


</template>
<script>
    export default {
        data(){
            return {
                treeData: [
                    {
                        first: ' 1. 复杂油气藏建模及数值模拟',
                        eng:'',
                        content: [{
                            second: '1.1 高含水油藏：',
                            content: [
                                {name: '夹层识别与表征技术', eng: '', url: ''}, {
                                    name: '“动静结合，迭代建模建”技术',
                                    eng: '',
                                    url: ''
                                }, {
                                    name: '底水油藏水平井稳油控水综合治理技术',
                                    eng: '',
                                    url: ''
                                },
                                {
                                    name: '强非均质储层水线推进全过程分析评价技术',
                                    eng: '',
                                    url: ''
                                }]
                        },{
                            second: '1.2 高含水油藏：',
                            content: [
                                {name: '夹层识别与表征技术', eng: '', url: ''}, {
                                    name: '“动静结合，迭代建模建”技术',
                                    eng: '',
                                    url: ''
                                }, {
                                    name: '底水油藏水平井稳油控水综合治理技术',
                                    eng: '',
                                    url: ''
                                },
                                {
                                    name: '强非均质储层水线推进全过程分析评价技术',
                                    eng: '',
                                    url: ''
                                }]
                        }]
                    }]
            }
        },
        mounted(){
            this.$http.get('/researchTree').then(res=> {
                this.treeData = res.data;
            })
            this.run()
        },
        computed:{
            eng(){
                return this.$store.state.eng
            },
            ip(){
                return this.$store.state.ip
            }
        },
        methods: {
            run(){
                $(function () {
                    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
                    $('.tree li.parent_li > span').on('click', function (e) {
                        var children = $(this).parent('li.parent_li').find(' > ul > li');
                        if (children.is(":visible")) {
                            children.hide('fast');
                            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                        } else {
                            children.show('fast');
                            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                        }
                        e.stopPropagation();
                    });
                });
            }

        }
    };
</script>
<style scoped>

    .tree {
        min-height: 20px;
        padding: 19px;
        margin-bottom: 20px;
        background-color: #fbfbfb;
        border: 1px solid #999;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05)
    }

    .tree li {
        list-style-type: none;
        margin: 0;
        padding: 10px 5px 0 50px;
        position: relative
    }

    .tree li::before, .tree li::after {
        content: '';
    / / left: - 20 px;
        left: 25px;
        position: absolute;
        right: auto
    }

    .tree li::before {
        border-left: 1px solid #999;
        bottom: 50px;
        height: 100%;
        top: 0;
        width: 1px
    }

    .tree li::after {
        border-top: 1px solid #999;
        height: 20px;
        top: 25px;
        width: 25px
    }

    .tree li span {
        font-size: 14px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border: 1px solid #999;
        border-radius: 5px;
        display: inline-block;
        padding: 3px 8px;
        text-decoration: none
    }

    .tree li.parent_li > span {
        cursor: pointer
    }

    .tree > ul > li::before, .tree > ul > li::after {
        border: 0
    }

    .tree li:last-child::before {
        height: 30px
    }

    .tree li.parent_li > span:hover, .tree li.parent_li > span:hover + ul li span {
        background: #eee;
        border: 1px solid #94a0b4;
        color: #000
    }
</style>