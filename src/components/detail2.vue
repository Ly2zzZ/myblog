<template>
  <div id="ArticleHomePage">
    <div >
      <template v-for="(item,index) in showpage">
        <div id='EachArticle' :class=item.cate :key=index>
          <router-link 
          :to="{path: '/article/'+item.id }" 
          style="text-decoration:none">
            <p >{{item.title}}</p>
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
    </div>

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
      nowpage:1,
      articlenum:''
    }
  },
  computed:{
    total () {
      return this.totalpage;
    },
    showpage () {
     // console.log(this.articles);
      return this.articles[this.nowpage-1];
    }
  },
  created:function(){
     this.$ajax.get('/api/getArticles')
      .then((ress) => {

       var res;
       if (Object.prototype.toString.call(ress.data)=='[object Array]')
          res=ress.data;
        else res=ress.data.data;

        this.articlenum=res.length;
       res.sort(this.com);
        this.$store.dispatch('getArticlesAction',res.slice(0,res.length));

        if (this.articles.length==0)
          {      
        let resss=this.$store.getters.getArticles.slice(0,this.$store.getters.getArticles.length);
        let len=resss.length;
        for (let i=0;i<len;i+=6)
        {
        this.articles.push(resss.slice(i,i+6));
        }
        this.totalpage=this.articles.length;
      }
        }),(err) => {
        console.log(err)
      }

      let ress=this.$store.getters.getArticles.slice(0,this.$store.getters.getArticles.length);
      let len=ress.length;
      // console.log(len)
      for (let i=0;i<len;i+=6)
      {
      this.articles.push(ress.slice(i,i+6));
      }
      console.log(this.articles)
      this.totalpage=this.articles.length;
    },
    methods:{
      com(ob1,ob2)
      {
        if (new Date(ob1.date)>new Date(ob2.date))
          return -1;
        else if(new Date(ob1.date)<new Date(ob2.date))
          return 1;
        else return 0;
      }
    },
    mounted(){
      var that=this;
      this.$root.Bus.$on('event1', function (form) {
        form.id=++that.articlenum;

        this.$ajax.get('/api/addArticle', {
          params: {
            title:form.title,
            cate:form.cate,
            readnum:form.readnum,
            liked:form.liked,
            date:form.date,
            id:form.id
          }
        })
        .then((response)=>{
          console.log("asd")
          location.reload();
          that.Notify("添加成功")

        })
        .catch(function (error) {
          that.Notify("添加失败...");
        });

      })
    }
}
</script>


<style scoped> 
.el-pagination{
  text-align: center;
}
span{
    display: block;
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 80px; 
}
p{
      font-size: 1.2rem;
      color:black;
      text-align: center;
}
a{
 color:#999;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

</style>
