// import { useCounterStore } from '@/stores/counterStore'
// import { useShopingCartStore } from '@/stores/ShoppingCartStore'
// import { useThemeStore } from '@/stores/themeStore'
// import { useTodoStore } from '@/stores/todoStore'
// import { userStore } from '@/stores/userStore'
import { createRouter, createWebHistory } from 'vue-router'

import CounterStore from '@/views/counterStore.vue'
import NotFound from '@/views/NotFound.vue'
import ShoppingCartStore from '@/views/shoppingCartStore.vue'
import TodoStore from '@/views/todoStore.vue'
import UserStore from '@/views/userStore.vue'
import ThemeStore from '@/views/themeStore.vue'
import App from '@/App.vue'
// import UserStore from '@/views/userStore.vue'
// import TodoStore from '@/views/todoStore.vue'
// import ShoppingCartStore from '@/views/shoppingCartStore.vue'
// import ThemeStore from '@/views/themeStore.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: App

  },
  {
    path: '/ex1',
    name: 'Ex1',
    component: CounterStore,
  },
  {
    path: '/ex2',
    name: 'Ex2',
    component: UserStore,
  },
  {
    path: '/ex3',
    name: 'Ex3',
    component: TodoStore,
  },
  {
    path: '/ex4',
    name: 'Ex4',
    component: ShoppingCartStore,
  },
  {
    path: '/ex5',
    name: 'Ex5',
    component: ThemeStore,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found!',
    component: NotFound,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
