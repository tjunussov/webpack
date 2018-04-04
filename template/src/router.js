import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Landing from '@/components/Landing'


import KassaPage from '@/components/kassa/KassaPage'
import KassaCartPage from '@/components/kassa/KassaCartPage'
import Calculator from '@/components/kassa/Calculator'
import FavMenu from '@/components/kassa/catalog/FavMenu'
import Items from '@/components/kassa/catalog/Items'
import Tender from '@/components/kassa/forms/Tender'


import CartForm from '@/components/kassa/forms/template/CartForm'
import ProductForm from '@/components/kassa/forms/ProductForm'
import ContactForm from '@/components/kassa/forms/ContactForm'
import ResourceForm from '@/components/kassa/forms/ResourceForm'
import GroupForm from '@/components/kassa/forms/GroupForm'
import MoneyForm from '@/components/kassa/forms/MoneyForm'

import AuditPage from '@/components/audit/AuditPage'

import SalesPage from '@/components/sales/SalesPage'
import SalesList from '@/components/sales/SalesList'
import SalesTable from '@/components/sales/SalesTable'
import SalesCalendar from '@/components/sales/SalesCalendar'
import SalesTimeline from '@/components/sales/SalesTimeline'
import SalesLocation from '@/components/sales/SalesLocation'

import SettingsPage from '@/components/settings/SettingsPage'
import Settings from '@/components/settings/Settings'
import SettingsOverview from '@/components/settings/SettingsOverview'
import MerchantSettings from '@/components/settings/MerchantSettings'
import KKMSettings from '@/components/settings/KKMSettings'
import UISettings from '@/components/settings/UISettings'
import CheckSettings from '@/components/settings/devices/printer/checkSettings'
import PaymentPlanSettings from '@/components/settings/PaymentPlanSettings'
import DeviceSettings from '@/components/settings/devices/printer/PrinterSettings'
import UserSettings from '@/components/settings/users/UserSettings'
import Apps from '@/components/settings/apps/Apps'
import AppForm from '@/components/settings/apps/AppForm'

import Contacts from '@/components/contacts/Contacts'


import WelcomeLogin from '@/components/utils/WelcomeLogin'
import Logout from '@/components/utils/Logout'
import Help from '@/components/utils/Help'
import Info from '@/components/utils/Info'
import Inbox from '@/components/Inbox'
import Profile from '@/components/utils/Profile'


// import CamundaService from '@/services/CamundaService'

Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/login',
      component: WelcomeLogin,
      meta: { isPublic: true }
    },
    {
      path: '/landing',
      component: Landing
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/sales',
      component: SalesPage,
      children: [
        {
          path: 'list',
          alias: '',
          component: SalesList
        },
        {
          path: 'table',
          component: SalesTable
        },
        {
          path: 'calendar',
          component: SalesCalendar
        },
        {
          path: 'timeline',
          component: SalesTimeline
        },
        {
          path: 'location',
          component: SalesLocation
        },
      ]
    },
    {
      path: '/settings',
      component: SettingsPage,
      children: [
        {
          path: '',
          name: 'SettingsOverview',
          component: SettingsOverview,
          props: true 
        },
        {
          path: 'general',
          name: 'Settings',
          component: Settings,
          props: true 
        },
        {
          path: 'kkm/:znk',
          component: KKMSettings,
          props: true 
        },
        {
          path: 'kkm',
          name: 'Kkm',
          component: KKMSettings,
          props: true 
        },
        {
          path: 'ui',
          name: 'UI',
          component: UISettings,
          props: true 
        },
        {
          path: 'devices/printer/check',
          name: 'CheckSettings',
          component: CheckSettings,
          props: true 
        },
        {
          path: 'payments/plan',
          name: 'PaymentPlanSettings',
          component: PaymentPlanSettings,
          props: true 
        },
        {
          path: 'check',
          name: 'DeviceSettings',
          component: DeviceSettings,
          props: true 
        },
        {
          path: 'org',
          name: 'MerchantSettings',
          component: MerchantSettings,
          props: true 
        },
        {
          path: 'users',
          name: 'UserSettings',
          component: UserSettings,
          props: true 
        },
        {
          path: 'apps',
          name: 'Apps',
          component: Apps,
          props: true 
        },
        {
          path: 'apps/:name',
          name: 'AppForm',
          component: AppForm,
          props: true 
        }
      ]
    },
    {
      path: '/inbox',
      name:'Inbox',
      component:Inbox
    },
    {
      path: '/audit',
      component:AuditPage
    },
    {
      path: '/contacts',
      component:Contacts
    },
    {
      path: '/support',
      component:Help
    },
    {
      path: '/info',
      component:Info
    },
    {
      path: '/help',
      name:'Help',
      component:Help
    },
    {
      path: '/logout',
      name:'logout',
      component:Logout
    },
    {
      path: '/home',
      // alias: '/',
      name:'Dashboard',
      component:Dashboard
    },
    { // IMPORTANT! Must Be LAST entry https://github.com/vuejs/vue-router/issues/1817
      path: '/kassa',
      component: KassaPage,
      children: [
        {
          path: 'menu',
          alias: '',
          name: 'Menu',
          component: FavMenu,
          props: true 
        },
        {
          path: 'calc',
          name: 'Calculator',
          component: Calculator,
          props: true 
        },
        {
          path: 'items',
          name: 'Items',
          component: Items,
          props: true 
        },
        {
          path: 'contact',
          name:'Contacts',
          component: Contacts,
          props: true 
        },
        {
          path: 'contact/:contact',
          name: 'ContactCard',
          component: Contacts,
          props: true 
        },
        {
          path: 'tender',
          name: 'Tender',
          component: Tender,
          props: true 
        },
        { path: 'cart',
          component: CartForm,
          children: [
            {
              path: ':type',
              name: 'contactForm',
              component: ContactForm,
              props: true 
            },
            {
              path: ':type',
              name: 'productForm',
              component: ProductForm,
              props: true 
            },
            {
              path: ':type',
              name: 'resourceForm',
              component: ResourceForm,
              props: true 
            },
            {
              path: ':type',
              name: 'groupForm',
              component: GroupForm,
              props: true 
            },
            {
              path: ':type',
              name: 'moneyForm',
              component: MoneyForm,
              props: true 
            }
          ]
        }
      ]
    },
    { path: '*', redirect: '/kassa/menu' }
  ],
  linkActiveClass : 'active',
  onError(e){
    console.error('Router Error',e);
  }
})
/*
// Auth Handling
router.beforeEach((to, from, next) => {
  
  if (to.matched.every(record => record.meta.isPublic)) {
    next() // make sure to always call next()!
  } else {
    // this route requires auth, check if logged in
    // if not, redirect to login page or Login Modal
    CamundaService.user.checkLoggedIn(this.a.app).then(ok=>{
      ok ? next() : next({path: '/login',query: {redirect:to.fullPath}})
      // ok ? next() : next('/login')      
    }).catch(error=>{
      console.error('route error',error);
      next(error)
    })
  }
})*/


export default router;
