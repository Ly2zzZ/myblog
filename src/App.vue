<template>
  <div>
    <el-container>
      <el-container>
      <el-header>
        <my-head></my-head>
      </el-header>
      <el-main>
        <keep-alive>
           <router-view></router-view>
        </keep-alive>
        </el-main>
      <el-footer>
        ShuaiBiYu Studying
      </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myHead from './components/head'
export default {
  components:{
    myHead
  }
}
</script>



<style >
.el-header {
    padding-left:100px;
/*    color: #333;*/
    text-align: center;
    line-height: 60px;
  }
.el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
/*    background-color: rgb(84, 92, 100);*/
}
  .el-main {
    padding-left:100px;
    padding-right:100px;
    margin:10px;
  }
  
  body > .el-container {
    margin-bottom: 20px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
