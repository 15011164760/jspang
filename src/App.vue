<template>
  <div id="app">
      <h2 v-html="title"></h2>
      <input type="" name="" v-model="newItem" v-on:keyup.enter="addnew">
      <!-- <h2>{{newItem}}</h2> -->
      <ul>
          <li v-for="item in items" v-bind:class="{finished:item.isfinished,finished1:item.isfinished}" v-on:click="dosomething(item)">
             <p v-text="item.label"></p>  
             <!-- <p v-text="item.isfinished"></p>   -->
          </li>
      </ul>  
      <p>{{sonMsg}}</p>
      <Compontenta msgFromfather="you die" v-on:childsay="listenmyson"></Compontenta> 
  </div>
</template>

<script>
  import Store from './store.js'
  import Compontenta from './components/compontents'
  // console.log(Compontenta)
  // console.log(Store);
export default {
  data:function() {
        return {
          newItem:'',
          title:'<span>nihao</span>头部文件',
           items:Store.fetch(),
           // items:[],
           liclass:'liclassclassvalue',
           sonMsg:'默认值'
           // you:'nifadsi',
          // you:'father'

        }
  },
  components:{Compontenta},
  methods:{
    dosomething:function(item){
            console.log(item);
            item.isfinished=!item.isfinished
           },
           addnew:function(){
            console.log(this.newItem);
            this.items.push({
                label:this.newItem,
                isfinished:true,
              })
            this.newItem='';
           },
           listenmyson:function(msg){
              this.sonMsg=msg;
           }
  },
  watch:{
    'items':{
      handler:function(newval){
          Store.save(newval);
      },
      deep:true
    }
  }
}
</script>

<style>
.finished{
    text-decoration: underline;
}
.finished1{
  color:red;
}
p{
  width:20%;
  height:40px;
  margin:0;
  paddiing:0;
}
</style>
