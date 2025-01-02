<template>
    <h2>{{ a }}</h2>
    <h2>{{ b }}</h2>
    <h2>{{ obj.p1 }}</h2>
    <button @click="f()">按钮</button>
    <button @click="emitHello">按钮</button>
</template>

<script>
import {ref, reactive} from "vue";

export default {
    props:['msg'],
    emits:['hello'],
    setup(props,context) {
        //已接受
        console.log(props)
        //未接收
        console.log(context.attrs)

        console.log(context.slots)

        console.log(context.emit)

        function emitHello(){
            context.emit('hello','000')
        }

        let a = ref(1)
        let b = ref('2')
        /*const obj = ref({
            p1:'p1',
            p2:'p2'
        })*/
        //用reactive创建响应式对象，相当于通过ref创建后再通过.value拿到的对象
        const obj = reactive({
            p1: 'p1',
            p2: 'p2'
        })
        const f = function () {
            a.value = 2
            b.value = '3'
            // obj.value.p1 = 'P1'
            obj.p1 = 'P1'

            // console.log(a,b,obj.value)
            console.log(a, b, obj)
        }

        return {
            a, b, f, obj,emitHello
        }
    }
}

</script>

<style scoped>

</style>