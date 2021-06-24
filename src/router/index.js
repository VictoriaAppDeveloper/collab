import { createWebHistory, createRouter } from "vue-router";
import Feed from "@/views/Feed.vue";
import Landing from "@/views/Landing.vue";
import Register from "@/views/Register.vue";
import Sms from "@/views/Sms.vue";

const routes = [
    {
        path: "/feed",
        name: "Feed",
        component: Feed,
        meta: {
        }
    },
    {
        path: "/",
        name: "Landing",
        component: Landing,
        meta: {
            layout: 'AuthLayout',
            transitionName: 'slide'
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            layout: 'AuthLayout',
            transitionName: 'slide'
        }
    },
    {
        path: "/sms",
        name: "Sms",
        component: Sms,
        meta: {
            layout: 'AuthLayout',
            transitionName: 'slide'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});



export default router;
