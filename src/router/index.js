import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '../stores/auth';
import Guard from '../services/middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/email-verify/',
      name: 'email-verify',
      component: () => import('../views/EmailVerifyView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/forgot-password/',
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/new-password/',
      name: 'new-password',
      component: () => import('../views/NewPasswordView.vue'),
      beforeEnter: Guard.redirectIfAuthenticated,
      meta: {
        requireAuth: false,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        requireAuth: true,
      },
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
