import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Messages from "../pages/Messages.vue";
import Details from "../pages/Details.vue";

export default new VueRouter({
    routes: [
        {
            path: '/About',
            component: About,
        },
        {
            path: '/Home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'messages',
                    component: Messages,
                    children:[
                        {
                            path:'details',
                            component:Details
                        }
                    ]
                }
            ]
        }
    ]
})