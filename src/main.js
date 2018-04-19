// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios' 

import App from './App'

Vue.prototype.$ajax = axios
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)
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
