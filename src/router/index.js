import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../components/Index'

import details from '../components/details'
import Categories from '../components/detail1'
import All from '../components/detail2'
import articlemode from '../components/articles/mode'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
    	path:'/detail',
      component:details,
      redirect: '/detail/All',
    	children:[
      {
        path:'All',
        component:All
      },
      {
        path:'article/:artcileid',
        component:articlemode
      },
    	{
    		path:'Categories/:cate',
    		component:Categories
    	}
    	]
    	
    }
  ]
})
