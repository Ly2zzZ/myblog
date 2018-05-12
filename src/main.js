// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
/*import ElementUI from 'element-ui';*/
/*import 'element-ui/lib/theme-chalk/index.css';*/

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

import axios from 'axios' 
import App from './App'

import { Button,
		 Input,
		 Pagination,
		 Container,
		 Header,
		 Main,
		 Footer,
		 Menu,
		 MenuItem, 
		 Submenu,
		 dialog,
		 card,
		 Notification
		 
		  } from 'element-ui'
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(dialog)
Vue.use(card)
Vue.prototype.$notify = Notification

Vue.prototype.$ajax = axios
Vue.use(Vuex)

Vue.config.productionTip = false

var bus=new Vue()

let store = new Vuex.Store({
	state:{
		NowCate:'',
		getArticles:[],
		articledetails:[],
		username:''
	},
	getters:{
		getAim (state) {
			return state.NowCate
		},
		getArticles (state){
			return state.getArticles
		},
		getarticledetails (state){
			return state.getArticles
		},
		getusername (state){
			return state.username
		}
	},
	mutations:{
		changement (state,aim) {
			state.NowCate = aim
		},
		getArticlesMutation(state,aim){
			state.getArticles = aim
		},
		getusernameMutation(state,aim){
			state.username = aim
		}
	},
	actions:{
		change (context,aim) {
			context.commit('changement',aim)
		},
		getArticlesAction(context,aim) {
			context.commit('getArticlesMutation',aim)
		},
		getusernameAction(context,aim) {
			context.commit('getusernameMutation',aim)
		}
	}
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App),
  data:{
  	Bus:new Vue()
  }
})
