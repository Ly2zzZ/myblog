<template>
  <div class="homepage_pc_main">
    <div class="CV_left">
      <img src="../assets/luoyu.jpg" class="myphoto">
      <div class="myinf">
        <p>
          <img src="../assets/perinf.png" class="myli_left">
          <span class="CV_left_p">个人信息</span>
        </p>
        <p>
          <i class="el-icon-date"></i>
          <span>21岁</span>
        </p>
        <p>
          <i class="el-icon-location"></i>
          <span>绵阳</span>
        </p>
        <p>
          <i class="el-icon-phone"></i>
          <span>18780031093</span>
        </p>
        <p>
          <i class="el-icon-message"></i>
          <span>ly2_zzz@qq.com</span>
        </p>
      </div>

      <div class="myprize">
        <p>
          <img src="../assets/prize.png" class="myli_left">
          <span class="CV_left_p">技能获奖</span>
        </p>

        <p>2016.06 西南科技大学第十二届程序 设计大赛三等奖</p>
        <p>2016.12 西南科技大学计算机科学与 技术学院ACM程序设计大赛三等奖</p>
        <p>2017.12 西南科技大学计算机学院创 新项目"浏览器历史数据可视分 析"三等奖</p>
        <p>2018.7 ChinaVis2018可视分析挑 战赛优秀奖</p>
      </div>

      <div class="myprize">
        <p>
          <img src="../assets/star.png" class="myli_left">
          <span class="CV_left_p">Github地址</span>
        </p>
        <p>https://github.com/Ly2zzZ</p>
      </div>

      <div class="myprize">
        <p>
          <img src="../assets/star.png" class="myli_left">
          <span class="CV_left_p">Bl.ock地址</span>
        </p>
        <p>https://bl.ocks.org/Ly2zzZ</p>
      </div>
    </div>

    <div class="CV_middle">
      <p>
        <canvas id="luoyu_canvas" width="400px" height="250px" style="zoom:0.7"></canvas>
        <svg id="luoyu_svg" width="390" height="249">
          <path
            fill="none"
            stroke="#000"
            stroke-width="1.5"
            id="svg_4"
            d="m51.5,29.5c0,1 -1,4 -3,12c-3,12 -4.91879,23.01276 -7,36c-1.92497,12.01227 -3.49957,23.96881 -4,36c-0.37403,8.99223 0,16 0,20c0,4 0.64073,7.05165 0,11c-0.50654,3.12144 -1,6 -1,8c0,2 1.90779,4.49623 6,5c6.94755,0.85529 16.02184,-1.89375 26,-4c9.02077,-1.90416 19,-4 23,-6l2,-1l1,0l0,-1"
          ></path>
          <path
            stroke="#000"
            fill="none"
            stroke-width="1.5"
            id="svg_5"
            d="m116.6438,75.5c-1.02253,0 -1.08942,0.96504 -2.04506,3.94305c-2.20008,6.85588 -2.55823,14.79868 -3.06759,24.64407c-0.5119,9.8945 -2.15714,18.80571 -1.02253,26.6156c1.03251,7.1071 3.14971,12.20022 7.15772,13.80068c2.83409,1.13171 8.18025,-1.97153 13.29291,-5.91458c5.11266,-3.94305 11.28687,-6.626 15.33797,-10.84339c3.10705,-3.23458 4.09013,-8.87187 4.09013,-16.75797c0,-6.90034 -1.02253,-10.84339 -1.02253,-14.78644c0,-2.95729 0,-6.90034 0,-9.85763c0,-2.95729 0,-3.94305 0,-2.95729c0,4.92881 -0.62449,11.88024 -2.04506,20.70102c-1.59981,9.93384 -3.06759,18.72949 -3.06759,23.65831c0,3.94305 1.83749,5.18166 3.06759,5.91458c2.7506,1.63884 4.09013,0.98576 5.11266,1.97153l2.04506,0l1.02253,0"
          ></path>
          <path
            fill="none"
            stroke="#000"
            stroke-width="1.5"
            id="svg_11"
            d="m183.5,123.5c0,-1 -0.69344,-1.4588 -2,-2c-0.92387,-0.38268 -1.41885,-1.41886 -3,-3c-1.58115,-1.58114 -3,-2 -5,-4c-1,-1 -2,-2 -2,-3c0,-1 -0.61731,-2.07612 -1,-3c-0.5412,-1.30656 -0.51945,-3.03873 -1,-6c-0.50655,-3.12144 -1,-6 -1,-7c0,-1 0,-2 0,-3c0,-1 0,-2 0,-4c0,-1 0,-3 0,-4c0,-1 0.297,-2.61384 3,-5c1.67633,-1.47984 2.38687,-2.91761 5,-4c1.84776,-0.76537 3.31001,-1.33749 6,-3c1.203,-0.7435 2.69344,-1.4588 4,-2c0.92387,-0.38268 3,0 4,0c2,0 4.07613,-0.38268 5,0c1.30656,0.5412 2,1 4,3c1,1 2.4588,1.69344 3,3c0.76537,1.84776 0.69255,3.186 2,5c0.8269,1.14727 1.48625,2.82375 2,5c0.4595,1.94649 -0.38269,4.07612 0,5c0.5412,1.30656 1,3 1,5c0,3 0,5 0,7c0,1 -0.4588,3.69344 -1,5c-0.76537,1.84776 -0.85194,3.22836 -2,6c-0.5412,1.30656 -1.4588,2.69344 -2,4c-0.38269,0.92388 -1.29289,2.29289 -2,3c-0.70711,0.70711 -1.29289,0.29289 -2,1c-1.41422,1.41422 -3,0 -4,0c-1,0 -3,0 -4,0c-1,0 -2,0 -3,0c-1,0 -2,0 -3,-1l-1,0"
          ></path>
          <path
            fill="none"
            stroke="#000"
            stroke-width="1.5"
            id="svg_15"
            d="m218.5,66.5c1,0 1.85274,-1.1731 3,-2c1.814,-1.30745 5,-1 7,-1c1,0 3.49904,1.95332 4,10c0.68352,10.97875 -1,25 -1,35c0,4 2.0292,5.59122 8,5c10.14841,-1.00489 25.07431,-0.70731 33,-8c6.58194,-6.05625 6.12259,-14.98085 7,-21c1.16296,-7.97794 1,-14 1,-17c0,-1 -2.0535,-1.4595 -4,-1c-2.17624,0.51374 -3.69299,7.00589 -4,15c-0.50037,13.0288 -1.03577,31.15315 -5,53c-4.02805,22.19853 -8.72778,42.3985 -14,57c-4.86252,13.46684 -11.79968,21.24744 -18,20c-10.42133,-2.09666 -17.3027,-20.64977 -21,-37c-3.11922,-13.79385 2.55991,-26.03313 18,-32c28.32306,-10.94553 51,-17 57,-19l1,0l1,0"
          ></path>
          <path
            fill="none"
            stroke="#000"
            stroke-width="1.5"
            id="svg_19"
            d="m304.5,50.5c0,1 0,3 0,7c0,6 0,13 0,20c0,9 -1.14877,16.13376 0,21c1.0275,4.3525 4,7 7,7c4,0 8.37769,-0.40163 15,-5c6.41531,-4.45464 9.54831,-10.12668 12,-18c2.54022,-8.15765 4.88135,-14.02521 6,-19c0.90457,-4.02266 3,-8 1,-8c-1,0 -1.4148,6.90758 -3,15c-1.35928,6.93919 -1,14 -1,19c0,5 1,8 4,11l2,1l2,0"
          ></path>
          <path
            stroke="#000"
            fill="none"
            stroke-width="1.5"
            id="svg_20"
            d="m29.5,215.5c1.83896,0 27.58019,-3.49872 90.10909,-9.72881c91.02246,-9.06905 180.21818,-19.45763 241.82337,-27.79661l20.22857,-3.47458l0.91948,0l0.91948,0"
          ></path>
        </svg>
      </p>
      <div class="block_inf">
        <img src="../assets/edu.png" class="myli">
        <span class="CV_middle_p">教育背景</span>
        <div class="small_block">
          <p>
            <span class="small_block_span">2015.9-至今</span>
            <span class="small_block_span">西南科技大学</span>
            <span class="small_block_span">软件工程</span>
          </p>
          <p>主修课程:数据结构、程序设计(C)、面向对象程序设计(C++)、算法分析、计算 机操作系统原理、计算机网络、数据库原理及应用、数据可视化</p>
        </div>
      </div>
      <div class="block_inf">
        <img src="../assets/work.png" class="myli">
        <span class="CV_middle_p">实习经验</span>
        <div class="small_block">
          <p>
            <span class="small_block_span">2018.11-2019.1</span>
            <span class="small_block_span">美团点评</span>
            <span class="small_block_span">前端开发实习生</span>
          </p>
          <p>与快驴后台驼峰管理系统开发,实习期间参与MeiTuanDesign-Angular组建 库开发,同时为团队开发追踪需求生命周期的可视化小插件接入内部接口</p>
        </div>
        <div class="small_block">
          <p>
            <span class="small_block_span">2018.8-2018.9</span>
            <span class="small_block_span">360企业安全</span>
            <span class="small_block_span">前端开发实习生</span>
          </p>
          <p>参与公司内部产品前端页面开发,由于遗留历史原因,项目采用jquery.js和 bootstrap搭建,且产品交付时间将至,本人需要迅速熟悉相关知识并参与开发</p>
        </div>
      </div>
      <div class="block_inf">
        <img src="../assets/skill.png" class="myli">
        <span class="CV_middle_p">个人技能</span>
        <div class="small_block">
          <p>熟悉JavaScript,Css,Html,Es6,熟悉使用TypeScript</p>
          <p>熟悉Vue.js,Element.ui,Less,Angular.js,了解React,Antd</p>
          <p>熟悉webpack,git,sonar规范,了解node.js</p>
          <p>了解python,flask,能熟练使用python工具包</p>
          <p>英语水平：CET6，良好的英语写作能力,及英文文献阅读能力</p>
        </div>
      </div>
      <div class="block_inf">
        <img src="../assets/prod.png" class="myli">
        <span class="CV_middle_p">项目经验</span>
        <div class="small_block">
          <p>
            <span class="small_block_span">2018.11-2019.1</span>
            <span class="small_block_span">MTD-Angular组件库</span>
            <span class="small_block_span">前端开发</span>
          </p>
          <p>项目描述:MTD(MeiTuan Design)组件库,是美团点评内部开发的一套组件库,本人负责Tooltip,Switch,Announcement三个组件的开发工作</p>
        </div>
        <div class="small_block">
          <p>
            <span class="small_block_span">2018.11-2019.1</span>
            <span class="small_block_span">快驴驼峰管理后台</span>
            <span class="small_block_span">前端开发</span>
          </p>
          <p>项目描述:在美团点评实习期间,参与快驴驼峰管理后台系统开发,使用angular.js,驼峰负责快驴整个平台的后台操作业务</p>
        </div>
        <div class="small_block">
          <p>
            <span class="small_block_span">2018.2-至今</span>
            <span class="small_block_span">个人博客网站</span>
            <span class="small_block_span">前端后台</span>
          </p>
          <p>项目描述:前端框架使用vue.js,参考element.ui,express管理路由,完成数据库的 增删查改,实现功能有文章浏览,留言,登陆注册,博客线上网址 www.shuaibiyu.cn</p>
        </div>
        <div class="small_block">
          <p>
            <span class="small_block_span">2017.4-至今</span>
            <span class="small_block_span">网络安全结构可视化系统</span>
            <span class="small_block_span">前端开发</span>
          </p>
          <p>项目描述:网络拓扑结构可视化项目,项目主要涉及复杂网络结构模型的可视化呈现,项目从demo至demo2.0到现今正式框架确定
            <br>本人在项目中承担一个信息视图的处理,在项目中捕捉鼠标选中的节点元素,在窗口中显示此节点和相关节点的流量信息图例
          </p>
        </div>
        <div class="small_block">
          <p>
            <span class="small_block_span">2017.12-至今</span>
            <span class="small_block_span">渗透攻击可视化系统</span>
            <span class="small_block_span">前端开发</span>
          </p>
          <p>项目描述:实验室老师论文的原型模型,目的是可视化渗透python脚本对网站的安全分析结果,通过一系列的测试分析,并由安全实验室给出安全评估,最终对目标 网站进行安全性评估测试
            <br>本人在项目中负责与安全实验室对接,以flask框架做后台,将渗透脚本融进系统, 并为不同返回结果找到适当的可视化方式,用d3.js实现.,最后对操作记录构造攻击树
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {}
};
</script>

