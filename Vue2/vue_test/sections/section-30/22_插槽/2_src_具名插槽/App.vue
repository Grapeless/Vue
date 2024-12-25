<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
                 alt=""
                 slot="content"
            >
            <a href="https://www.baidu.com" slot="links">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="content">
                <li v-for="(value,index) in games" :key="index">
                    {{ value }}
                </li>
            </ul>
            <div slot="links" class="footer">
                <a href="https://www.baidu.com">单机游戏</a>
                <a href="https://www.baidu.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                   slot="content"
            ></video>
            <template v-slot:links>
                <div class="footer">
                    <a href="https://www.baidu.com">经典</a>
                    <a href="https://www.baidu.com">热门</a>
                    <a href="https://www.baidu.com">推荐</a>
                </div>
                <h1>欢迎观看</h1>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
    name: 'App',
    components: {Category},
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
        }
    }
}
</script>

<style scoped>
.container ,.footer{
    display: flex;
    justify-content: space-around;
}
h1{
    text-align: center;
}
</style>
