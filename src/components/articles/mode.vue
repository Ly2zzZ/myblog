<template>
	<div v-html="content"></div>
</template>

<script type="text/javascript">
/*import actual from './actual'*/

export default {
	name:'articlemode',
	data(){
		return {
			temp:'<p>哦豁 未成功加载文章</p>',
			articleid:0
		}
	},
	computed:{
		content:function (){
			return this.temp;
		},
		articleidxx:function(){
			console.log(this.$route.params.artcileid)
			return  this.$route.params.artcileid;
		}
	},
	methods:{ 
		artchange:function(params){
			console.log("asdasdasdasda1112312313")
		this.$ajax.get('/api/articledetails', {
		    params: {
		      ID: this.articleidxx
		    }
		  })
		  .then((response)=>{
		  	this.temp=response.data.data
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		}
	},
	created:function (){
				this.$ajax.get('/api/articledetails', {
		    params: {
		      ID: this.articleidxx
		    }
		  })
		  .then((response)=>{
		  	this.temp=response.data.data
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}

</script>