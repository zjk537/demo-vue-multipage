<template>
  <div class="app">
    <img src="../../img/logo.png">
    <div>详情内容222222</div>
  </div>
</template>

<script>
  import 'static/css/reset.css';
  import Hello from 'components/Hello/Hello'

  export default {
    name: 'Detail',
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
</style>
