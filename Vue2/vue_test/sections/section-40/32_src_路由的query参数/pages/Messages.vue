<template>
    <div>
        <ul>
            <li v-for="(value) in msgList" :key="value.id">
                <!--<router-link :to="`/home/messages/details?id=${value.id}&content=${value.content}`">-->
                <!--    {{value.content}}-->
                <router-link :to="{
                    path:'/home/messages/details',
                    query:{
                        id:value.id,
                        content:value.content
                    }
                }">{{ value.content }}</router-link>&nbsp;&nbsp;
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
    }
}
</script>

<style scoped>

</style>