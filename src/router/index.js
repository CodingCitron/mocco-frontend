import { createWebHistory, createRouter } from 'vue-router'
import packageJson from '../../package.json'

const routes = [
    {
        path: '/', 
        component: () => import('../views/main/MainLayout.vue'),
        meta: {
            title: 'mocco-main'
        },
        children: [
            {
                path: '/',
                component: () => import('../views/main/MainPage.vue')
            }
        ]
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.afterEach((to, from) => {
    const title = to.meta.title || packageJson.name
    if(title) document.title = title
})

export default router