import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../components/Index'

import details from '../components/details'
import Categories from '../components/detail1'
import All from '../components/detail2'
import articlemode from '../components/articles/mode'
import message from '../components/message'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path:'/articleAll',
      component:All
    },
    {
      path:'/message',
      component:message
    },
    {
        path:'/Categories/:cate',
        component:Categories
    },
    {
    	path:'/article',
      component:details,
    	children:[
      {
        path:':artcileid',
        component:articlemode
      }
    	]
    	
    }
  ]
})
