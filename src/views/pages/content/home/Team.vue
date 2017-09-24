<template>
    <Row>
        <Col span="16">
        <Card>
            <p slot="title" style="">
                <Icon type="android-arrow-forward"></Icon>
                {{ $t('nav.team')}}
            </p>
            <a href="/team" slot="extra">
                <Icon type="forward"></Icon>
                {{ $t('component.more')}}
            </a>
            <Lamp :lampData="team"></Lamp>
        </Card>
        </Col>
        <Col span="8">
        <Card style="overflow: hidden">
            <p slot="title" style="">
                <Icon type="android-arrow-forward"></Icon>
                {{ $t('nav.lab')}}
            </p>
            <a href="/contact" slot="extra">
                <Icon type="forward"></Icon>
                {{ $t('component.more')}}
            </a>
            <Lamp :lampData = lab></Lamp>
        </Card>
        </Col>
    </Row>
</template>
<script>
    import Lamp from  './Lamp.vue'
    export default {
        props:['team','lab'],
        components: {Lamp}
    };
</script>
<style scoped>
    .ivu-row .ivu-col .ivu-card div.ivu-card-head {

        background-color: red !important;
        font-size: 16px;
        padding: 11px 15px !important;
    }

    .carouselImg {
        width: 100%;
        height: 200px;
    }
</style>