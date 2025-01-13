<template>
    <div class="flex flex-col-reverse justify-center items-center md:flex-row md:justify-start md:items-start">
        <Introduction :introduction="firstRecommendedMovie"/>
        <ImageDisplay :cover="firstRecommendedMovie.cover"/>
    </div>
</template>

<script setup>
import ImageDisplay from "@/pages/Home/ImageDisplay.vue";
import Introduction from "@/pages/Home/Introduction.vue";
import {onMounted, reactive} from "vue";
import axios from "axios";

//获取筛选结果列表的第一个电影信息
const firstRecommendedMovie = reactive({
    cover:'',
    title:'',
    rate:''
})
async function fetchData() {
    const res = await axios({
        url: '/api/j/search_subjects',
        params: {
            tag: '全部',
            sort: 'recommend',
            'page_limit': 1,
            'page_start': 0,
        }
    })
    firstRecommendedMovie.cover =  res.data['subjects'][0].cover
    firstRecommendedMovie.title =  res.data['subjects'][0].title
    firstRecommendedMovie.rate =  res.data['subjects'][0].rate
}

onMounted(() => {
    fetchData()
})

</script>

<style scoped>

</style>