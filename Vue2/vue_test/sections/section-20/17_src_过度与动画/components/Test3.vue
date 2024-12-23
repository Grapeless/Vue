<template>
<div>
    <button @click="state = !state">显示/隐藏</button>
    <transition name="animate__animated animate__bounce"
                enter-active-class="animate__swing"
                leave-active-class="animate__backOutDown"
                appear>
        <h1 v-show="state" >文本文本文本</h1>
    </transition>
</div>
</template>

<script>
import 'animate.css'
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

</style>