<template>
    <div>
        <h2>{{ name }}</h2>
        <h2>{{ age }}</h2>
        <button @click="$emit('devent',name)">获取学生名</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: '野鸡',
            age: 18
        }
    }
}
</script>

<style scoped>

</style>