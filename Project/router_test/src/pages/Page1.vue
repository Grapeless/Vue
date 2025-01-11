<template>
    <div>
        page1
        <br>
        <RouterLink :to="{name:'page1_1'}">Go to page1_1</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import {RouterLink,RouterView} from "vue-router";
</script>

<style scoped>
div{
    background-color: palegreen;
    height: 200px;
    width: 200px;
}
</style>