<template>
  <div class="container">
    <div class="header">
      <h1>我是顶部</h1>
    </div>
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{name: 'home1'}">首页</router-link></li>
        <li>
          <router-link :to="{name:'about1',params:{id:'我是参数'}}">详情页</router-link>
        </li>
        <li>
          <router-link :to="{name:'login1'}">登陆页面</router-link>
        </li>
        <li>
          <router-link :to="{name:'noVuex'}">未使用vuex实例页面</router-link>
        </li>
        <li>
          <router-link :to="{name:'vuex'}">vuex实例页面</router-link>
        </li>
        <li>
          <router-link :to="{name:'brother'}">中央事件总线</router-link>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang ='scss'>
  $width:200px;
  .header{
    text-align: center;
    padding-left: $width;
    background-color: #0ff;
  }
  .nav{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    background-color: rgb(27, 15, 61);
    z-index: 998;
  }
  .main-content{
    padding-left: 200px;
    text-align: center;
    margin-top: 20px;
  }
  .nav{
    li{
      line-height: 50px;
      height: 50px;
      text-align: center;
      width: 200px;
      list-style-type: none;
    }
    a{
      color: #fff;
      font-weight: bolder;
      text-decoration: none;
      tab-size: 16px;
    }
  }
</style>