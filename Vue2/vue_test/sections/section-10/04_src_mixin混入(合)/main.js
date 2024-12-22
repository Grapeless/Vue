//引入Vue
import Vue from "vue";
//引入App组件
import App from "@/App.vue";
import {args, fun} from "@/mixin";
//关闭生成提示
Vue.config.productionTip = false

Vue.mixin(fun)
Vue.mixin(args)
//vm
new Vue({
    el: '#app',
    render: h => h(App)
})
