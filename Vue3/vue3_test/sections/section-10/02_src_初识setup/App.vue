<template>
    <h2>{{ a }}</h2>
    <h2>{{ b }}</h2>
    <button @click="f(1,1)">按钮</button>
</template>

<script>
export default {
    name: 'App',
    setup() {
        let a = 1
        let b = '2'
        const f = function (a, b) {
            alert(a + b)
        }
        return {
            a, b, f
        }
    }
}
</script>

<style>

</style>
