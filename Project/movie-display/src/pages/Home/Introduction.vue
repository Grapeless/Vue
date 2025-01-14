<template>
    <div class="flex flex-col text-zinc-500 font-['JetBrains_Mono'] gap-y-10 w-[60%] mt-20 ">
        <!--rate-->
        <ul class="flex h-4 w-full items-center gap-2 text-xs divide-gray-500 md:gap-5 md:text-sm">
            <li>USA</li>
            <li>|</li>
            <li>MAR 21,2025</li>
            <li>|</li>
            <li>IMDB:{{ rate }}/10</li>
        </ul>

        <!--title-->
        <h1 class="w-10/12 text-4xl font-bold text-black md:text-7xl max-[1090px]:w-3/4">{{ title }}</h1>

        <!--description-->
        <p class="w-full md:w-3/4 text-sm">{{ desc }}</p>

        <!--link button-->
        <a class="relative cursor-pointer rounded-full bg-yellow-300/90 duration-300 group size-16 hover:w-40"
           :href="url"
           target="_blank">
            <span class="absolute top-1/2 left-8 w-32 -translate-y-1/2 opacity-0 duration-300 group-hover:opacity-100">▶</span>
            <span class="absolute top-1/2 left-12 w-32 -translate-y-1/2 text-black">WATCH NOW</span>
        </a>
    </div>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref, watch} from "vue";

const {params} = defineProps(['params'])

//豆瓣评分
const rate = ref()
//电影名
const title = ref()
//详情链接
const url = ref()
//description
const desc = ref()

async function fetchData() {
    //获取rate,title,url
    const res = await axios({
        url: '/api/j/search_subjects',
        params
    })

    //获取desc，在另一个网站上，瞎扒的
    const html = await axios({
        url: `/id/subject/${res.data['subjects'][0].id}/`,
    })
    const match = html.data.match(/"description":\s*"([^"]*)"/);

    desc.value = match ? match[1] : null

    title.value = res.data['subjects'][0].title
    rate.value = res.data['subjects'][0].rate
    url.value = res.data['subjects'][0].url
}

onMounted(() => {
    fetchData()
})
watch(() => params, () => {
    fetchData()
}, {deep: true})

</script>

<style scoped>

</style>