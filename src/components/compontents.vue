<template>
  <div class="hello">
   <h1>{{ msg }}</h1>
   <button v-on:click="doThing">click conpontents </button> 
    <h2>{{msgFromfather}}</h2>
    </ul>
  </div>
</template>
<script>
export default {
  // name: 'Compontenta',
  data () {
    return {
      msg: 'component in group!!!'
    }
  },
  props:['msgFromfather'],
  methods:{
    doThing:function(){
      console.log(this.msgFromfather);
      this.$emit('childsay',this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
