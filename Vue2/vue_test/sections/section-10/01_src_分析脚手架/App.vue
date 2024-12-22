<template>
    <div>
        <School></School>
        <Student></Student>
        <img src="./assets/logo.png" alt="">
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: 'App',
    components: {Student, School}
}
</script>

<style scoped>

</style>