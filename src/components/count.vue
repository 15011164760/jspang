<template>
    <div>
        <h2>{{ msg }}</h2> 
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
    </div>
</template>
 
<script>
	import store from '@/Vuex/store.js'
export default {
  name: 'count',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store
}
</script>