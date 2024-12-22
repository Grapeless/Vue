<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ uName }}</h2>
        <h2>{{ myAge }}</h2>
        <h2>{{ sex }}</h2>
        <h2>{{count}}</h2>
        <button @click="updateAge">年龄加一</button>
        <!--<button @click="updateCount">年龄加一</button>-->
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            title: '学生信息',
            myAge:this.age,
        }
    },
    props:{
        uName:String,
        age:Number,
        sex:{
            type:String,
            required:true
        },
        count:{
            type:Number,
            default:0
        }
    },
    methods:{
        updateAge(){
            this.myAge++
            console.log(this)
        },
        /*updateCount(){
            // this.count++
        }*/
    }
}
</script>

<style scoped>

</style>