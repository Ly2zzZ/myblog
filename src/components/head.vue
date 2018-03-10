<template>
  <div>

<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <span style="font-weight: lighter; font-size: 30px;font-weight: bolder; color:black">______罗瑜的博客____________</span>
  <el-menu-item index="1">
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
    <template slot="title">Categories</template>

    <template v-for="(item,index) in catelist">

      <el-menu-item index="5">
        <router-link :to="{path: 'detail'}" style="text-decoration:none">{{item}}</router-link>
      </el-menu-item>
    </template>

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
        activeIndex: '1',
        catelist:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created: function (){
      this.$http.get('/api/getArticles')
      .then((res) => {
        //console.log(res.data.data)
        for (let item in res.data.data)
          this.catelist.push(res.data.data[item].cate);

        this.catelist=Array.from(new Set(this.catelist));
        //console.log(this.catelist)
      }),(err) => {
        console.log(err)
      }
    }
  }


</script>

<style scoped>
el-menu{
  width: 100%;
}
</style>