<style scoped>
.homepage_pc_main {
  overflow-y: hidden;
  overflow-x: visible;
  border-style: hidden;
  border-radius: 5px;
  box-shadow: rgba(25, 26, 26, 0.2) 0px 1px 5px 1px;
  border-top: 1px solid rgba(25, 26, 26, 0.2);
  border-bottom: 1px solid rgba(25, 26, 26, 0.2);
  padding: 0px 0px;
}

.CV_left {
  box-sizing: border-box;
  width: 30%;
  background-color: rgb(37, 70, 101);
  text-align: center;
  vertical-align: middle;
  padding: 0px 4%;
  float: left;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}

.CV_middle {
  box-sizing: border-box;
  float: left;
  width: 70%;
  height: auto;
  padding: 0px 4%;
  margin-bottom: -9999px;
  padding-bottom: 9999px;
}

.myphoto {
  border: 2px solid white;
  margin-top: 10%;
  width: 45%;
}

.myinf {
  color: white;
  text-align: left;
  margin-bottom: 3rem;
}

.myprize {
  color: white;
  text-align: left;
}

.myprize p {
  margin-bottom: 10%;
}

.myli_left {
  width: 15%;
  float: left;
  margin-right: 10px;
}

.CV_left_p {
  display: inline-block;
  width: 80%;
  border-bottom: 2px solid white;
  padding-bottom: 10px;
}

.myli {
  width: 5%;
  float: left;
}

.CV_middle_p {
  margin-left: 2%;
  width: 90%;
  display: inline-block;
  border-bottom: 2px solid rgb(37, 70, 101);
  padding-bottom: 10px;
}

.block_inf {
  clear: both;
  margin-bottom: 3rem;
}

.small_block_span {
  display: inline-block;
  margin-right: 15%;
  width: 120px;
  white-space: nowrap;
}

.small_block{
  margin-bottom: 5%;
}
#luoyu_svg {
  visibility: hidden;
}
</style>
