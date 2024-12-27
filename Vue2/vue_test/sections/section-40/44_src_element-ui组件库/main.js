import Vue from 'vue'
import App from './App.vue'
/*import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);*/
import { Button, DatePicker,Row } from 'element-ui';
//这里的id就是默认的组件名
Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Row.name, Row);

Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
})