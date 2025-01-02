<template>
    <h2>{{ a }}</h2>
    <h2>{{ b }}</h2>
    <h2>{{ obj.p1 }}</h2>
    <button @click="f()">按钮</button>
</template>

<script>
import {ref} from "vue";
export default {
    name: 'App',
    setup() {
        let a = ref(1)
        let b = ref('2')
        const obj = ref({
            p1:'p1',
            p2:'p2'
        })
        const f = function () {
            a.value = 2
            b.value = '3'
            obj.value.p1 = 'P1'

            console.log(a,b,obj.value)
        }
        return {
            a, b, f,obj
        }
    }
}
</script>

<style>

</style>
