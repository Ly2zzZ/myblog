<template>
  <div id="guide">
    <div class="PCshow">
      <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
      <span style="font-weight: lighter; font-size: 30px;font-weight: lighter; color:black">欢迎来到米奇妙妙污</span>

    <el-menu-item index="/">Home</el-menu-item>

    <el-menu-item index="/articleAll">
      Articles
    </el-menu-item>

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

    <el-menu-item index="3" >
        <a href="https://github.com/Ly2zzZ" style="text-decoration:none">GitHub</a>
    </el-menu-item>

    <el-menu-item index="4" >
        <a href="https://www.zhihu.com/people/jin-yu-69-77-42/activities" style="text-decoration:none">ZhiHu</a>
    </el-menu-item>

  </el-menu>
    </div>
    <li class="el-icon-arrow-right folder " 
    v-on:click="ishow=ishow==true?false:true"></li>
    <transition name="bounce">

    <div class="Phoneshow" v-if="gishow">
      <div class="folder-in" v-on:click="ishow=ishow==true?false:true"></div>
    <el-radio-group v-model="isCollapse"  style="margin-bottom: 20px;">
<!--       <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button> -->
    </el-radio-group>

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


<!--       <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item> -->
    </el-menu>
    </div>
  </transition>

  </div>
</template>

<script>

  export default {
    name:'myHuide',
    data() {
      return {
        ishow:false,
        isCollapse: true,
        activeIndex: '1',
        catelist:[],
        textarea: ''
      };
    },
    computed:{
      gishow:function(){
        return this.ishow;
      }
    },
    methods: {
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
      this.$http.get('/api/getArticles')
      .then((ress) => {
       // console.log(ress.data)
      // let res=ress.data.data;
      var res;
      if (Object.prototype.toString.call(ress.data)=='[object Array]')
          res=ress.data;
      else res=ress.data.data;

       res.sort(this.com);
/*       res.forEach(function(item,index){
        item.id=index;
        });*/
        this.$store.dispatch('getArticlesAction',res.slice(0,res.length))
       // console.log("head",this.$store.getters.getArticles)
        for (let item in res)
          this.catelist.push(res[item].cate);
        this.catelist=Array.from(new Set(this.catelist));
      //  console.log(this.catelist)
      }),(err) => {
        console.log(err)
      }
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
</style>