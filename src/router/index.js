import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ExternalLayout from '../components/layouts/external/ExternalLayout.vue';
import LoginLayout from '../components/layouts/login/LoginLayout.vue';
import InternalLayout from '../components/layouts/internal/InternalLayout.vue';

import { useAuthStore } from '../stores/auth';
import Guard from '../services/middleware';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //Externals
        {
            path: '/',
            component: ExternalLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView,
                },
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/AboutView.vue'),
                },
            ],
        },

        //Logins
        {
            path: '/',
            component: LoginLayout,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('../views/LoginView.vue'),
                    beforeEnter: Guard.redirectIfAuthenticated,
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password',
                    component: () => import('../views/ForgotPasswordView.vue'),
                    beforeEnter: Guard.redirectIfAuthenticated,
                },
                {
                    path: '/email-verify/',
                    name: 'email-verify',
                    component: () => import('../views/EmailVerifyView.vue'),
                    beforeEnter: Guard.redirectIfAuthenticated,
                },
                {
                    path: '/new-password/',
                    name: 'new-password',
                    component: () => import('../views/NewPasswordView.vue'),
                    beforeEnter: Guard.redirectIfAuthenticated,
                },
            ],
        },

        //Admins
        {
            path: '/',
            component: InternalLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('../views/DashboardView.vue'),
                    beforeEnter: Guard.redirectIfNotAuthenticated,
                    meta: {
                        requireAuth: true,
                    },
                },
                {
                    path: '/condominos',
                    name: 'condominium-owners',
                    component: () => import('../views/CondominiumOwnerView.vue'),
                    beforeEnter: Guard.redirectIfNotAuthenticated,
                    meta: {
                        requireAuth: true,
                    },
                },
                {
                    path: '/condominios',
                    name: 'condominios',
                    component: () => import('../views/DashboardView.vue'),
                    beforeEnter: Guard.redirectIfNotAuthenticated,
                    meta: {
                        requireAuth: true,
                    },
                },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    const tokenLogin = auth.authToken;

    if ((to?.meta?.requireAuth) && (tokenLogin == null)) {
        next({ name: 'login' });
    } else if(to?.name === 'email-verify' && !to?.query?.token) {
        next({ name: 'login' });
    } else if(to?.name === 'new-password' && !to?.query?.token) {
        next({ name: 'login' });
    } else {
        next();
    }

    return false;
});

export default router;