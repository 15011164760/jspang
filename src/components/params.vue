<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{this.$route.params.newsId}}</p>
    <p>{{this.$route.params.newsTitle}}</p>
  </div>
</template>
 
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
<style scoped>
 
</style>