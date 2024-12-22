<template>
    <div>
        <School :showSchoolName="showSchoolName"></School>
        <!--<Student @devent="showStudentName"></Student>-->
        <Student ref="student"></Student>
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
    name: 'App',
    components: {Student, School},
    methods:{
        showSchoolName(name){
            console.log(name)
        },
        showStudentName(name){
            console.log(name)
        }
    },
    mounted() {
        //给student的vc实例对象绑定($on)事件(devent),事件被触发时调用指定的回调函数
        this.$refs.student.$on('devent',this.showStudentName)
    }
}
</script>


<style scoped>

</style>