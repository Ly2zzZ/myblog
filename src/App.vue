<template>
  <div>
    <el-container>
      <el-container>
      <el-header>
        <my-head></my-head>

          <div class="head-nav">
          <ul class="nav-list">
            <li> {{ logname }}</li>
            <li v-if="logname!== ''" class="nav-pile">|</li>
            <li v-if="logname!== ''" @click="quit">退出</li>
            <li v-if="logname=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="logname=== ''" @click="regClick">注册</li>
            <li v-if="logname=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div> 

      </el-header>
      <el-main>
      <transition mode="out-in">  
        <keep-alive>
           <router-view></router-view>
         </keep-alive>
      </transition>

      </el-main>
      <el-footer>
        ShuaiBiYu Studying
      </el-footer>

    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>没有目的的学习是真的快乐</p>
    </my-dialog>
    
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { Draw } from './assets/js.js'
import myHead from './components/head'

import Dialog from './components/dialog'
import LogForm from './components/logForm'
import RegForm from './components/regForm'

export default {
  name:"App",
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm,
    myHead
  },
  data(){
    return {
      transitionName: 'slide-left',
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: ''
    }
  },
  computed:{
    logname (){
      return this.username;
    }
  },
  methods:{
    quit(){
      this.username='';
      this.$store.dispatch('getusernameAction',{});
      this.setCookie('username','',1)
      this.setCookie('userid','',1)
      location.reload();
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {
      console.log(data)
      this.closeDialog ('isShowLogDialog')
      this.username = data
    },
    aboutClick () {
      this.isShowAboutDialog = true
    }
  },
  created: function () {
   // Draw();
   if (this.$store.getters.getusername.name==undefined)
   {
      let t=this.getCookie('username');
      let tt=this.getCookie('userid');
      this.username=t;
      this.$store.dispatch('getusernameAction',{"username":t,'"userid':tt});
   }
   else{
    this.username=this.$store.getters.getusername.name
   }

  },
  mounted:function() {

  },
  watch:{
    $route(to,from){
      if (this.$route.params==undefined)
        Draw();
    }
  },
  mounted (){
/*    this.$ajax.get('http://www.shuaibiyu.cn/api/getArticles')
      .then((response)=>{
        console.log(response)
      })
      .catch(function (error) {
        this.Notify("评论失败...")
        console.log(error);
      });*/
  }
}
</script>


<style>
@media screen and (max-width: 3000px){
  .PCshow{
    display: block;
  }
  .Phoneshow{
    display: none;
  }
}
@media screen and (max-width: 1100px){
  .PCshow{
    display: none;
  }
  .Phoneshow{
    display: block;
  }
}



#ArticleHomePage{
    width: 100%;
    min-height: 900px;
    height: auto; 
}
body{
  font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.el-header {
    padding-left:100px;
    text-align: center;
    line-height: 60px;
  }
.el-footer {
    color: #333;
    text-align: center;
    line-height: 1em;
/*    background-color: #9caebf; */
  }
  .el-main {
    overflow:hidden;
    height: auto;
    padding-left:1em;
    padding-right:1em;
    margin:1em;
  }
  
  body > .el-container {
    margin-bottom: 1em;
    background-color: #636b6f;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 1em;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 1em;
  }

.v-enter{
  opacity: 0;
}
.v-enter-active{
  transition: 0.5s;
}
.v-enter-to{
  opacity: 1;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity:0;
}
.v-leave-active{
  transition: 0.5s;
}


.head-nav {
/*  float: right;*/
  position: absolute;
  top:-1.5em;
  right: 1em;
  font-size: 1em;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
ol, ul {
  list-style: none;
}

.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {
  
}
.g-form-line {
  padding: 10px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
