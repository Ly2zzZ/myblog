<template>
	<div id="artmode">
	<h2 >{{titles.title}}</h2>
        <span>
        <i class="el-icon-date"></i> 
        发表于 {{titles.date}}
        |
        <i class="el-icon-tickets"></i> 
        分类于 
        <a href="">{{titles.cate}}</a>
        |
        <i class="el-icon-view"></i>
        阅读数 {{titles.readnum}}
        |
        <i class="el-icon-star-off"></i>
        喜欢 {{titles.readnum}}
        </span>
	<div v-html="content" @artchange="artchange" id="showcontent"></div>
	</div>
</template>

<script type="text/javascript">
/*import actual from './actual'*/

export default {
	name:'articlemode',
	data(){
		return {
			temp:'<p>哦豁 未成功加载文章</p>',
			articleid:0,
			details:"啥都没有",
			constyle:{}
		}
	},
	computed:{
		showstyle:function(){
			return 
		},
		titles:function(){
			return this.details
		},
		content:function (){
			return this.temp;
		},
		articleidxx:function(){
			//console.log(this.$route.params.artcileid)
			return  this.$route.params.artcileid;
		}
	},
	watch:{
		$route(to,from){
			//console.log(to.params.artcileid,from.params.artcileid,this.$route.params.artcileid)
			if (this.$route.params.artcileid!=undefined)
			{
				for (let i=0;i<this.$store.getters.getArticles.length;i++)
					if (to.params.artcileid==this.$store.getters.getArticles[i].id)
						this.details=this.$store.getters.getArticles[i];
				//console.log(this.details);
			}
			
			this.artchange(to.params.artcileid);

		}
	},
	methods:{ 
      com(ob1,ob2)
      {
        if (ob1.date>ob2.date)
          return -1;
        else if(ob1.date<ob2.date)
          return 1;
        else return 0;
      },
		artchange:function(params){
		this.$ajax.get('/api/articledetails', {
		    params: {
		      ID: params
		    }
		  })
		  .then((response)=>{
		  	//console.log(response.data)
		  	//this.temp=response.data.data.content
		  	this.temp=response.data[0].content
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		}
	},
	created:function (){
		for (let i=0;i<this.$store.getters.getArticles.length;i++)
			if (this.$route.params.artcileid==this.$store.getters.getArticles[i].id)
				this.details=this.$store.getters.getArticles[i];
		this.artchange(this.articleidxx);
	},
	mounted (){
/*		this.$root.Bus.$on('xxartchange',()=>{
			this.artchange(this.articleidxx);
		})*/
	},
	beforeCreate:function(){
		      this.$http.get('/api/getArticles')
      .then((ress) => {
       // console.log(ress.data)
      // let res=ress.data.data;
       let res=ress.data;
       res.sort(this.com);
/*       res.forEach(function(item,index){
        item.id=index;
        });*/
        this.$store.dispatch('getArticlesAction',res.slice(0,res.length))
      }),(err) => {
        console.log(err)
      }
	}
}

</script>

<style type="text/css" scoped>
	span{
    display: block;
    color: #999;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
    font-size: 12px;
    margin-bottom: 80px; 
}
p{
	color: black;
}
#artmode{
	height: auto;
	text-align: center;
	overflow:hidden;
}
a{
  color:#999;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
#showcontent{
	overflow:hidden;
	height: auto;
	text-align: justify;
	left: 0;
	right: 0;
	margin: auto;
	position: absolute;
	width: 70%;
	line-height:30px;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
}
</style>