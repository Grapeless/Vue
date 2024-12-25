export default  {
    namespaced:true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [
            {id: '001', name: '🐖'}
        ]
    },
    getters: {}
}