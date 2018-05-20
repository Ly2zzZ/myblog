<template>
  <div id="homepage" style="100%">  
  	<canvas id="canvasxx">Canvas is not supported in your browser.</canvas>
  	<div class="home_content">
  		<p>暂时想不出首页放些什么狂拽酷炫的东西</p>
  		<p>我这么说,你应该懂了吧</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
	margin:auto;
	width:500px;
}
#homepage{
	height: 800px;
	overflow: hidden;
	overflow-x: hidden;
}
#canvasxx{
  position:absolute;
  z-index:-1;
}
.home_content{
	width:70%;
	height:100%;
	right: 0;
	left:0;
	margin: auto;
	p{

	}
}
</style>
