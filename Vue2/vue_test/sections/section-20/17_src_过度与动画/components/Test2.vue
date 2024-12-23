<template>
<div>
    <button @click="state = !state">显示/隐藏</button>
    <transition-group name="trans" appear>
        <h1 v-show="state" key="1">文本文本文本</h1>
        <h1 v-show="!state" key="2">文本2文本2文本2</h1>
    </transition-group>
</div>
</template>

<script>
export default {
    name: "Test",
    data(){
        return{
            state:true
        }
    }
}
</script>

<style scoped>
h1{
    /*transition: all 1s*/
    background-color: orange;
}


.trans-enter,.trans-leave-to{
    transform: translateX(-100%);
}
.trans-enter-active,.trans-leave-active{
    transition: all 1s;
}
.trans-enter-to,.trans-leave{
    transform: translateX(0);
}


</style>