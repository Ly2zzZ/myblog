import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import IndexPage from '../components/Index'

import details from '../components/details'
import detail1 from '../components/detail1'
import detail2 from '../components/detail2'

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
    	children:[
    	{
    		path:'1',
    		component:detail1
    	},
    	{
    		path:'2',
    		component:detail2
    	}
    	]
    	
    }
  ]
})
