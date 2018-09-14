<template>
  <div>
    <h2>组件A,向组件B传值</h2>
    <input type="text" v-model="context">
    <button @click="sendText">发送</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        context:''
      }
    },
    methods:{
      sendText(){
        this.$bus.$emit('sendText',this.context)
      }
    }
  }
</script>

<style scoped>

</style>