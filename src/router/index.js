import { createWebHistory, createRouter } from "vue-router";
import Feed from "@/views/Feed.vue";
import Login from "@/views/Login.vue";

const routes = [
    {
        path: "/",
        name: "Feed",
        component: Feed,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: 'AuthLayout'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
