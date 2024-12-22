<template>
    <div>
        <h1 ref="title"></h1>
        <button @click="showMsg" ref="btn">点我获取信息</button>
        <School ref="School"></School>
    </div>
</template>

<script>
import School from "./components/School.vue";

export default {
    name: "App",
    components: {School},
    methods:{
        showMsg(){
            console.log(this.$refs)
            console.log(this.$refs.School)
            console.log(this.$refs.btn)
            console.log(this.$refs.title)
        }
    }
}
</script>

<style scoped>

</style>