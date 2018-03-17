<template>
  <div id="guide">

<el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
    <span style="font-weight: lighter; font-size: 30px;font-weight: lighter; color:black">______罗瑜的博客____________</span>
  <el-menu-item index="/">Home</el-menu-item>

  <el-menu-item index="/articleAll">
    Articles
  </el-menu-item>

    <el-menu-item index="/message">
    LeaveMessage
  </el-menu-item>

  <el-submenu index="">
    <template slot="title">Categories</template>

    <template v-for="(item,index) in catelist">
      <el-menu-item index='/Categories/item' @click="ChangeCate(item)">
        {{item}}
      </el-menu-item>
    </template>
  </el-submenu>

  <el-menu-item index="3" >
      <a href="https://github.com/Ly2zzZ" style="text-decoration:none">GitHub</a>
  </el-menu-item>

  <el-menu-item index="4" >
      <a href="https://www.zhihu.com/people/jin-yu-69-77-42/activities" style="text-decoration:none">ZhiHu</a>
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
        catelist:[],
        textarea: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      //  console.log(key, keyPath);
      },
      ChangeCate (aim){
        //console.log("headchange",aim)
        this.$store.dispatch('change',aim)
      }
    },
    beforeCreate: function (){
      this.$http.get('/api/getArticles')
      .then((res) => {
       // console.log(res.data.data)
        this.$store.dispatch('getArticlesAction',res.data.data.slice(0,res.data.data.length))
       // console.log("head",this.$store.getters.getArticles)
        for (let item in res.data.data)
          this.catelist.push(res.data.data[item].cate);
        this.catelist=Array.from(new Set(this.catelist));
      //  console.log(this.catelist)
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
#guide{
  height: 100%;
}
</style>