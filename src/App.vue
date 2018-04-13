<template>
  <div>
    <el-container>
      <el-container>
      <el-header>
        <my-head></my-head>
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
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { Draw } from './assets/js.js'
import myHead from './components/head'
export default {
  data(){
    return {
      transitionName: 'slide-left'
    }
  },
  components:{
    myHead
  },
  created: function () {
    Draw();
    //console.log("created");
  },
  watch:{
    $route(to,from){
      if (this.$route.params==undefined)
        Draw();
    }
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
</style>
