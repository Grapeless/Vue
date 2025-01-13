<template>
    <div class="ml-auto flex cursor-pointer flex-col justify-evenly rounded bg-cyan-50 duration-300 size-8 hover:bg-cyan-100/70 lg:hidden"
         @click="updateIsOpen">

        <!-- 上横线 -->
        <span class="w-8 bg-black duration-300 h-[2px]"
              :class="isOpen ? 'translate-y-[8.5px] rotate-45' : ''">
                </span>

        <!-- 中横线（消失） -->
        <span class="w-8 bg-black duration-300 h-[2px]"
              :class="isOpen ? 'opacity-0' : ''">
                </span>

        <!-- 下横线 -->
        <span class="w-8 bg-black duration-300 h-[2px]"
              :class="isOpen ? '-translate-y-[8.5px] -rotate-45' : ''">
                </span>
    </div>
</template>

<script setup>

const {isOpen,updateIsOpen} = defineProps(['isOpen','updateIsOpen'])

</script>

<style scoped>

</style>