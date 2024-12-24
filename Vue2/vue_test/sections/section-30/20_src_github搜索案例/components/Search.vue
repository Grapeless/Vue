<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text"
                   placeholder="enter the name you search"
                   v-model="keyword"
            />&nbsp;
            <button @click="search">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Search",
    data(){
        return{
            keyword:''
        }
    },
    methods:{
        search(){
            this.$bus.$emit('search',{isFirst:false,isLoading:true,items:[],errMsg:''})
            axios({
                url:`https://api.github.com/search/users?q=${this.keyword}`
            }).then(res =>{
                console.log(res.data.items)
                this.$bus.$emit('search',{isLoading:false,items:res.data.items,errMsg:''})
            }).catch(e =>{
                this.$bus.$emit('search',{isLoading:false,items:[],errMsg:e.message})
            })
        }
    }
}
</script>

<style scoped>

</style>