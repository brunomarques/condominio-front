import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from "@/layouts/DefaultLayout"
import AuthLayout from "@/layouts/AuthLayout"

import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView"
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import ReseatPasswordView from "@/views/ReseatPasswordView.vue";

const routes = [
  {
    path: '/', component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: HomeView }
    ],
  },
  {
    path: '/login', component: AuthLayout,
    children: [
      { path: '', name: 'login', component: LoginView }
    ],
  },
  {
    path: '/esqueci-a-senha', component: AuthLayout,
    children: [
      { path: '', name: 'forgotPassword', component: ForgotPasswordView }
    ],
  },
  {
    path: '/trocar-a-senha', component: AuthLayout,
    children: [
      { path: '', name: 'resetPassword', component: ReseatPasswordView }
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
