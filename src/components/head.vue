<template>
  <div id="guide">
    <div class="PCshow">
      <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
        <span style="font-weight: lighter; font-size: 30px;font-weight: lighter; color:black">欢迎来到米奇妙妙污</span>

        <el-menu-item index="/">Home</el-menu-item>

        <el-submenu index="/articleAll">
          <template slot="title">Articles</template>

          <el-menu-item index="/articleAll">
            Lists
          </el-menu-item>

          <el-menu-item @click="something()" index=""
          v-bind:class="{ editable: getifeditable, uneditable: !getifeditable }">
          Add article
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/message">
        LeaveMessage
      </el-menu-item>

      <el-submenu index="">
        <template slot="title">Categories</template>

        <template v-for="(item,index) in catelist">
          <el-menu-item index='/Categories/item' @click="ChangeCate(item)">
            {{item}}
          </el-menu-item>
        </template>
      </el-submenu>

      <el-menu-item index="" >
        <a href="https://github.com/Ly2zzZ" style="text-decoration:none">GitHub</a>
      </el-menu-item>

      <el-menu-item index="" >
        <a href="https://www.zhihu.com/people/jin-yu-69-77-42/activities" style="text-decoration:none">ZhiHu</a>
      </el-menu-item>

    </el-menu>
  </div>
  <li class="el-icon-arrow-right folder " 
  v-on:click="ishow=ishow==true?false:true"></li>
  <transition name="bounce">

    <div class="Phoneshow" v-if="gishow">
      <div class="folder-in" v-on:click="ishow=ishow==true?false:true"></div>

      <el-menu class="el-menu-vertical-demo" router  :collapse="isCollapse">

        <i class="el-icon-circle-close-outline" 
        v-on:click="ishow=ishow==true?false:true"
        style="cursor:pointer" 
        ></i>

        <el-menu-item index="/">
          <i class="el-icon-setting"></i>
          <span slot="title">Home</span>
        </el-menu-item>

        <el-menu-item index="/articleAll">
          <i class="el-icon-document"></i>
          <span slot="title">Articles</span>
        </el-menu-item>

        <el-menu-item index="/message">
         <i class="el-icon-message"></i>
         <span slot="title">LeaveMessage</span>
       </el-menu-item>

       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">Categories</span>
        </template>

        <template v-for="(item,index) in catelist">
          <el-menu-item index='/Categories/item' @click="ChangeCate(item)">
            {{item}}
          </el-menu-item>
        </template>

      </el-submenu>
    </el-menu>
  </div>


  <el-dialog title="请输入信息:" :visible.sync="dialogFormVisible">
    <el-form>
      <el-form-item label="标题名称:">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="分类至:" class="inline-form inline-form-left">
        <el-select v-model="form.cate" placeholder="请选择分类">
          <el-option v-for="(item,index) in catelist" :label="item" :value="item" key="index"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="发表时间:" class="inline-form inline-form-right">
        <el-date-picker style="width: 70%;" 
        type="date" 
        placeholder="选择日期" 
        v-model="form.date">

      </el-date-picker>
    </el-form-item>
  </el-form>

  <div slot="footer" class="dialog-footer" style="clear:both">
    <el-button class="rebutton" type="primary" @click="onSubmit()">确 定</el-button>
    <el-button class="rebutton" @click="dialogFormVisible = false">取 消</el-button>
  </div>
</el-dialog>
</transition>

</div>
</template>

<script>

export default {
  name:'myHuide',
  data() {
    return {
      iseditable:false,
      form:{},
      dialogFormVisible: false,
      ishow:false,
      isCollapse: true,
      activeIndex: '1',
      catelist:[],
      textarea: ''
    };
  },
  computed:{
   getifeditable(){
     return this.iseditable;
  },
  com_dialogFormVisible(){
    return this.dialogFormVisible;
  },
  gishow:function(){
    return this.ishow;
  }
},
methods: {    
  onSubmit(){
    this.form.readnum=100;
    this.form.liked=100;
    this.form.date=new Date(this.form.date).format("yyyy-MM-dd")
    this.$root.Bus.$emit('event1',this.form)
    this.dialogFormVisible = false;
  },
  something(){

    if (this.iseditable==false){
      this.$notify({
          title: '权限不够哦...',
          type: 'error'
        });
      return;
    }

    if (this.$route.path=='/articleAll')
    {
      this.dialogFormVisible = true;
    }
    else{
     var that=this;

     this.$router.push({path:'/articleAll'})

     setTimeout(function(){ 
      that.dialogFormVisible = true;
      console.log(that.dialogFormVisible)
    }, 1000);
   }

 },
 handleSelect(key, keyPath) {
      //  console.log(key, keyPath);
    },
    ChangeCate (aim){
        //console.log("headchange",aim)
        this.$store.dispatch('change',aim)
      },
      com(ob1,ob2)
      {
        if (ob1.date>ob2.date)
          return -1;
        else if(ob1.date<ob2.date)
          return 1;
        else return 0;
      }
    },
    beforeCreate: function (){
      this.$ajax.get('/api/getArticles')
      .then((ress) => {
        var res;
        if (Object.prototype.toString.call(ress.data)=='[object Array]')
          res=ress.data;
        else res=ress.data.data;

        res.sort(this.com);

        this.$store.dispatch('getArticlesAction',res.slice(0,res.length))
       // console.log("head",this.$store.getters.getArticles)
       for (let item in res)
        this.catelist.push(res[item].cate);
      this.catelist=Array.from(new Set(this.catelist));
      //  console.log(this.catelist)
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
       else
        this.iseditable=false;
  }
  }


  </script>

  <style scoped>
  .folder{
    width: 50px;
    height: 50px;
    position: fixed;
    left: 0px;
    top: 50%;
    cursor: pointer;
  }
  el-menu{
    width: 100%;
  }
  #guide{
    height: 100%;
    width: 100%;
  }
  .Phoneshow{
    position: fixed;
    left: 0px;
    top: 50%;
    width: 30%;
    z-index: 1;
    transform: translate(0,-50%);
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height:100%;
  }


  .bounce-enter-active {
    animation: bounce-in .2s;
  }
  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }
  @keyframes bounce-in{
    from {
      left: -20px;
    }
    to{
      left: 0px;
    }
  }


  .inline-form{
    margin-top: 2em;
    width:40%;display: inline-block
  }
  .inline-form-left{
    float: left;
  }
  .inline-form-right{
    float: right;
  }


  .editable{
    cursor: pointer;
  }
  .uneditable{
    cursor: not-allowed;
  }
  </style>