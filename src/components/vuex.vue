<template>
  <div>
    <h1>我是Vuex页面</h1>
    <comC></comC>
    <comD></comD>
    <h1>单价：{{this.$store.state.price}}</h1>
    <input type="text" v-model="count">
    <button @click="CHANGE_COUNT(count)">
      改变
    </button>
    <button @click="changeAsync">
      异步操作
    </button>
  </div>
</template>

<script>
import comC from './comC'
import comD from './comD'
import {mapMutations} from 'vuex'
  export default {
    data(){
      return({
        count:0
      })
    },
    components:{
      comC,
      comD
    },
    methods:{
      ...mapMutations(['CHANGE_COUNT']),
      // change(){
      //   this.$store.commit('CHANGE_COUNT',this.count)
      // }
      changeAsync(){
        // setTimeout(() => {
        //   this.CHANGE_COUNT(this.count)
        // } ,1000)
        this.$store.dispatch('handleAsyncAction',888)
      }
    }
  }
</script>

<style scoped>

</style>