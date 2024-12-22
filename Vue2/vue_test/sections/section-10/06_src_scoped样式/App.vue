<template>
<div >
    <h1 class="fs">我是标题</h1>
    <Student ></Student>
    <School></School>
</div>
</template>

<script>

import Student from "./components/Student.vue";
import School from "./components/School.vue";


export default {
    name: "App",
    components: {School, Student}
}
</script>

<style >
.fs{
    color: red;
}
</style>