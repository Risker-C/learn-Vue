<template>
  <div>
    <h1>
      小计：{{total}}
    </h1>
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
    computed:{
      total(){
        return this.$props.count * this.$props.price
      }
    }
  }
</script>

<style scoped>

</style>