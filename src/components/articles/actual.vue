<template>
	<div>
		<p>asdasdasdasd</p>
		<runoob></runoob>
	</div>
</template>



<script type="text/javascript">

export default {
	name:'mmmm',
	prop:{
		temp:{
			type:String,
			default:'<h1>哦豁 未成功加载文章</h1>'
		}
	},
	components:{
		'runoob':{
			template:this.temp
		}
	},
	data(){
		return {

		}
	}
}

</script>