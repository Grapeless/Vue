<template>
    <h2>{{ point[0] }}</h2>
    <h2>{{ point[1] }}</h2>
    <br>
</template>

<script setup>
import usePoint from "../hooks/usePoint";

const point = usePoint()
</script>

<style scoped>

</style>