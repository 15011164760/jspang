<template>
  <div id="app">
      <!-- <p>{{ $router.name}}</p> -->
      <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		  <router-view ></router-view>
		 <router-view name="right" style="float:right;width:50%;height:300px;"></router-view>
		 <router-view name="foot" style="float:right;width:100%;height:300px;"></router-view>
      <p>导航 ：
	      <router-link to="/">首页</router-link> | 
          <router-link to="/hi">Hi页面</router-link> |
          <router-link to="/params/198/jspang website is very good">params page</router-link> |
          <router-link to="/gopage/1990/gobackparams">gopage</router-link> |
          <router-link to="/jspang">Hi1</router-link> |
          <router-link to="/count">count</router-link> |
          <!-- <router-link to="/params/198/jspang website is very good">params</router-link> | -->
      </p>
      <button @click="func">跳转参数页面</button>
       <button @click="goback">返回</button>
  </div>
</template>
<script>
export default {
  data() {   
       return  {}
  },
  created(){
  	// component
  },
  methods:{
     func(){
     	this.$router.push('/params/'+19900+'/'+'yangdongxu website is very good')
     },
     goback(){
     	this.$router.go(-1);
     }
  }    
}  
</script>

<style>
</style>
