<template>
	<div id="artmode">
		<div>
			<h2 >{{titles.title}} <i class="el-icon-edit-outline" @click="showEdit()"
			 v-bind:class="{ editable: getifeditable, uneditable: !getifeditable }"></i></h2>
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

		</div>

		<div 
		class="components-container"
		v-if="ifedit">

		<div class="editor-container">
			<UE :defaultMsg=temp :config=config ref="ue"></UE>
			<el-button class="buttton_edit" @click="showEdit()"  round>取消</el-button>
			<el-button class="buttton_edit" @click="getUEContent()" style="margin-right:1em;" round>更改</el-button>
		</div>
	</div>

	<div v-else
	v-html="content" @artchange="artchange" id="showcontent"></div>

	<div class="message" style="margin-top:2em;">
		<h3>评论</h3>
		<hr>
		<el-input
		type="textarea"
		:rows="5"
		placeholder="请输入内容"
		v-model="textarea.content">
	</el-input>
	<el-button class="buttton_edit" @click="addcommits()"  round>发表评论</el-button>


	<div v-if="!commits.length" class="empty-prompt">
		<span class="prompt-null-w">还没有评论，快来抢沙发吧！</span>
	</div>

	<div v-else class="commitbox">
		<template  v-for="item in commits">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>{{item.name}}:    
						<el-button style="float: right; padding: 3px 0" type="text"
						@click="resomeone(item)">回复TA</el-button>
					</span>
				</div>
				<div  class="text item">
					{{item.content}}
				</div>
			</el-card>
		</template>
	</div>
</div>
</div>
</template>

