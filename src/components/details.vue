<template>
  <div id="ArticleHomePage">
      <template v-for="item in articles">
        <div id='EachArticle' :class=item.cate>
        <a href="">
        <p>{{item.title}}</p>
        </a>
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
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'detai',
  data () {
    return {
      articles:[]
    }
  },
    created: function (){
      this.$http.get('/api/getArticles')
      .then((res) => {
        this.articles=res.data.data;
        if (this.articles.length>6)
        {
          let x= document.getElementById('ArticleHomePage').offsetHeight;
          console.log(x);
          $("#ArticleHomePage").css("height", x+(this.articles.length-6)*x/6);//通过设置CSS属性来设置元素的高

        }
      }),(err) => {
        console.log(err)
      }
    },
    methods:{
      Show () {

      }
    }
}
</script>


<style scoped> 
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
  width: 100%;
  height: 800px;
  overflow: hidden;
  overflow-x: hidden;
}
</style>
