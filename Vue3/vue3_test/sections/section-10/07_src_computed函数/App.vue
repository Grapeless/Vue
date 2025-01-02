<template>
    firstName:<input type="text" v-model="firstName">
    <br>
    lastName:<input type="text" v-model="lastName">
    <br>
    全名:<input type="text" v-model="fullName">
</template>

<script>

import {computed, ref} from "vue";

export default {
    name: 'App',
    components: {},
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        /*let fullName = computed(() => {
            return firstName.value + lastName.value
        })*/
        const fullName = computed({
            get(){
                console.log(firstName)
                // return firstName.value + lastName.value
                return `${firstName.value}-${lastName.value}`
            },
            set(newValue){
                // console.log(newValue)
                firstName.value = newValue.split('-')[0]
                lastName.value = newValue.split('-')[1]
            }
        })
        return {
            firstName, lastName, fullName
        }
    }

}
</script>

<style>

</style>
