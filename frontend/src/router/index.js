import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name:'主页',
        component: () => import('../views/index.vue')
    },
    {
        path:'/danmu-record',
        name:'弹幕记录',
        component: () => import('../views/DanmuRecord.vue')
    },
    {
        path:'/meeting-outline-generation',
        name:'会议纲要生成',
        component: () => import('../views/MeetingOutline.vue')
    },
    {
        path:'/ASR',
        name:'语音识别',
        component:() => import('../views/ASR.vue')
    }

]


const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes
})

export default router