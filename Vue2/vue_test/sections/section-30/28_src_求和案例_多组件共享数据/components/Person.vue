<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件中和的值为:{{sum}}</h3>
        <input type="text" placeholder="请输入姓名" v-model="name">
        <button @click="addPerson">确认</button>
        <ul>
            <li v-for="value in persons" :key="value.id">
                {{value.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from "nanoid"

export default {
    name: "Person",
    data(){
        return{
            name:''
        }
    },
    computed:{
        persons(){
            return this.$store.state.persons
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods:{
        addPerson(){
            this.$store.commit('ADD_PERSON',{
                id:nanoid(),
                name:this.name
            })
            this.name =''
        }
    }
}
</script>

<style scoped>

</style>