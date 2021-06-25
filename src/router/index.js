import { createWebHistory, createRouter } from "vue-router";
import Feed from "@/views/Feed.vue";
import Landing from "@/views/Landing.vue";
import Register from "@/views/Register.vue";
import Confirm from "@/views/Confirm.vue";
import Reset from "@/views/Reset.vue";
import Shuffle from "@/views/Shuffle.vue";
import Profile from "@/views/Profile.vue";
import Add from "@/views/Add.vue";
import NewPassword from "@/views/NewPassword.vue";

const routes = [
    {
        path: "/feed",
        name: "Feed",
        component: Feed,
        meta: {
            transitionName: 'slide',
            transitionRules: {
                'slide-right': ['/add', '/shuffle', '/profile']
            }
        }
    },
    {
        path: "/add",
        name: "Add",
        component: Add,
        meta: {
            transitionName: 'slide',
            transitionRules: {
                'slide-right': ['/profile'],
                'slide-left': ['/feed', 'shuffle']
            }
        }
    },

    {
        path: "/shuffle",
        name: "Shuffle",
        component: Shuffle,
        meta: {
            transitionName: 'slide',
            transitionRules: {
                'slide-right': ['/add', '/profile'],
                'slide-left': ['/feed']
            }
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            transitionName: 'slide',
            'slide-left': ['/feed', '/add', 'shuffle']
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
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
        meta: {
            layout: 'AuthLayout',
            transitionName: 'slide'
        }
    },
    {
        path: "/reset",
        name: "Reset",
        component: Reset,
        meta: {
            layout: 'AuthLayout',
            transitionName: 'slide'
        }
    },
    {
        path: "/new-password",
        name: "NewPassword",
        component: NewPassword,
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

const directions = ['slide-right', 'slide-right']

router.beforeEach((to, from) => {
    if (to.meta.transitionRules) {
        directions.forEach(direction => {
            if(to.meta.transitionRules[direction] && to.meta.transitionRules[direction].find(path => path === from.path)) {
                to.meta.transitionName = direction
            }
        })
    }
})




export default router;
