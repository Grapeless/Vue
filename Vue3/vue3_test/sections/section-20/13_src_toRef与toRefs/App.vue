<template>
    <h2>{{p1}}</h2>
    <h2>{{p2_1}}</h2>
    <h2>{{p3}}</h2>
</template>

<script>

import {reactive, ref, toRef, toRefs} from "vue";

export default {
    name: 'App',
    components: {},
    setup() {
        const obj = reactive(
            {
                p1: 'p1',
                p2: {
                    p2_1: 'p2_1'
                },
                p3:'p3'
            }
        )
        //1.解构一层，后续在模板中用点语法
        const {p1,p2} = toRefs(obj)
        //2.或继续使用toRef加工次级对象，但不是继续加工解构出的对象，而是直接加工原对象点语法出来的二级对象
        const p2_1 = toRef(obj.p2,'p2_1')

        // console.log(toRefs(obj))
        return{
            p1,p2_1,
            p3:toRef(obj,'p3')
        }
    }
}
</script>

<style>

</style>
