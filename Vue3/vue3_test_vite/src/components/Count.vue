<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <h2>当前10倍求和为：{{ multiSum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useCountStore} from "../store/count.js";
import {storeToRefs} from 'pinia'

defineOptions({
    name:'Count'
})
// 数据
const CountStore = useCountStore()
const {sum,multiSum} = storeToRefs(CountStore)
let n = ref(1) // 用户选择的数字

// 方法
function add() {
    CountStore.sum += n.value
}

function minus() {
    CountStore.sum -= n.value
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select, button {
    margin: 0 5px;
    height: 25px;
}
</style>