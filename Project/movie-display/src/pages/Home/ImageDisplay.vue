<template>
    <div class="relative ml-10 rounded duration-300 w-[300px] h-[375px] md:mt-8 lg:w-[400px] lg:h-[500px]">

        <div class="absolute top-8 -left-10 z-10 duration-300 peer group size-full hover:top-0 text-xs font-['JetBrains_Mono']">

            <!--hover特效2--书签效果-->
            <div class="absolute top-16 right-0 -z-10 h-14 w-20 rounded bg-yellow-300 duration-300 delay-0 group-hover:translate-x-3/4">
                <span class="absolute top-1/2 left-6 -translate-y-1/2 text-transparent duration-300 group-hover:text-black">
                    ACTION
                </span>
            </div>
            <div class="absolute top-32 right-0 -z-10 h-14 w-20 rounded bg-green-300 delay-200 duration-300 group-hover:translate-x-3/4">
                <span class="absolute top-1/2 left-6 -translate-y-1/2 text-transparent duration-300 group-hover:text-black">
                    Love
                </span>
            </div>
            <div class="absolute top-48 right-0 -z-10 h-14 w-20 rounded bg-rose-300 delay-300 duration-300 group-hover:translate-x-3/4">
                <span class="absolute top-1/2 left-6 -translate-y-1/2 text-transparent duration-300 group-hover:text-black">
                    Fancy
                </span>
            </div>

            <!--图片-->
            <img :src="realUrl" alt=""
                 class="rounded bg-cover shadow-lg shadow-slate-200 size-full">
        </div>

        <!--hover特效1--偏移边框-->
        <div class="absolute top-0 peer-hover:top-8 left-0 rounded border-2 border-indigo-200 duration-300 size-full"></div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const {cover} = defineProps(['cover'])
//不拼接这个报403啊啊啊啊啊啊啊，加了又好慢
const realUrl = ref('https://images.weserv.nl/?url='+cover.substring(7))

</script>

<style scoped>

</style>