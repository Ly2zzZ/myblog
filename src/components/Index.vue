<template>
  <div id="homepage">  
  	<canvas id="canvasxx">Canvas is not supported in your browser.</canvas>
	<p>测试文字</p>
	<span>2018-03-08</span>  	 
	<p>测试文字</p>
	<span>2018-03-08</span>	
	<p>测试文字</p>
	<span>2018-03-08</span>  	
	<p>测试文字</p>
	<span>2018-03-08</span>	
	<p>测试文字</p>
	<span>2018-03-08</span>   
	<p>测试文字</p>
	<span>2018-03-08</span> 
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
	    text-align: center;
}
#homepage{
	width: 100%;
	height: 800px;
	overflow: hidden;
	overflow-x: hidden;
}
#canvasxx{
  position:absolute;
  z-index:-1;
}
</style>
