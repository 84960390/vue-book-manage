<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default{
  name:'app',
  data(){
    return {

    }

  },

}

</script>

<style>
  *{
    margin:0;
    padding:0
  }
  a{
    text-decoration: none;
  }
  body{
    font-size:16px;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

  }

</style>
