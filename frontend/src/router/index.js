import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name:'Home',
        component: () => import('../views/Home/index.vue')
    },
    {
        path:'/danmu',
        name:'弹幕',
        
    }
]


const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes
})

export default router