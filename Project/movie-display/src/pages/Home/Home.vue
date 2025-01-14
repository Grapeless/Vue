<template>
    <div class="flex flex-col-reverse justify-center items-center md:flex-row md:justify-start md:items-start">
        <Introduction :params="params"/>
        <ImageDisplay :params="params"/>

    </div>
</template>

<script setup>
import ImageDisplay from "@/pages/Home/ImageDisplay.vue";
import Introduction from "@/pages/Home/Introduction.vue";
import {reactive, watch} from "vue";
import {useHomeSearchValue} from "@/store/useHomeSearchValue.js";
import {storeToRefs} from "pinia";

const {homeSearchValue} = storeToRefs(useHomeSearchValue())
const params = reactive({
    tag: '恐怖',
    sort: 'recommend',
    'page_limit': 1,
    'page_start': 0,
})
//监听搜索值的变化,更新tag
watch(homeSearchValue,(newValue)=>{
    params.tag = newValue
})
</script>

<style scoped>

</style>