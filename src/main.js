// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
/*import ElementUI from 'element-ui';*/
/*import 'element-ui/lib/theme-chalk/index.css';*/

import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'

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
		 Notification,
		 Form,
		 FormItem,
		 Option,
		 Select,
		 DatePicker
		 
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
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Select)
Vue.use(DatePicker)

Vue.use(Vuex)

Vue.prototype.$notify = Notification
Vue.prototype.$ajax = axios


Vue.prototype.getCookie=function(c_name){
	if (document.cookie.length>0)
	  {
	  let c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1)
	    { 
	    var  c_start=c_start + c_name.length+1 
	    var c_end=document.cookie.indexOf(";",c_start)
	    if (c_end==-1) c_end=document.cookie.length
	    return unescape(document.cookie.substring(c_start,c_end))
	    } 
	  }
	return ""
}
Vue.prototype.setCookie=function(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}   


Vue.config.productionTip = false

var bus=new Vue()

let store = new Vuex.Store({
	state:{
		NowCate:'',
		getArticles:[],
		articledetails:[],
		username:{}
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
