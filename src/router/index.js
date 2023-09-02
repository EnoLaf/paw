import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import OwnerView from '../views/OwnerView.vue'
import VetView from '../views/VetView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/nos-services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/proprietaires',
      name: 'owner',
      component: OwnerView
    },
    {
      path: '/veterinaires',
      name: 'vet',
      component: VetView
    },
  ]
})

export default router