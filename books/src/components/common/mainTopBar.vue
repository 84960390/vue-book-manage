<template>
  <div class="maintop">{{classify}}</div>
</template>

<script>
export default {
    name:'mainTopBar',
    props:{
        classify:{
            type:String,
            default(){
                return '我的借阅'
            }
        }
    }

}
</script>

<style>
.maintop{
    position: sticky;
    top: 20px;
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
  background-image: linear-gradient(to right, #00d2ff , #928dab );
    color: #fff;
    margin-bottom: 20px;

}

</style>