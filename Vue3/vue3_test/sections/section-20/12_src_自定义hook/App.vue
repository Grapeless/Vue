<template>
    <button @click="isShow = !isShow">切换页面生命状态</button>
    <Test1></Test1>
    <Test2 v-if="isShow"></Test2>
</template>

<script>

import Test1 from "./components/Test1.vue";
import Test2 from "./components/Test2.vue";
import {ref} from "vue";

export default {
    name: 'App',
    components: {Test2, Test1},
    setup(){
        const isShow = ref(true)

        return{
            isShow
        }
    }
}
</script>

<style>

</style>
