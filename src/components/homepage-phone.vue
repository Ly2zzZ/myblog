<template>
  <div class="homepage_ph_main">
    <p class="wel">我想你可以称之为个性,每一部摩托车都有它自己的个性,也可称之为这一部车子所有直觉的总和</p>
    <p class="wel">这种个性常会改变,多会变得更遭,但常常也会变得出人意料地好</p>
    <p class="wel">培养这种车子的个性正式维修保养的真正目的.</p>
    <p class="exp">首页简历未适配手机端,请移步电脑或PAD</p>
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
.homepage_ph_main{
  height: auto;
}
.wel{
  font-size:1.2rem;
  text-indent:10px;
  margin-bottom: 7.5rem;
}
.exp{
  position: relative;
  margin-top: 65%;
  text-align: center;
}
</style>
