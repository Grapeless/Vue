<template>
    <input type="text" v-model="msg">
    <h2>{{obj.p1+' '+obj.p2.p2_1}}</h2>
    <button @click="obj.p1+='~'">p1+~</button>
    <button @click="obj.p2['p2_1']+='-'">p2+!</button>
</template>

<script>

import {reactive, ref, watch} from "vue";

export default {
    name: 'App',
    components: {},
    setup() {
        const msg = ref('666')
        const obj = reactive({
            p1:'p1',
            p2:{
                p2_1:'p2_1'
            }
        })
        /*watch(msg, (newValue,oldValue)=>{
            console.log(newValue,oldValue)
        }, {immediate: true})*/

        /*watch(obj,(newValue, oldValue)=>{
            console.log(newValue,oldValue)
        },{
            immediate:true
        })*/
        /*watch(()=>obj.p2.p2_1,(newValue, oldValue)=>{
            console.log(newValue,oldValue)
        },{
            immediate:true
        })*/
        /*watch(()=>obj.p1,(newValue, oldValue)=>{
            console.log(newValue,oldValue)
        },{
            immediate:true
        })*/
        watch([()=>obj.p2.p2_1,()=>obj.p1],(newValue, oldValue)=>{
            console.log(newValue,oldValue)
        },{
            immediate:true
        })
        return{
            msg,obj
        }
    }
}
</script>

<style>

</style>
