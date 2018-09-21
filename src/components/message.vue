<template>
  <div id="messagebox">
  	<div>
	  	<el-input
		  type="textarea"
		  :rows="5"
		  placeholder="请输入内容"
		  v-model="textarea.content">
		</el-input>

		<div id="inputname">
<!-- 		 <input
     id="nameinput"
		  type="textarea"
		  :rows="1"
		  placeholder="尊姓大名?"
		  v-model="textarea.name">
		</input> -->

    <el-button style="display: inline-block; height: 3em;width:10%;float:right" 
    @click="Addcommits()">
       添加留言
      </el-button>
		</div>
	  	</div>

<div id="mainmessage">
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
</div>

<el-dialog title="回复Ta:" :visible.sync="dialogFormVisible">
  <el-form>
<!--       <el-input v-model="reply.name" placeholder="你叫啥"></el-input> -->
		<el-input v-model="reply.content" type="textarea" :rows="4"
		  placeholder="说点什么吧"></el-input>

  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button class="rebutton" @click="dialogFormVisible = false">取 消</el-button>
    <el-button class="rebutton" type="primary" @click="addreply">确 定</el-button>
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
      if (this.textarea.content == "")
      {
          this.Notify("请输入内容")
      }

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
        {
          this.textarea.name="吃瓜游客";
        }
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
        console.log(response)
        this.commitsOb++;
        this.Notify("评论成功")
        this.textarea.content = "";
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
      this.reply.name=this.$store.getters.getusername;

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
#mainmessage{
  display: flex;
  flex-wrap:wrap;
  width: 100%;
}
#inputname{
  margin-top: 1em;
}
#nameinput{
    border-radius: 4px;
    display: inline-block;
   width: 60%;
   height: 3em;
    border: 1px solid #dcdfe6;
    color: #606266;
    background-color: #fff;
    background-image: none;
    margin-right: 1em;
}

#messagebox{
	width: 70%;
  right: 0;
  left: 0;
  margin:auto;

}
.el-card{
	margin-bottom: 1em;
	margin-top: 1em;
	margin-right: 1em;
	background-color: #fdfdfd;
	vertical-align: top;
}
.text {
    font-size: 1em;
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
    height: auto;
    width: 250px;
    width: 250px;
    span{
      margin: 0;
    }
  }
.el-dialog__footer {
    padding: 0px;
    padding-bottom: 10px;
  }
.rebutton{
  display: inline-block;
  width: 30%;
}
</style>


