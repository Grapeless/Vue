<template>
    <!--导航头(忘记做固定定位了...)-->
    <div class="w-full">
        <nav class="mx-auto flex w-10/12 items-center h-[100px]">
            <!--Logo-->
            <div class="flex text-2xl  font-['spicy_shrimp'] ">
                <svg b="1736649533141" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="5972"
                     class="fill-black icon size-8">
                    <path d="M768 170.666667l85.333333 170.666667-128 0-85.333333-170.666667-85.333333 0 85.333333 170.666667-128 0-85.333333-170.666667-85.333333 0 85.333333 170.666667-128 0-85.333333-170.666667-42.666667 0c-47.146667 0-84.906667 38.186667-84.906667 85.333333l-0.426667 512c0 47.146667 38.186667 85.333333 85.333333 85.333333l682.666667 0c47.146667 0 85.333333-38.186667 85.333333-85.333333l0-597.333333-170.666667 0z"
                          fill="#444444" p-id="5973">
                    </path>
                </svg>
                <a href="" class="pt-0.5">MOVIES</a>
            </div>

            <!--菜单-->
            <ul class="ml-auto hidden gap-x-12 font-mono lg:flex">
                <li v-for="(value,index) in pages" :key="index"
                    class="cursor-pointer rounded p-3 duration-200 hover:bg-cyan-100/70">
                    <RouterLink :to="{path:`/${value}`}">{{ value }}</RouterLink>
                </li>
            </ul>

            <!--搜索-->
            <svg class="mx-16 hidden cursor-pointer size-5 lg:block"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <!--响应式菜单按钮-->
            <AnimatedButton :isOpen="isOpen" :updateIsOpen="updateIsOpen"></AnimatedButton>
        </nav>

        <!--响应式菜单-->
        <nav class="fixed lg:hidden rounded-l duration-300 z-20 w-5/12 h-full bg-cyan-50 top-0 font-['JetBrains_Mono']"
             :class="isOpen?'right-0':'-right-full'">

            <ul class="flex flex-col gap-y-5">
                <li class="pt-8 pr-10"><AnimatedButton :isOpen="isOpen" :updateIsOpen="updateIsOpen"/></li>
                <li v-for="(value,index) in pages" :key="index"
                    class="cursor-pointer rounded p-3 duration-200 hover:bg-cyan-100/70">
                    <RouterLink :to="{path:`/${value}`}">{{ value }}</RouterLink>
                </li>
            </ul>
        </nav>

        <!--路由页面-->
        <div class="mx-auto w-10/12">
            <RouterView></RouterView>
        </div>
    </div>

</template>

<script setup>
import {RouterLink, RouterView} from "vue-router";
import {ref} from "vue";
import AnimatedButton from "@/components/AnimatedButton.vue";

const pages = ref(['Home', 'Category', 'Fav', 'Pages', 'Blogs'])

//使用AnimatedButton组件时需要传递的参数和函数，能够跨组件保持按钮状态的独立，
//但同一个组件间仍然会连携，刚好利用这个特点实现切换
const isOpen = ref(false)
const updateIsOpen = function (){
    isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>