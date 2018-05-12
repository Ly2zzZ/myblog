import Vue from 'vue'
import Router from 'vue-router'

/*import IndexPage from '../components/Index'

import details from '../components/details'
import Categories from '../components/detail1'
import All from '../components/detail2'
import articlemode from '../components/articles/mode'
import message from '../components/message'*/
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Index'], resolve)
    },
    {
      path:'/articleAll',
      component: resolve => require(['../components/detail2'], resolve)
    },
    {
      path:'/message',
      component: resolve => require(['../components/message'], resolve)
    },
    {
        path:'/Categories/:cate',
        component: resolve => require(['../components/detail1'], resolve)
    },
    {
    	path:'/article',
      component: resolve => require(['../components/details'], resolve),
    	children:[
      {
        path:':artcileid',
        component: resolve => require(['../components/articles/mode'], resolve)
      }
    	]
    	
    }
  ]
})
