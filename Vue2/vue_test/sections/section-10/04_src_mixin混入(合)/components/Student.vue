<template>
    <div>
        <h2 @click="showMsg">{{ name }}</h2>
        <h2>{{ age }}</h2>
    </div>
</template>

<script>
// import {args, fun} from "@/mixin";

export default {
    name: "Student",
    data() {
        return {
            name:'野鸡',
            age:18
        }
    },
    // mixins:[fun,args]
}
</script>

<style scoped>

</style>