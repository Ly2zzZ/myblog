<template>
  <div id="ArticleHomePage">
    <transition mode="out-in">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'detai',
  data () {
    return {
      totalpage:0,
      articles:[],
      nowpage:1
    }
  }
}
</script>


<style> 

</style>
