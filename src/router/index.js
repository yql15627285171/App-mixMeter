import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import register from '@/components/register'
import choosePage from '@/components/choosePage'

import myFunction from '@/components/function'
import info from '@/components/information'
import userNumber from '@/components/function/user-number'
import bill from '@/components/function/bill'

Vue.use(Router)

export default new Router({
  model:'history',
  routes: [
    {
      path: '/',
      redirect:'/register'
    },
    // {
    //   path: '/choosePage',
    //   name:'choosePage',
    //   component:choosePage
    // },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/main',
      redirect:'/main/function',
      name: 'main',
      component: main,
      children:[
        {
          path:'function',
          name:'function',
          component:myFunction
        },
        {
          path:'info',
          name:'info',
          component:info
        }
      ]
    },
    {
      path:'/function/user-number/:type',
      name:'user-number',
      component:userNumber,
      props:true
    },
    {
      path:'/function/bill',
      name:'bill',
      component:bill
    }

  ]
})
