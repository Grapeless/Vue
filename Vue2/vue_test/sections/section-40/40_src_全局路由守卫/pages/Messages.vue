<template>
    <div>
        <ul>
            <li v-for="(value) in msgList" :key="value.id">
                <!--<router-link :to="`/home/messages/details/${value.id}/${value.content}`">-->
                <router-link :to="{
                    // path:'/home/messages/details'
                    name:'xiangqing',
                    query:{
                        id:value.id,
                        content:value.content
                    }
                }">{{ value.content }}</router-link>
                <button @click="pushShow(value)">push查看</button>
                <button @click="replaceShow(value)"> 查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Messages",
    data() {
        return {
            msgList: [
                {id: '001', content: '消息001'},
                {id: '002', content: '消息002'},
                {id: '003', content: '消息003'},
            ]
        }
    },
    methods:{
        pushShow(value){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:value.id,
                    content:value.content
                }
            })
        },
        replaceShow(value){
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:value.id,
                    content:value.content
                }
            })
        }
    }

}
</script>

<style scoped>

</style>