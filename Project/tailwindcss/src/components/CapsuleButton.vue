<template>
    <ul class="rounded-full w-96 h-10 px-1 bg-blue-500 mx-auto mt-2 flex  justify-evenly items-center">
        <!--1.解构含多个确定值的样式对象-->
        <!--2.若不需要布尔值也可以拼接数组-->
        <li v-for="(value,index) in content" :key="index"
            class="duration-200 cursor-pointer h-8 flex-1 text-center rounded-full text-white text-xs flex justify-center items-center"
            :class="{...(activeIndex === index ? capsuleStyle:{})}"
            @click="setCapsuleStyle(index)"
        >
            {{ value }}
        </li>
    </ul>
</template>

<script setup>
import {ref} from "vue";

const content = ref(['Home', 'Profile', 'Contact', 'User', 'Default'])
const activeIndex = ref()
const capsuleStyle = {
    'bg-white': true,
    'text-blue-500': true
}

function setCapsuleStyle(index) {
    activeIndex.value = index
}
</script>

<style scoped>

</style>