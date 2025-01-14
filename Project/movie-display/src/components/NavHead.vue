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
            <div class="lg:flex ml-12 hidden  cursor-pointer items-center">
                <!--搜索框-->
                <input type="text"
                       placeholder="What type?"
                       ref="searchInp"
                       class="pl-2 placeholder:text-sm placeholder:font-['JetBrains_Mono'] w-32 h-8 duration-200 outline-none rounded mr-4 bg-cyan-50"
                       :class="{'w-0':searchButtonState}">

                <!--放大镜图标-->
                <svg class=" size-5 "
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                     stroke="currentColor"
                    @click="searchMovie">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
            </div>

            <!--响应式菜单按钮-->
            <AnimatedButton :isOpen="isOpen" :updateIsOpen="updateIsOpen"></AnimatedButton>
        </nav>

        <!--响应式菜单-->
        <nav class="fixed lg:hidden rounded-l duration-300 z-20 w-5/12 h-full bg-cyan-50 top-0 font-['JetBrains_Mono']"
             :class="isOpen?'right-0':'-right-full'">

            <ul class="flex flex-col gap-y-5">
                <li class="pt-8 pr-10">
                    <AnimatedButton :isOpen="isOpen" :updateIsOpen="updateIsOpen"/>
                </li>
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
import {ref, toRef} from "vue";
import AnimatedButton from "@/components/AnimatedButton.vue";
import {useHomeSearchValue} from "@/store/useHomeSearchValue.js";
import {storeToRefs} from "pinia";

const pages = ref(['Home', 'Category', 'Fav', 'Pages', 'Blogs'])

//使用AnimatedButton组件时需要传递的参数和函数，能够跨组件保持按钮状态的独立，
//但同一个组件间仍然会连携，刚好利用这个特点实现切换
const isOpen = ref(false)
const updateIsOpen = function () {
    isOpen.value = !isOpen.value
}

//搜索按钮的状态
const searchButtonState = ref(false)

//搜索框的ref对象
const searchInp = ref()

//pinia对象保存搜索值
//要么解构storeToRefs(useHomeSearchValue())，然后通过.value访问
//要么直接通过useHomeSearchValue()这本来是一个函数返回的对象，通过点语法访问
const {homeSearchValue} = storeToRefs(useHomeSearchValue())

const searchMovie = function () {
    //无搜索值则关闭搜索
    if(!searchInp.value.value){
        searchButtonState.value = !searchButtonState.value
    }
    //传值至pinia
    homeSearchValue.value = searchInp.value.value
    //清空表单
    searchInp.value.value = ''

}
</script>

<style scoped>

</style>