<template>
  <div class="app">
   <!-- 相对路径可以被webpack解析 -->
    <img src="../../img/logo.png">
   <!-- 静态资源 不被webpack解析 -->
    <img src="/static/img/logo.png">
    <div class="img1"></div>
    <div class="img2"></div>
    <hello></hello>
    <footer>
      <span>copy right @ zjk</span>
    </footer>
  </div>
</template>

<script>
  import 'static/css/reset.css';
  import Hello from 'components/Hello/Hello'

  export default {
    name: 'Index',
    components: {
      Hello
    }
  }
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .img1{
    background: url(../../img/logo.png) no-repeat;
    background-size: contain;
    display: inline-block;
    width: 200px;
    height: 200px;
  }
</style>
