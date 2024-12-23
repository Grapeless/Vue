<template>
<div>
    <button @click="state = !state">显示/隐藏</button>
    <transition name="ani" appear>
        <h1 v-show="state" >文本文本文本</h1>
    </transition>
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
    background-color: orange;
}

.ani-enter-active{
    animation: a 1s;
}
.ani-leave-active{
    animation: a 1s reverse;
}
@keyframes a {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>