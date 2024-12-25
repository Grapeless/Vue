<template>
    <div class="container">

        <Category title="美食">
            <template slot-scope="{films}">
                <ul>
                    <li v-for="(value,index) in films" :key="index">
                        {{ value }}
                    </li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{films}">
                <ol>
                    <li v-for="(value,index) in films" :key="index">
                        {{ value }}
                    </li>
                </ol>
            </template>
        </Category>

        <Category title="电影">
            <template slot-scope="{films}">
                    <h4 v-for="(value,index) in films"  :key="index">{{value}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
    name: 'App',
    components: {Category},

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}

h1 ,h4{
    text-align: center;
}
</style>
