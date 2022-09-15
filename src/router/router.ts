import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})
