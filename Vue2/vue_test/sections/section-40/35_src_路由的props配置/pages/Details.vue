<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息内容：{{content}}</li>
    </ul>
</template>

<script>
export default {
    name: "Details",
    updated() {
        console.log(this.$route)
    },
    props:['id','content']
}
</script>

<style scoped>

</style>