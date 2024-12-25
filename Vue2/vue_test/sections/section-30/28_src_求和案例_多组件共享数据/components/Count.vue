<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>十倍和：{{ multiSum }}</h3>
        <h3>{{ student }}在{{ school }}学vue</h3>
        <h3>Person组件中人数的个数为：{{persons.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="subtract(n)">-</button>
        <button @click="addWhenOdd(n)">和为奇数再加</button>
        <button @click="addAfter(n)">等一会再加</button>
    </div>
</template>

<script>
import {mapState, mapGetters,mapActions,mapMutations} from "vuex";

export default {
    name: "Count",
    data() {
        return {
            n: 1
        }
    },
    computed: {
        // ...mapState({sum: 'sum', student: 'student', school: 'school'}),
        ...mapState(['sum','school','student','persons']),
        // ...mapGetters({multiSum:'multiSum'})
        ...mapGetters(['multiSum'])
    },
    methods: {
        /*add() {
            //dispatch(触发的动作,传递的参数)
            // this.$store.dispatch('add', this.n)
            this.$store.commit('ADD',this.n)
        },
        subtract() {
            //dispatch进入action里后无额外逻辑可直接通过commit交给mutations
            this.$store.commit('SUBTRACT', this.n)
        },*/
        ...mapMutations({add:'ADD',subtract:'SUBTRACT'}),
        // ...mapMutations(['ADD','SUBTRACT']),
        /*
        addWhenOdd() {
            //处理逻辑尽量放在actions中，利于组件复用
            this.$store.dispatch('addWhenOdd', this.n)
        },
        addAfter() {
            this.$store.dispatch('addAfter', this.n)
        }*/
        // ...mapActions({addWhenOdd:'addWhenOdd',addAfter:'addAfter'})
        ...mapActions(['addAfter','addWhenOdd'])
    },
    mounted() {
        console.log(this.$store)
    }
}
</script>

<style scoped>

</style>