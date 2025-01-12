<template>
    <!--<div class="mx-auto mt-10 flex flex-col items-center justify-center bg-yellow-200 size-12 cursor-pointer"
         @click="isOpen = !isOpen">

        <span class="origin-center h-[4px] w-10 bg-black transition-transform duration-300"
              :class="isOpen ? 'translate-y-[8px]  rotate-45 ' : ''">
        </span>

        <span class="origin-center h-[4px] w-10 bg-black my-2 transition-opacity duration-300"
              :class="isOpen ? 'opacity-0' : ''">
        </span>

        <span class="origin-center h-[4px] w-10 bg-black transition-transform duration-300"
              :class="isOpen ? '-translate-y-[8px]  -rotate-45 ' : ''">
        </span>

    </div>-->
    <!--<div class="mx-auto mt-10 flems-center justify-center bg-yellow-200 size-12 cursor-pointer"
         @click="isOpen = !isOpen">

        &lt;!&ndash; 上横线 &ndash;&gt;
        <span class="origin-center h-1 w-10 bg-black transition-transform duration-300"
              :class="isOpen ? 'translate-y-[11.5px] rotate-45' : ''">
        </span>

        &lt;!&ndash; 中横线（消失） &ndash;&gt;
        <span class="origin-center h-1 w-10 bg-black my-2 transition-opacity duration-300"
              :class="isOpen ? 'opacity-0' : ''">
        </span>

        &lt;!&ndash; 下横线 &ndash;&gt;
        <span class="origin-center h-1 w-10 bg-black transition-transform duration-300"
              :class="isOpen ? '-translate-y-[11.5px] -rotate-45' : ''">
        </span>

    </div>-->
    <div class="flex flex-col justify-evenly bg-yellow-200 size-8 cursor-pointer "
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
</template>

<script setup>
import {ref} from "vue";

const isOpen = ref(false);

function changeStyle() {
}
</script>

<style scoped>
</style>