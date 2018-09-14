<template>
  <div>
    <h1>登陆页面</h1>
    <div>
      账号：<input type="text" v-model="username">
    </div>
    <div>
      密码：<input type="text" v-model="password">
    </div>
    <br>
    <button @click="login">登陆</button>
    <button @click="getJsonp">获取jsonp的数据</button>
  </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          username:"",
          password:""
        }
      },
      methods:{
        login(){
          // this.$axios.get("http://localhost:3000/api/logintest",{
          //   withCredentials : true//可以带cookie的认证
          // }).then(function(res){
          //   console.log(res);
          // })
          this.$axios.post("/api/login",{
            username: this.username,
            password: this.password
          }).then(function(res){
            console.log(res);
          })
        },
        getJsonp: () => {
          var scriptp = document.createElement('script')
          scriptp.src = 'http://localhost:3000/jsonp?callback=getData'
          document.body.appendChild(scriptp)
        },
        
      }
    }
</script>

<style scoped>

</style>
