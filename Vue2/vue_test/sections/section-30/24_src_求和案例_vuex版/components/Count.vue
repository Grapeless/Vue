<template>
    <div>
        <h1>当前求和为：{{ $store.state.sum }}</h1>
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
            n: 1
        }
    },
    methods: {
        add() {
            //dispatch(触发的动作,传递的参数)
            this.$store.dispatch('add', this.n)
        },
        subtract() {
            //dispatch进入action里后无额外逻辑可直接通过commit交给mutations
            this.$store.commit('SUBTRACT', this.n)
        },
        addWhenOdd() {
            //处理逻辑尽量放在actions中，利于组件复用
            this.$store.dispatch('addWhenOdd', this.n)
        },
        addAfter() {
            this.$store.dispatch('addAfter', this.n)
        }
    },
    mounted() {
        console.log(this)
    }
}
</script>

<style scoped>

</style>