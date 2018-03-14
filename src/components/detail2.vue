<template>
  <div>
     <template v-for="item in showpage">
        <div id='EachArticle' :class=item.cate>
        <router-link :to="{path: '/detail/article/'+item.id }" style="text-decoration:none">
           <p>{{item.title}}</p>
        </router-link>
        <span>
        <i class="el-icon-date"></i> 
        发表于 {{item.date}}
        |
        <i class="el-icon-tickets"></i> 
        分类于 
        <a href="">{{item.cate}}</a>
        |
        <i class="el-icon-view"></i>
        阅读数 {{item.readnum}}
        |
        <i class="el-icon-star-off"></i>
        喜欢 {{item.readnum}}
        </span>
        </div>
      </template>

      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="total"
        :current-page.sync="nowpage">
      </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'detai',
  data () {
    return {
      totalpage:0,
      articles:[],
      nowpage:1
    }
  },
  computed:{
    total () {
      return this.totalpage;
    },
    showpage () {
     // console.log(this.nowpage);
      return this.articles[this.nowpage-1];
    },
    totalnum () {
      return this.total;
    }
  },
    beforeCreate: function (){
      this.$http.get('/api/getArticles')
      .then((res) => {
        let ress=res.data.data;
        let len=ress.length;
       // console.log(len)
        for (let i=0;i<len;i+=6)
        {
          this.articles.push(ress.slice(i,i+6));
        }
      // console.log(this.articles)
        this.totalpage=this.articles.length;
      }),(err) => {
        console.log(err)
      }
    },
    methods:{
    }
}
</script>


<style scoped> 
el-pagination{
  text-align: center;
}
span{
    display: block;
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
    text-align: center;
    margin-bottom: 80px; 
}
p{
      text-align: center;
}
a{
  color: #999;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
#ArticleHomePage{
    text-align: center;
  width: 100%;
  height: 900px;
  overflow: hidden;
  overflow-x: hidden;
}
</style>
