<template>
    <div class="w-full">
        <nav class="w-10/12 h-[100px] flex mx-auto items-center">

            <!--Logo-->
            <div class="flex text-2xl  font-['spicy_shrimp'] ">
                <svg b="1736649533141" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="5972"
                     class="icon size-8 fill-black">
                    <path d="M768 170.666667l85.333333 170.666667-128 0-85.333333-170.666667-85.333333 0 85.333333 170.666667-128 0-85.333333-170.666667-85.333333 0 85.333333 170.666667-128 0-85.333333-170.666667-42.666667 0c-47.146667 0-84.906667 38.186667-84.906667 85.333333l-0.426667 512c0 47.146667 38.186667 85.333333 85.333333 85.333333l682.666667 0c47.146667 0 85.333333-38.186667 85.333333-85.333333l0-597.333333-170.666667 0z"
                          fill="#444444" p-id="5973">
                    </path>
                </svg>
                <a href="" class="pt-0.5">MOVIES</a>
            </div>

            <!--菜单-->
            <ul class="hidden lg:flex font-mono ml-auto gap-x-12 ">
                <li v-for="(value,index) in pages" :key="index"
                    class="p-3 cursor-pointer hover:bg-cyan-100/70 rounded duration-200">
                    <RouterLink :to="{path:`/${value}`}">{{ value }}</RouterLink>
                </li>
            </ul>

            <!--搜索-->
            <svg class="size-5 cursor-pointer mx-16 hidden lg:block"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                 stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <!--响应式菜单-->
            <div class="lg:hidden hover:bg-cyan-100/70 duration-300 rounded flex flex-col justify-evenly bg-cyan-50 size-8 cursor-pointer "
                 @click="isOpen = !isOpen">

                <!-- 上横线 -->
                <span class="h-[2px] w-8 bg-black duration-300"
                      :class="isOpen ? 'translate-y-[8.5px] rotate-45' : ''">
                </span>

                <!-- 中横线（消失） -->
                <span class="h-[2px] w-8 bg-black duration-300"
                      :class="isOpen ? 'opacity-0' : ''">
                </span>

                <!-- 下横线 -->
                <span class="h-[2px] w-8 bg-black duration-300"
                      :class="isOpen ? '-translate-y-[8.5px] -rotate-45' : ''">
                </span>
            </div>

        </nav>

        <!--路由页面-->
        <div class="w-10/12 mx-auto">
            <RouterView class=""></RouterView>
        </div>
    </div>

</template>

<script setup>
import {RouterLink, RouterView} from "vue-router";
import {ref} from "vue";

const pages = ref(['Home', 'Category', 'Fav', 'Pages', 'Blogs'])
const isOpen = ref(false)
</script>

<style scoped>

</style>