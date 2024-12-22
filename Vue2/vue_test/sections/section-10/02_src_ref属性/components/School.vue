<template>
<div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
</div>
</template>

<script>

export default {
    name: "School",
    data(){
        return{
            name:'野鸡',
            address:'湖北省'
        }
    }
}
</script>

<style scoped>
.school{
    background-color: gray;
}
</style>