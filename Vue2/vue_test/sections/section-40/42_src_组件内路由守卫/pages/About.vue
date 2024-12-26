<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "About",
    beforeRouteEnter: (to, from, next) => {
        if (to.meta.tag) {
            if (localStorage.getItem('tag') === '2') {
                next()
            } else {
                console.log(localStorage.getItem('tag'))
            }
        } else {
            next()

        }
    },
    beforeRouteLeave:(to, from, next) =>{
        console.log(from,to)
        next()
    }
}
</script>

<style scoped>

</style>