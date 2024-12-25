<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="subtract">-</button>
        <button @click="addWhenOdd">和为奇数再加</button>
        <button @click="addAfter">等一会再加</button>
    </div>
</template>

<script>
export default {
    name: "Count",
    data() {
        return {
            sum: 0,
            n: 1
        }
    },
    methods: {
        add() {
            this.sum += this.n
        },
        subtract() {
            this.sum -= this.n
        },
        addWhenOdd() {
            if (this.sum % 2){
                this.sum += this.n
            }
        },
        addAfter(){
            setTimeout(()=>{
                this.sum += this.n
            },500)
        }
    }
}
</script>

<style scoped>

</style>