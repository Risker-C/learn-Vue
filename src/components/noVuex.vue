<template>
  <div>
    <h1>我是未使用vuex的页面</h1>
    <div id='box'>
      <comA :count='count' :price='price'></comA>
      <comB :count='count' :price='price' @add='add' @reduce='reduce'></comB>
    </div>
    <h1>单价：{{price}}</h1>
  </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
  export default {
    data(){
      return({
        count: 0,
        price: 20
      })
    },
    methods:{
      add(){
        this.count++
      },
      reduce(){
        this.count--
      }
    },
    components:{
      comA,
      comB
    }
  }
</script>

<style scoped>

</style>