<script type="text/javascript">
import UE from './UE'
export default {
	name:'articlemode',
	components:{
		UE
	},
	data(){
		return {
			iseditable:false,
			commits:[
			{
				name:"刘磊",
				content:"写得好"
			},
			{
				name:"张文翔",
				content:"写得好"
			},
			{
				name:"郭海富",
				content:"写得好"
			}
			],
			textarea:{
				name:'',
				content:' '
			},
			ifedit:false,
			temp:'<p>哦豁 未成功加载文章</p>',
			articleid:0,
			details:"啥都没有",
			editorOption:{},
			defaultMsg: '这里是UE测试',
			config: {
				initialFrameWidth: null,
				initialFrameHeight: 350
			}
		}
	},
	computed:{
		getifeditable(){

			return this.iseditable;
		},
		titles:function(){
			return this.details
		},
		content:function (){
			return this.temp;
		},
		articleidxx:function(){
			return  this.$route.params.artcileid;
		}
	},
	watch:{
		$route(to,from){
			if (this.$route.params.artcileid!=undefined)
			{
				for (let i=0;i<this.$store.getters.getArticles.length;i++)
					if (to.params.artcileid==this.$store.getters.getArticles[i].id)
						this.details=this.$store.getters.getArticles[i];

					this.artchange(to.params.artcileid);
				}

			}
	},
	methods:{ 
		resomeone(inf){
			this.textarea.content+='@'+inf.name+':'
		},
		addcommits(){
			if (this.textarea.content==' ')
			{
				this.$notify({
					title: '请输入内容',
					type: 'error'
				});
			}
			else{
			if (this.$store.getters.getusername.name==undefined)
			   {
			      let t=this.getCookie('username');
			      let tt=this.getCookie('userid');
			      this.textarea.name=t;
			      this.$store.dispatch('getusernameAction',{"username":t,'"userid':tt});
			   }
			   else{
			    this.textarea.name=this.$store.getters.getusername.name
			   }
			   if (this.textarea.name=="")
			   		this.textarea.name="吃瓜游客";

				this.commits.push(this.textarea)

				
				this.$notify({
					title: '评论成功',
					type: 'sucess'
				});
			}
		},
	showEdit(){
		if (this.iseditable==false){
			this.$notify({
	          title: '权限不够哦...',
	          type: 'error'
	        });
			return;
		}
		if(this.ifedit==false)
			this.ifedit=true;
		else
			this.ifedit=false;
	},
	getUEContent() {
		var that=this;
        let content = this.$refs.ue.getUEContent();

        let id=this.$route.params.artcileid
         this.$ajax.post('/api/changearticle', {
          params: {
          	id:id,
            content:content,
            date: new Date().format("yyyy-MM-dd")
          }
        })
        .then((response)=>{
	        that.$notify({
		      title: '修改成功',
		      type: 'success'
		    });
		 this.showEdit();
		 this.temp=content;
        })
        .catch(function (error) {
        	that.$notify({
		      title: '修改失败',
		      type: 'error'
		    });
        });

    },
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
    		this.temp=response.data[0].content
    	})
    	.catch(function (error) {
    		console.log(error);
    	});

    },
		onEditorBlur(){//失去焦点事件
		},
        onEditorFocus(){//获得焦点事件
        },
        onEditorChange(){//内容改变事件
        }
    },
    created:function (){
    	if (this.titles=="啥都没有")
    	{
    		this.$ajax.get('/api/getArticles')
    		.then((ress) => {
    			var res;
    			if (Object.prototype.toString.call(ress.data)=='[object Array]')
    				res=ress.data;
    			else res=ress.data.data;

    			res.sort(this.com);
    			for (let i=0;i<res.length;i++)
    				if (this.$route.params.artcileid==res[i].id)
    					this.details=res[i];

    				this.$store.dispatch('getArticlesAction',res.slice(0,res.length))
    			}),(err) => {
    			console.log(err)
    		}
    	}


    	for (let i=0;i<this.$store.getters.getArticles.length;i++)
    		if (this.$route.params.artcileid==this.$store.getters.getArticles[i].id)
    			this.details=this.$store.getters.getArticles[i];
    		this.artchange(this.articleidxx);
    	},
    	mounted (){

	},
	beforeCreate:function(){
		this.$ajax.get('/api/getArticles')
		.then((ress) => {
			var res;
			if (Object.prototype.toString.call(ress.data)=='[object Array]')
				res=ress.data;
			else res=ress.data.data;
			res.sort(this.com);

			this.$store.dispatch('getArticlesAction',res.slice(0,res.length))
		}),(err) => {
			console.log(err)
		}
	},
	mounted(){
		let confirm;
		if (this.$store.getters.getusername.name==undefined)
	     {
	         confirm=this.getCookie('userid');
	     }
	     else{
	      confirm=this.$store.getters.getusername.name
	     }
	     if (confirm=='admin')
	     	this.iseditable=true;
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
	width: 98%;
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
	display: inline-block;
	text-align: justify;
	width: 98%;
	max-width: 1000px;
	overflow-y: auto;
	font-family: Lato,PingFang SC,Microsoft YaHei,sans-serif;

	border-style: hidden;
    border-radius: 5px;
    box-shadow: rgba(25, 26, 26, 0.2) 0px 1px 5px 1px;
    padding: 0px 10px;
}

.editor-container{
	clear:both;
	display: inline-block;
    width: 70%;

}


.message{
	text-align: justify;
	display: inline-block;
	width: 98%;
	max-width: 1000px;
}

.buttton_edit{
	margin-top: 1em;
	display:block;
	float:right;
}


.box-card{
	margin-top: 1em;
	clear:both;
}

.box-card .text{
	font-size: 1.2em;
}

.commitbox .el-card:nth-child(1){
	margin-top: 5em;
}

.el-card__header{
	height: auto;
}
.clearfix span{
	margin: 0;
	font-size: 1.3em;
}


.prompt-null-w{
	line-height: 30px;
	font-size: 12px;
	color: #999;
	text-align: center;
}


.empty-prompt{
	margin-top:5em;
	height: 30px;
	background: #f0f0f0;
	text-align: center;
	opacity: .5;
}

.editable{
	cursor: pointer;
}
.uneditable{
	cursor: not-allowed;
}

img{
	max-width: 100%;
}
</style>