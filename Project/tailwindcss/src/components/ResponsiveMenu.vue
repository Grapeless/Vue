<template>
    <nav class=" w-full bg-cyan-400 font-mono flex justify-center ">
        <section class="h-16 w-10/12  text-white  flex items-center gap-x-7">
            <a class="text-3xl hover:scale-105 duration-300" href="">Tailwind</a>

            <ul class="md:flex hidden ">
                <li class="p-2 cursor-pointer hover:bg-cyan-500 rounded duration-300"
                    v-for="(value,index) in content"
                    :key="index">
                    <a href="">{{value}}</a>
                </li>
            </ul>

            <form class="hidden xl:block">
                <input class="placeholder:font-sans placeholder:text-sm h-9 rounded  text-blue-900 caret-cyan-500 outline-none pl-2"
                       type="text"
                       placeholder="Search ">
            </form>

            <ul class="lg:flex hidden ml-auto">
                <li class="p-2 cursor-pointer underline underline-offset-4"><a href="">Login</a></li>
                <li class="p-2 cursor-pointer"><a href="">Register</a></li>
            </ul>

            <button class="md:hidden ml-auto p-2 hover:bg-cyan-500 rounded"
                    @click="setIsOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor"
                     class="size-8 select-none">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>

            <div class="h-screen w-3/4 bg-blue-500 fixed top-0 md:hidden duration-300 shadow-[-5px_0_5px_rgba(59,130,246,.3)]"
                 :class="{'right-0':!isOpen,'-right-full':isOpen}">

                <ul class="flex flex-col">
                    <li class="h-16 self-end flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor"
                             class="size-8 mr-12 hover:bg-cyan-500 rounded duration-300 cursor-pointer"
                             @click="setIsOpen">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </li>
                    <li v-for="(value,index) in content"
                        :key="index"
                        class="p-2 pl-6 cursor-pointer hover:bg-cyan-500 rounded duration-300">

                        <a href="">{{ value }}</a>
                    </li>
                </ul>
            </div>
        </section>
    </nav>
</template>

<script setup>
import {ref} from "vue";

const content = ref(['React', 'Vue', 'Pinia', 'Vuex', 'VueRouter'])
const isOpen = ref(true)

function setIsOpen() {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>