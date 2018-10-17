<template>
  <div id="first_in" class="content">
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
      <transition name="outin">  
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
      <log-form @has-log="onSuccessLog" @on-close="closeDialog('isShowLogDialog')"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form @on-close="closeDialog('isShowRegDialog')"></reg-form>
    </my-dialog>
      </el-container>

      <div class="shutter">
    <div></div>
    <div></div>
    <div></div>
      </div>
  </div>
</template>


<script>
import { donghua } from "./assets/donghua.js";

import myHead from "./components/head";

import Dialog from "./components/dialog";
import LogForm from "./components/logForm";
import RegForm from "./components/regForm";

export default {
  name: "App",
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm,
    myHead
  },
  data() {
    return {
      transitionName: "slide-left",
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ""
    };
  },
  computed: {
    logname() {
      return this.username;
    }
  },
  methods: {
    quit() {
      this.username = "";
      this.$store.dispatch("getusernameAction", {});
      this.setCookie("username", "", 1);
      this.setCookie("userid", "", 1);
      location.reload();
    },
    logClick() {
      this.isShowLogDialog = true;
    },
    regClick() {
      this.isShowRegDialog = true;
    },
    closeDialog(attr) {
      this[attr] = false;
    },
    onSuccessLog(data) {
      console.log(data);
      this.closeDialog("isShowLogDialog");
      this.username = data;
    },
    aboutClick() {
      this.isShowAboutDialog = true;
    }
  },
  created: function() {
    if (this.$store.getters.getusername.name == undefined) {
      let t = this.getCookie("username");
      let tt = this.getCookie("userid");
      this.username = t;
      this.$store.dispatch("getusernameAction", { username: t, '"userid': tt });
    } else {
      this.username = this.$store.getters.getusername.name;
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.path == "/" && from.path != "/" && this.getin == 2) {
        console.log(this.getin);
        donghua();
        this.getin = 1;
      }
    }
  },
  mounted() {
    var that = this;
    window.onload = function() {
      donghua();
      if (that.$route.path != "/") that.getin = 2;
    };
  }
};
</script>


<style>

.shutter {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 3000px) {
  .PCshow {
    display: block;
  }
  .Phoneshow {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .PCshow {
    display: none;
  }
  .Phoneshow {
    display: block;
  }
  html {
    font-size: 24px;
    zoom:1;
  }
}



@media screen and (max-width: 768px) {
  .PCshow {
    display: none;
  }
  .Phoneshow {
    display: block;
  }
  
  html {
    font-size: 15px;
  }
}

@media screen and (max-width: 500px) {
  .PCshow {
    display: none;
  }
  .Phoneshow {
    display: block;
  }
  
  html {
    font-size: 12px;
  }
}

#ArticleHomePage {
  width: 100%;
  min-height: 900px;
  height: auto;
  min-height: 100vh;
}

body {
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.el-header {
  padding-left: 100px;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  color: #333;
  text-align: center;
  line-height: 1em;
}
.el-main {
  height: auto;
  overflow: hidden;
  padding-left: 1em;
  padding-right: 1em;
  margin: 1em;
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

.outin-enter {
  opacity: 0;
}
.outin-enter-active {
  transition: 0.5s;
}
.outin-enter-to {
  opacity: 1;
}
.outin-leave {
  opacity: 1;
}
.outin-leave-to {
  opacity: 0;
}
.outin-leave-active {
  transition: 0.5s;
}

.head-nav {
  /*  float: right;*/
  position: absolute;
  top: -1.5em;
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
ol,
ul {
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

#first_in {
  transition: width 2s;
  width: 0%;
  opacity: 0;
}
#first_in:hover {
  width: 100%;
}

.shutter {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-left: -10px;
  margin-top: -10px;
  transition: all 2s;
}
@media (orientation: landscape) {
  .shutter.open {
    width: 176vw;
    height: 176vw;
    margin-left: -88vw;
    margin-top: -88vw;
    transform: rotate(180deg);
  }
}
@media (orientation: portrait) {
  .shutter.open {
    width: 176vh;
    height: 176vh;
    margin-left: -88vh;
    margin-top: -88vh;
    transform: rotate(180deg);
  }
}
.shutter > div {
  position: absolute;
  width: 100%;
  height: 57.735026918962575%;
  top: 21.132486540518713%;
}
.shutter > div::before,
.shutter > div::after {
  position: absolute;
  content: "";
  height: 1000px;
  width: 2000px;
  background: #343434;
  transform: rotate(30deg) skew(30deg);
}
.shutter > div::before {
  bottom: 0;
  right: 100%;
  border-right: var(--line-size) solid #000;
  transform-origin: 100% 100%;
}
.shutter > div::after {
  top: 0;
  left: 100%;
  border-left: var(--line-size) solid #000;
  transform-origin: 0 0;
}
.shutter > div:nth-child(2) {
  transform: rotate(60deg);
}
.shutter > div:nth-child(3) {
  transform: rotate(120deg);
}
</style>
