<template>
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息内容：{{$route.params.content}}</li>
    </ul>
</template>

<script>
export default {
    name: "Details",
    updated() {
        console.log(this.$route)
    }
}
</script>

<style scoped>

</style>