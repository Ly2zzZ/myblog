<template>
  <div id="messagebox">
  	<div>
	  	<el-input
		  type="textarea"
		  :rows="5"
		  placeholder="请输入内容"
		  v-model="textarea.content">
		</el-input>

		<div>
		<div id="inputname">
		 <el-input
		  type="textarea"
		  :rows="1"
		  placeholder="尊姓大名?"
		  v-model="textarea.name">
		</el-input>
		</div>

		<el-button style="height:100%;margin:0px;" 
		@click="Addcommits()">
	  	 添加留言
	  	</el-button>
	  	</div>
  	</div>


	<template v-for="(item,index) in content">
	<el-card class="box-card">
  	<div slot="header" class="clearfix">
    	<span>{{item.name}}</span>
    	<el-button style="float: right; padding: 1px 0" type="text" @click="something(index,item.Pid)">回复Ta</el-button>
  	</div>
  	<p>{{item.content}}</p>

  	<template v-for="(items,indexs) in item.reply">
 	 <div  class="text item">
    	<el-card class="box-card">
    		<span>{{items.name}} 回复: {{item.name}}</span>
    		<p>{{items.content}}</p>
    	</el-card>
 	 </div>
	</template>

	</el-card>
	</template>

<el-dialog title="回复Ta:" :visible.sync="dialogFormVisible">
  <el-form>

    <el-form-item label="你叫啥" :label-width="formLabelWidth">
      <el-input v-model="reply.name" placeholder="请输入内容"></el-input>
    </el-form-item>

    <el-form-item label="说点什么吧" :label-width="formLabelWidth">
		<el-input v-model="reply.content" type="textarea" :rows="4"
		  placeholder="请输入内容"></el-input>
    </el-form-item>
  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addreply">确 定</el-button>
  </div>
</el-dialog>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      contents:[],
      reply:{
      	name:'',
      	content:''
      },
      textarea:{
      	name:"",
      	content:"",
      	reply:[]
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      Nowreplyshow:0,
      Nowreply:0,
      commitsOb:0
    }
  },
  computed:{
  	replyNow:function(){
  		return this.Nowreplyshow;
  	},
  	content:function(){
  		return this.contents;
  	}
  },
  methods:{
    Notify(inf) {
        const h = this.$createElement;
        this.$notify({
          title: '消息通知',
          message: h('i', { style: 'color: teal'}, inf)
        });
      },
  	Addcommits (){
		//console.log("对象", this.textarea)
		this.contents.push({"name":this.textarea.name,"content":this.textarea.content,"reply":[]})

    this.$ajax.get('/api/addcommits', {
        params: {
          Pid:this.commitsOb,
          name:this.textarea.name,
          content:this.textarea.content,
          date:"2018-2-2"
        }
      })
      .then((response)=>{
        this.commitsOb++;
        this.Notify("评论成功")
        //console.log("successful!!!!!!!!!!!!!!!!!!!")
      })
      .catch(function (error) {
        this.Notify("评论失败...")
        console.log(error);
      });

		//console.log(this.contents)
	},
  	something(index,id){
  		this.Nowreplyshow=index;
      this.Nowreply=id;
  		this.dialogFormVisible = true;
  	},
  	addreply(){
  		this.dialogFormVisible = false;
  		//console.log(this.contents[this.replyNow])
  		//console.log(this.reply)
  		//console.log(this.replyNow)
      this.$ajax.get('/api/addreply', {
          params: {
            Rid:this.Nowreply,
            name:this.reply.name,
            content:this.reply.content,
            date:"2018-2-2"
          }
        })
        .then((response)=>{
          this.Notify("评论成功")
          //console.log("successful!!!!!!!!!!!!!!!!!!!")
        })
        .catch(function (error) {
          this.Notify("评论失败...");
          //console.log(error);
        });

  		this.contents[this.replyNow].reply.push({"name":this.reply.name,"content":this.reply.content});
  	}
  },
  created:function(){
  	this.$ajax.get('/api/commits')
  		.then((re)=>{
        // console.log(re.data);
  			//this.contents=re.data.data;
        if (Object.prototype.toString.call(re.data)=='[object Array]')
            this.contents=re.data;
        else this.contents=re.data.data;

        this.commitsOb=this.contents.length+1;
         //console.log(this.contents);

  		})
  		.catch(function (error) {
		    console.log(error);
		});
  },
  render:function(){

  }
}
</script>


<style scoped>
#inputname{
	margin-top: 10px;
	display:inline-block;
	width: 20%;
}
#messagebox{
	width: 100%;
	margin:10px;
}
.el-card{
	margin-bottom: 10px;
	margin-top: 10px;
	margin-right: 10px;
	display:inline-block;
	background-color: #fdfdfd;
	float: none;
	vertical-align: top;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 0px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: auto;
    height: auto;
    min-width: 250px;
    min-height: 50px;
  }
</style>


