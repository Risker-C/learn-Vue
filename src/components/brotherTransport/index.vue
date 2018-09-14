<template>
  <div>
    <h1>中央事件总线实现兄弟组件传值</h1>
    <comA></comA>
    <comB></comB>
  </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
  export default {
    components: {
      comA,
      comB
    }
  }
</script>

<style scoped>

</style>