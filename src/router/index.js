import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


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
