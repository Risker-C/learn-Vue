<template>
  <div>
    <h1>小计：{{this.$store.getters.totalPrice}}</h1>
  </div>
</template>

<script>
  export default {
    computed:{
      total(){
        return this.$store.state.count * this.$store.state.price
      }
    }
  }
</script>

<style scoped>

</style>