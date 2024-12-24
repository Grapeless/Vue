//引入的不是完整版vue.js而是vue.runtime.js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',

    /*template:'<App></App>',
    components:{App},*/

    //使用render函数可使组件vue.runtime.js中正确引入解析。无需再配置template和components，虽然配置了也没用
    /*render(createElement) {
      // return createElement('h1','我是文本')
      return createElement(App)
    }*/

    //简写
    render: (h) => h(App)
})

//使用第二种挂载方式
/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
