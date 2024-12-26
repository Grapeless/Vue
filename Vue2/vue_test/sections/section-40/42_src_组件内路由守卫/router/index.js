import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Messages from "../pages/Messages.vue";
import Details from "../pages/Details.vue";

const router = new VueRouter({
    routes: [
        {
            path: '/About',
            component: About,
            meta: {
                tag: true
            }
        },
        {
            path: '/Home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    meta: {
                        tag: true
                    },
                   /* beforeEnter: (to, from, next) => {
                        if (to.meta.tag) {
                            if (localStorage.getItem('tag') === '1') {
                                next()
                            } else {
                                console.log(localStorage.getItem('tag'))
                            }
                        } else {
                            next()

                        }
                    }*/
                },
                {
                    path: 'messages',
                    component: Messages,
                    meta: {
                        tag: true
                    },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'details',
                            component: Details,
                            props({query}) {
                                return {
                                    id: query.id,
                                    content: query.content
                                }
                            }
                        }
                    ],
                }
            ]
        }
    ]
})
/*router.beforeEach((to, from, next) => {
    console.log(from, to)
    /!*if(to.path !== '/home/news' && to.path !== '/home/messages'){
        if(localStorage.getItem('tag')==='1'){
            next()
        }
    }*!/
    console.log(to.meta.tag)
    if (to.meta.tag) {
        if (localStorage.getItem('tag') === '1') {
            next()
        }else {
            console.log(localStorage.getItem('tag'))
        }
    }else {
        next()
    }
    /!*if(to.meta.tag){ //判断是否需要鉴权
        if(localStorage.getItem('tag')==='1'){
            next()
        }else{
            alert('学校名不对，无权限查看！')
        }
    }else{
        next()
    }*!/
})*/
/*router.afterEach((to, from)=>{

})*/
export default router