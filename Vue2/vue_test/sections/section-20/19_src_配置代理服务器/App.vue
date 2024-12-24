<template>
    <div>
        <button @click="getStudentName">获取学生姓名</button>
        <button @click="getCarName">获取汽车姓名</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "App",
    methods:{
        getStudentName() {
            axios({
                url:'http://localhost:8080/api/students'
            }).then(res =>{
                console.log(res)
            }).catch(e =>{
                console.log(e)
            })
        },
        getCarName() {
            axios({
                url:'http://localhost:8080/api/cars'
            }).then(res =>{
                console.log(res)
            }).catch(e =>{
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>

</style>