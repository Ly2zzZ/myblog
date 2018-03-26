<template>
  <div id="ArticleHomePage">
     <template v-for="item in showpage">
        <div id='EachArticle' :class=item.cate>
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
</template>

<script>

export default {
  name: 'detai',
  data () {
    return {
      articles:[]
    }
  },
  computed:{
    showpage () {
     // console.log("d1",this.$store.getters.getArticles);
     // console.log(this.articles);
     let articles=[];
     let ress=this.$store.getters.getArticles.slice(0,this.$store.getters.getArticles.length);
     let len=ress.length;
        for (let i=0;i<len;i++)
        {
        	//console.log(ress[i]);
        	if (typeof(articles[String(ress[i].cate)])=='undefined')
        		{
        			//console.log("into",ress[i].cate);
        			articles[ress[i].cate]=[];
        		}
          articles[String(ress[i].cate)].push(ress[i]);
        }
        //console.log(articles)

      return articles[this.$store.getters.getAim];
    }
  },
  	beforeCreate:function(){
      
  	},
    methods:{
        submit () {
          console.log("1 ed")
          this.$root.Bus.$emit('artchange');
        },
      com(ob1,ob2)
      {
        if (ob1.date>ob2.date)
          return -1;
        else if(ob1.date<ob2.date)
          return 1;
        else return 0;
      }
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
