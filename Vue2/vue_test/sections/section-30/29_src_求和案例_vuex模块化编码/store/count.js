export default  {
    namespaced: true,
    actions: {
        add(context, value) {
            // console.log(context)
            context.commit('ADD', value)
        },
        addWhenOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addAfter(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)
        }
    },
    mutations: {
        ADD(state, value) {
            console.log(state)
            state.sum += value
        },
        SUBTRACT(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        student: '野鸡',
        school: '野鸡大学',
    },
    getters: {
        multiSum(state) {
            return state.sum * 10
        }
    }
}