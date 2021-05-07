import { createRouter, createWebHashHistory,useRoute} from 'vue-router'
const routes:any = [
    {
        path: '/login',
        name: 'Test',
        component: () => import("/@/views/Login/login.vue"),
        meta: {
            title: "home",
            showTab: false,
            savedPosition: false,
        },
    }, {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/home.vue'),
        meta: {
            title: "home",
            showTab: true,
            savedPosition: false,
        },
    }, {
        path: "/search",
        name: 'Search',
        component: () => import('../views/Search/search.vue'),
        meta: {
            title: "search",
            showTab: true,
            savedPosition: false,
        },
    }, {
        path: "/",
        redirect: "/login",
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    // 根据路由元信息设置文档标题
    console.log(to,from,next(),"======")
    // next()
  })
export default router

