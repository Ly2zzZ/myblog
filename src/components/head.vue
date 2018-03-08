<template>
  <div>

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <span style="font-weight: lighter; font-size: 30px;font-weight: bolder; color:black">______罗瑜的博客____________</span>
  <el-menu-item index="1" >
      <router-link :to="{path: '/'}" style="text-decoration:none">Home</router-link>
  </el-menu-item>

  <el-menu-item index="2" >
      <router-link :to="{path: 'detail/'}" style="text-decoration:none">Article</router-link>
  </el-menu-item>

  <el-menu-item index="3" >
      <a href="https://github.com/Ly2zzZ" style="text-decoration:none">GitHub</a>
  </el-menu-item>

  <el-menu-item index="4" >
      <a href="https://www.zhihu.com/people/jin-yu-69-77-42/activities" style="text-decoration:none">ZhiHu</a>
  </el-menu-item>


  <el-submenu index="5">
    <template slot="title">Page</template>
    <el-menu-item index="5-1">选项1</el-menu-item>
    <el-menu-item index="5-2">选项2</el-menu-item>
    <el-menu-item index="5-3">选项3</el-menu-item>
  </el-submenu>
  
  </el-menu-item>
</el-menu>

  </div>
</template>

<script>
  export default {
    name:'myHuide',
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>