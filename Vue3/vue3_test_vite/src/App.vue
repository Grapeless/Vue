<template>
    <!--<Child d="666" @hello="helloHandler"></Child>-->
    <Count/>
    <br>
    <LoveTalk/>
</template>

<script setup>
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue'
/*import Child from "./components/Child.vue";
function helloHandler(value){
    alert(value)
}*/
</script>

<style scoped>

</style>
