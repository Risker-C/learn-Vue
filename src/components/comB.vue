<template>
  <div class="box">
    <button @click="reduce">-</button>
    <strong>{{count}}</strong>
    <button @click="add">+</button>
  </div>
</template>

<script>
  export default {
    props:{
      count:{
        type:Number
      },
      price:{
        type:Number
      }
    },
    methods:{
      reduce(){
        this.$emit('reduce')
      },
      add(){
        this.$emit('add')
      }
    }
  }
</script>

<style scoped>
  .box{
    text-align: center;
    height: 50px;
  }
  button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 30px
  }
  strong{
    width: 100px;
    height: 50px;
    font-size: 30px;
  }
</style>