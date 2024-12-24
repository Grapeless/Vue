<template>
    <div class="row" >
        <div class="card" v-for="(value,index) in items" :key="value.id" v-show="items">
            <a :href="value.html_url" target="_blank">
                <img :src="value.avatar_url" style="width: 100px"/>
            </a>
            <p class="card-text">{{ value.login }}</p>
        </div>
        <h1 v-show="isFirst">Welcome!</h1>
        <h1 v-show="isLoading">Loading~</h1>
        <h1 v-show="errMsg">{{errMsg}}</h1>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            isFirst:true,
            isLoading:false,
            items: [],
            errMsg:''
        }
    },
    mounted() {
        this.$bus.$on('search',(state)=>{
            this.isFirst = false
            ;({items:this.items,isLoading:this.isLoading,errMsg:this.errMsg} = state)
        })
    }
}
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}

</style>