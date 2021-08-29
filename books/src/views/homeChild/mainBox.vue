<template>
<div class="mainBox">
   <keep-alive>
       <router-view></router-view>
   </keep-alive>
</div>
  
</template>

<script>
export default {
    name:"mainBox",

}
</script>

<style scoped>
.mainBox{
    box-sizing: border-box;
    border: 20px solid #f0f0f0;
    height: calc(100vh - 80px);
    background-color: #f0f0f0;
}

</style>