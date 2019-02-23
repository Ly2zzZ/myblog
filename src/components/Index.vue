<template>
  <div id="homepage">  
	<div id="canvasxx_div">
  		<canvas id="canvasxx">Canvas is not supported in your browser.</canvas>
	</div>
  	<div class="home_content">
		<homepagePc></homepagePc>
		<homepagePhone></homepagePhone>
  	</div>
  </div>
</template>

<script>
import homepagePc from './homepage-pc';
import homepagePhone from './homepage-phone';
export default {
	components:{
		homepagePc,
		homepagePhone
	},
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
				
  }
}
</script>


<style scoped>
#canvasxx_div{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
		z-index: -1;
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
	font-size:150%;
	font-family: sans-serif;
/*	display: inline-block;*/
}
#homepage{
	height: auto;
	overflow: hidden;
	overflow-x: hidden;
}
#canvasxx{
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.home_content{
	width:70%;
	height:100%;
	right: 0;
	left:0;
	margin: auto;
	/* overflow: auto; */
}

.left_in{
	transition:left 2s, opacity 2s;
	clear: both;
	float: left;
	position:relative;
	left: -100%;
	opacity: 0;
}
.right_in{
	transition:right 2s,opacity 2s;
	clear: both;
	float: right;
	position:relative;
	right: -100%;
	opacity: 0;
}

#luoyu_svg{
	visibility: hidden;
}

#luoyu_canvas{
	float: right;
	clear:both;
}
</style>
