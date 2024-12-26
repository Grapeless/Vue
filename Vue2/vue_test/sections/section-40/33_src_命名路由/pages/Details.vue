<template>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息内容：{{$route.query.content}}</li>
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