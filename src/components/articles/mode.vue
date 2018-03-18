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
				this.details=this.$store.getters.getArticles[to.params.artcileid-1];
				//console.log(this.details);
			}
			
			this.artchange(to.params.artcileid);

		}
	},
	methods:{ 
		artchange:function(params){
		this.$ajax.get('/api/articledetails', {
		    params: {
		      ID: params
		    }
		  })
		  .then((response)=>{
		  	console.log(response.data)
		  	//this.temp=response.data.data.content
		  	this.temp=response.data[0].content
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		}
	},
	created:function (){
		this.details=this.$store.getters.getArticles[this.$route.params.artcileid-1];
		this.artchange(this.articleidxx);
	},
	mounted (){
/*		this.$root.Bus.$on('xxartchange',()=>{
			this.artchange(this.articleidxx);
		})*/
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
	text-align: center;
}
a{
  color:#999;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
#showcontent{
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