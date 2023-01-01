import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../views/main/MainLayout.vue'),
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

export default router