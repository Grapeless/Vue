<template>
    <div>
        <h2 >{{ name }}</h2>
        <h2>{{ age }}</h2>
        <input type="text" v-f-bind="name">
    </div>
</template>

<script>

export default {
    name: "Student",
    data() {
        return {
            name:'野鸡',
            age:18
        }
    },
}
</script>

<style scoped>

</style>