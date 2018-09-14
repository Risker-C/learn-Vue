<template>
  <div id="box">
    <button @click="add">+</button>
    <strong>{{count}}</strong>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    methods:{
      add(){
        this.$store.commit('ADD_COUNT')
      },
      reduce(){
        this.$store.commit('REDUCE_COUNT')
      }
    },
    computed:{
      ...mapState(['count'])
    }
  }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: row;
    height: 50px;
  }
  button{
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    border-radius: 50%;
  }
  strong{
    height: 50px;
    font-size: 30px;
    text-align: center;
  }
</style>