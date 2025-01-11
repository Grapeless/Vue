import {createRouter, createWebHistory} from 'vue-router'
import Page1 from "@/pages/Page1.vue";
import Page2 from "@/pages/Page2.vue";
import Page1_1 from '@/pages/Page1_1.vue'
export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'page1',
            path:'/page1',
            component: Page1,
            children:[{
                name:'page1_1',
                path:'page1_1',
                component:Page1_1
            }]
        },
        {
            name:'page2',
            path:'/page2',
            component:Page2
        }
    ]
})