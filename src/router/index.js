import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import OwnerView from '../views/OwnerView.vue'
import VetView from '../views/VetView.vue'
import HealthRecordView from '../views/HealthRecordView.vue'
import PetView from '../views/PetView.vue'
import ReminderView from '../views/ReminderView.vue'
import MoreView from '../views/MoreView.vue'
import PetDetailsView from '../views/PetDetailsView.vue'
import PetWeightView from '../views/PetWeightView.vue'
import PetVaccinesView from '../views/PetVaccinesView.vue'
import PetVetView from '../views/PetVetView.vue'
import PetRecordsView from '../views/PetRecordsView.vue'

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
    {
      path: '/carnet-de-sante',
      name: 'health',
      component: HealthRecordView
    },
    {
      path: '/animal',
      name: 'pet',
      component: PetView
    },
    {
      path: '/rappel',
      name: 'reminder',
      component: ReminderView
    },
    {
      path: '/plus',
      name: 'more',
      component: MoreView
    },
    {
      path: '/animal/details',
      name: 'pet-details',
      component: PetDetailsView
    },
    {
      path: '/animal/poids',
      name: 'pet-weight',
      component: PetWeightView
    },
    {
      path: '/animal/vaccins',
      name: 'pet-vaccines',
      component: PetVaccinesView
    },
    {
      path: '/animal/veterinaire',
      name: 'pet-vet',
      component: PetVetView
    },
    {
      path: '/animal/comptes-rendus',
      name: 'pet-records',
      component: PetRecordsView
    },
  ]
})

export default router