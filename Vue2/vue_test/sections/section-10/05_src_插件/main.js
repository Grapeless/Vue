//引入Vue
import Vue from "vue";
//引入App组件
import App from "@/App.vue";
import plugin from "@/plugin";
//关闭生成提示
Vue.config.productionTip = false

Vue.use(plugin)
//vm
 const vm = new Vue({
    el: '#app',
    render: h => h(App)
})
console.log(vm)
