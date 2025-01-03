import {defineStore} from 'pinia'
import {computed, ref} from "vue";

/*
export const useCountStore = defineStore('count', {
    state() {
        return {
            sum: 6
        }
    },
    getters: {
        // multiSum: state => state.sum * 10
        multiSum() {
            console.log(this)
            return this.sum * 10
        }
    }
})*/
export const useCountStore = defineStore('count', () => {
    const sum = ref(6)
    const multiSum = computed(() => {
        return sum.value * 10
    })
    return {
        sum, multiSum
    }
})
