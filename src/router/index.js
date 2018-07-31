import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import register from '@/components/register'
import choosePage from '@/components/choosePage'
import authority from '@/components/authority'

// 功能
import myFunction from '@/components/function'
import bill from '@/components/function/bill'
import moneyDetails from '@/components/function/moneyDetails'
import useDetails from '@/components/function/useDetails'

// 信息
import info from '@/components/information'
import resetPsd from '@/components/information/resetPsd'
import resetPhone from '@/components/information/resetPhone'
import resetAddress from '@/components/information/resetAddress'

// 房间
import house from '@/components/house'
import bindRoom from '@/components/house/bindRoom'
import unbindRoom from '@/components/house/unbindRoom'


Vue.use(Router)

const router = new Router({
  model:'history',
  routes: [
    {
      path: '/',
      name:'authority',
      component:authority
    },
    // {
    //   path: '/',
    //   name:'register',
    //   component:register
    // },
    {
      path:'/choosePage',
      name:'choosePage',
      component:choosePage,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/register',
      name:'register',
      component:register,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/main',
      redirect:'/main/function',
      name: 'main',
      component: main,
      meta:{
        requireAuth:true
      },
      children:[
        {
          path:'function',
          name:'function',
          component:myFunction,
          meta:{
            requireAuth:true
          },

        },
        {
          path:'house',
          name:'house',
          component:house,
          meta:{
            requireAuth:true
          },

        },
        {
          path:'info',
          name:'info',
          component:info,
          meta:{
            requireAuth:true
          },

        },
      ]
    },
    {
      path:'/function/bill',
      name:'bill',
      component:bill,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/function/moneyDetails',
      name:'moneyDetails',
      component:moneyDetails,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/useDetails',
      name:'useDetails',
      component:useDetails,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/house/bindRoom',
      name:'bindRoom',
      component:bindRoom,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/house/unbindRoom',
      name:'unbindRoom',
      component:unbindRoom,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/info/resetPsd',
      name:'resetPsd',
      component:resetPsd,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/info/resetPhone',
      name:'resetPhone',
      component:resetPhone,
      meta:{
        requireAuth:true
      },

    },
    {
      path:'/info/resetAddress',
      name:'resetAddress',
      component:resetAddress,
      meta:{
        requireAuth:true
      },

    }

  ]
})

export default router
