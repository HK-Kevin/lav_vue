<template>
    <div>
        <Row :gutter="16">
            <Col span="6">
            <List></List>
            <div style="width: 100%;height: 1px"></div>
            </Col>
            <Col span="18">
            <Card style="overflow: hidden">
                <p slot="title" style="">
                    <Icon type="android-arrow-forward"></Icon>
                    {{displayData.title}}
                </p>
                <div style="font-size: 16px">
                    {{displayData.content}}
                    <div style="text-align: center;margin-top: 40px">
                        <img style="width: 80%" :src="displayData.img" alt="">
                    </div>
                </div>
            </Card>


            </Col>
        </Row>
    </div>
</template>
<script>
    import Major from '../home/Major.vue'
    import List from  './List.vue'
    export default {
        computed: {
            eng(){
                return this.$store.state.eng
            }
        },
        data(){
            return {
                displayData: {},
                lab: [{
                    id: 'sagd',
                    title: '隔夹层对双水平井SAGD蒸汽腔的影响',
                    eng: '',
                    content: '实验说明：在油砂的双水平井SAGD开发中，蒸汽腔的发育对于开发效果来说是至关重要的。而隔夹层对于SAGD蒸汽腔的影响是不能忽略的，之前已有部分学者对于单隔夹层对SAGD蒸汽腔的影响做了相关的研究，但在实际油藏中，隔夹层的发育往往不是单一的，而是多隔夹层模式发育，因此，研究多隔夹层对SAGD蒸汽腔的影响是很有必要的，能为实际矿场的开发提供有效的建议，尽量减小隔夹层对SAGD蒸汽腔发育的影响，改善开发效果。利用此二维SAGD剖面的物理模型，在保证实验安全、方便的同时，也能准确地观察、描述多隔夹层对SAGD蒸汽腔发育以及其开发效果的影响。',
                    contnetEng: '',
                    img: 'https://hk-kevin.github.io/vue_api/img/lab/gjcsagd.png'
                },
                    {
                        id: 'seaOil',
                        title: '海上稠油热采开发效果室内物理模拟实验',
                        eng: '',
                        content: '实验说明：在油砂的双水平井SAGD开发中，蒸汽腔的发育对于开发效果来说是至关重要的。而隔夹层对于SAGD蒸汽腔的影响是不能忽略的，之前已有部分学者对于单隔夹层对SAGD蒸汽腔的影响做了相关的研究，但在实际油藏中，隔夹层的发育往往不是单一的，而是多隔夹层模式发育，因此，研究多隔夹层对SAGD蒸汽腔的影响是很有必要的，能为实际矿场的开发提供有效的建议，尽量减小隔夹层对SAGD蒸汽腔发育的影响，改善开发效果。利用此二维SAGD剖面的物理模型，在保证实验安全、方便的同时，也能准确地观察、描述多隔夹层对SAGD蒸汽腔发育以及其开发效果的影响。',
                        contnetEng: '',
                        img: 'https://hk-kevin.github.io/vue_api/img/lab/gjcsagd.png'
                    }]
            }
        },
        mounted(){
           this.changeData(this.$route)
        },

        watch: {
            '$route': function (newVal) {
                this.changeData(newVal)
            }
        },
        methods: {
            changeData(newVal){
                this.lab.forEach(item=> {
                    if (item.id == newVal.params.id) {
                        this.displayData = item;
                    }
                })
            }
        },
        components: {Major, List}
    };
</script>
