<template>
    <div>
      <h1>首页</h1>
      <button @click="getJsonp">axios获取jsonp</button>
      <button @click="getCors">简单请求get</button>
      <button @click="postCors">复杂请求post</button>
      <button @click="testCors">测试插件</button>
      <button @click="testCors2">测试插件复杂请求</button>
    </div>
</template>

<script>
    let axiosJsonp = require('axios-jsonp')
    export default {
        name: "home",
        methods: {
            getJsonp(){
                this.$axios({
                    url:'http://localhost:3000/jsonp',
                    adapter:axiosJsonp
                }).then((res) => {
                    console.log(res)
                })
            },
            getCors(){
                this.$axios.get('http://localhost:3000/getCors').then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                })
            },
            postCors () {
                this.$axios.post('http://localhost:3000/postCors', {
                    name:'abc'
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            },
            testCors () {
                this.$axios.get('http://localhost:3000/users/getNewCors').then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            },
            testCors2 () {
                this.$axios.post('http://localhost:3000/users/postNewCors',{
                    username:'chen'
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>
