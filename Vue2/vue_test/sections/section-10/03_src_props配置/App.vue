<template>
<div>
    <Student uName="🐗" :age="12" sex="it" :count="1"></Student>
    <Student uName="🦜" :age="4" sex="it"></Student>
</div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: {Student}
}
</script>

<style scoped>

</style>