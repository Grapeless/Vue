<template>
    <Demo msg="123" name="app" @hello="handleHello">
        <span>6666</span>
    </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
    name: 'App',
    components: {Demo},
    setup(){
        function handleHello (value){
            alert(value)
        }
        return{
            handleHello
            
        }
    }
}
</script>

<style>

</style>
