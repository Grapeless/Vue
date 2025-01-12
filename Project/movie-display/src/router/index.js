import {createRouter, createWebHistory} from "vue-router";
import Category from "@/pages/Category/Category.vue";
import Fav from "@/pages/Fav/Fav.vue";
import Home from "@/pages/Home/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/Category',
            component: Category
        },
        {
            path: '/Fav',
            component: Fav
        },
        {
            path: '/Pages',
            component: Home
        },
        {
            path: '/Blogs',
            component: Home
        },
        //重定向
        {
            path:'/',
            redirect:'/Home'
        }
    ]
})