import { createWebHistory, createRouter } from "vue-router";
import Feed from "@/views/Feed.vue";
import Landing from "@/views/Landing.vue";
import Register from "@/views/Register.vue";
import Confirm from "@/views/Confirm.vue";
import Reset from "@/views/Reset.vue";
import Shuffle from "@/views/Shuffle.vue";
import Profile from "@/views/Profile.vue";
import Add from "@/views/Add.vue";
import Post from "@/views/Post.vue";
import ProfileAll from "@/views/profile/All.vue";
import ProfilePictures from "@/views/profile/Pictures.vue";
import ProfileVideo from "@/views/profile/Video.vue";
import ProfileConferences from "@/views/profile/Conferences.vue";
import ProfileTranslations from "@/views/profile/Translations.vue";
import Profile3d from "@/views/profile/3d.vue";
import FeedAll from "@/views/feed/All.vue";
import FeedPictures from "@/views/feed/Pictures.vue";
import FeedVideo from "@/views/feed/Video.vue";
import FeedConferences from "@/views/feed/Conferences.vue";
import FeedTranslations from "@/views/feed/Translations.vue";
import Feed3d from "@/views/feed/3d.vue";
import Edit from "@/views/Edit.vue";
import NewPassword from "@/views/NewPassword.vue";

const routes = [
    {
        path: "/feed",
        name: "Feed",
        component: Feed,
        meta: {
            transitionName: 'slide',
            transitionRules: {
                'slide-right': [
                    '/add', '/shuffle', '/profile',
                    '/feed/pictures',
                    '/feed/video',
                    '/feed/translations',
                    '/feed/conferences',
                    '/feed/3d'
                ]
            }
        },
        children: [
            {
                path: "",
                name: "FeedAll",
                component: FeedAll,
            },
            {
                path: "/feed/pictures",
                name: "FeedPictures",
                component: FeedPictures,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            ''
                        ],
                        'slide-right': [
                            '/feed/video',
                            '/feed/translations',
                            '/feed/conferences',
                            '/feed/3d'
                        ]
                    }
                },
            },
            {
                path: "/feed/video",
                name: "FeedVideo",
                component: FeedVideo,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/feed/pictures',

                        ],
                        'slide-right': [
                            '/feed/translations',
                            '/feed/conferences',
                            '/feed/3d'
                        ]
                    }
                },
            },
            {
                path: "/feed/translations",
                name: "FeedTranslations",
                component: FeedTranslations,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/feed/pictures',
                            '/feed/video',


                        ],
                        'slide-right': [
                            '/feed/conferences',
                            '/feed/3d'
                        ]
                    }
                },
            },
            {
                path: "/feed/conferences",
                name: "FeedConferences",
                component: FeedConferences,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/feed/pictures',
                            '/feed/video',
                            '/feed/translations',
                        ],
                        'slide-right': [
                            '/feed/3d'
                        ]
                    }
                },
            },
            {
                path: "/feed/3d",
                name: "Feed3d",
                component: Feed3d,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/feed/pictures',
                            '/feed/video',
                            '/feed/translations',
                            '/feed/conferences',
                        ]
                    }
                },
            }
        ]
    },
    {
        path: "/:id",
        name: "Post",
        component: Post,
        meta: {
            layout: 'PostLayout',
            transitionName: 'slide',
        }
    },
    {
        path: "/edit",
        name: "Edit",
        component: Edit,
        meta: {
            layout: 'PageLayout',
            transitionName: 'slide',
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
                'slide-left': ['/feed', '/shuffle']
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
            'slide-left': ['/feed', '/add', '/shuffle'],
            me: true
        },
        children: [
            {
                path: "",
                name: "ProfileAll",
                component: ProfileAll,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-right': [
                            '/profile/pictures',
                            '/profile/video',
                            '/profile/translations',
                            '/profile/conferences',
                            '/profile/3d'
                        ]
                    }
                },
            },
            {
                path: "/profile/pictures",
                name: "ProfilePictures",
                component: ProfilePictures,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '/profile'
                         ],
                        'slide-right': [
                            '/profile/video',
                            '/profile/translations',
                            '/profile/conferences',
                            '/profile/3d'
                        ]
                    }
                },
            },
            {
                path: "/profile/video",
                name: "ProfileVideo",
                component: ProfileVideo,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '/profile',
                            '/profile/pictures',

                        ],
                        'slide-right': [
                            '/profile/translations',
                            '/profile/conferences',
                            '/profile/3d'
                        ]
                    }
                },
            },
            {
                path: "/profile/translations",
                name: "ProfileTranslations",
                component: ProfileTranslations,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '/profile',
                            '/profile/pictures',
                            '/profile/video',


                        ],
                        'slide-right': [
                            '/profile/conferences',
                            '/profile/3d'
                        ]
                    }
                },
            },
            {
                path: "/profile/conferences",
                name: "ProfileConferences",
                component: ProfileConferences,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '/profile',
                            '/profile/pictures',
                            '/profile/video',
                            '/profile/translations',
                        ],
                        'slide-right': [
                            '/profile/3d'
                        ]
                    }
                },
            },
            {
                path: "/profile/3d",
                name: "Profile3d",
                component: Profile3d,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '/profile',
                            '/profile/pictures',
                            '/profile/video',
                            '/profile/translations',
                            '/profile/conferences',
                        ]
                    }
                },
            }
        ]
    },
    {
        path: "/user/:id",
        name: "User",
        component: Profile,
        meta: {
            transitionName: 'slide',
        },
        children: [
            {
                path: "",
                name: "UserAll",
                component: ProfileAll,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-right': [
                            '/user/:id/pictures',
                            '/user/:id/video',
                            '/user/:id/translations',
                            '/user/:id/conferences',
                            '/user/:id/3d'
                        ]
                    }
                },
            },
            {
                path: "/user/:id/pictures",
                name: "UserPictures",
                component: ProfilePictures,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            ''
                         ],
                        'slide-right': [
                            '/user/:id/video',
                            '/user/:id/translations',
                            '/user/:id/conferences',
                            '/user/:id/3d'
                        ]
                    }
                },
            },
            {
                path: "/user/:id/video",
                name: "UserVideo",
                component: ProfileVideo,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/user/:id/pictures',

                        ],
                        'slide-right': [
                            '/user/:id/translations',
                            '/user/:id/conferences',
                            '/user/:id/3d'
                        ]
                    }
                },
            },
            {
                path: "/user/:id/translations",
                name: "UserTranslations",
                component: ProfileTranslations,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/user/:id/pictures',
                            '/user/:id/video',


                        ],
                        'slide-right': [
                            '/user/:id/conferences',
                            '/user/:id/3d'
                        ]
                    }
                },
            },
            {
                path: "/user/:id/conferences",
                name: "UserConferences",
                component: ProfileConferences,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/user/:id/pictures',
                            '/user/:id/video',
                            '/user/:id/translations',
                        ],
                        'slide-right': [
                            '/user/:id/3d'
                        ]
                    }
                },
            },
            {
                path: "/user/:id/3d",
                name: "User3d",
                component: Profile3d,
                meta: {
                    transitionName: 'slide',
                    transitionRules: {
                        'slide-left': [
                            '',
                            '/user/:id/pictures',
                            '/user/:id/video',
                            '/user/:id/translations',
                            '/user/:id/conferences',
                        ]
                    }
                },
            }
        ]
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
            if(to.meta.transitionRules[direction]
                && (to.meta.transitionRules[direction].find(path => path.replace(':id', to.params.id) === from.path))) {
                to.meta.transitionName = direction
            }
        })
    }
})




export default router;
