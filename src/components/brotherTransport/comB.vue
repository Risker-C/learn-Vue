<template>
  <div>
    <h2>组件B,接收组件A的值</h2>
    <h3>{{msg}}</h3>
    <button @click="getText">点击接收</button>
    <h4>需要先点击,才会监听接收事件,此时再次点击发送,即可接收到:{{msg2}}</h4>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:'',
        msg2:'',
      }
    },
    created() {
      this.$bus.$on('sendText', (context) => {
        this.msg = context
      })
    },
    methods:{
      getText(){
        this.$bus.$on('sendText', (context) => {
          this.msg2 = context
        })
      }
    }
  }
</script>

<style scoped>

</style>