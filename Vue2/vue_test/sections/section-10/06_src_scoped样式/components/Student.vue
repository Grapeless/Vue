<template >
    <div class="test">
        <h2 class="fs">{{ name }}</h2>
        <h2>{{ age }}</h2>
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
.test{
    background-color: orange;
}
</style>