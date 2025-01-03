<template>
    <h2>{{d}}</h2>
    <button @click="emits('hello','667')">按钮</button>
</template>

<script setup>
const props = defineProps(['d'])
console.log(props.d)
const emits = defineEmits(['hello'])
</script>

<style scoped>

</style>