<template>
<div class="myinfo">
    <main-top-bar classify="个人信息"></main-top-bar>
    <div class="info">
        <table cellspacing='60'>
          <tr>
            <td>姓名:</td>
          <td>{{$store.state.studentinfo.studentname}}</td>
          </tr>
          <tr>
            <td>班级:</td>
            <td>{{$store.state.studentinfo.class}}</td>
          </tr>

          <tr>
            <td>学号:</td>
            <td>{{$store.state.studentinfo.account}}</td>
          </tr>  
          <tr>
            <td>入学年份:</td>
            <td>{{$store.state.studentinfo.schooldate | formatDate}}</td>
          </tr>                 
          <tr>
            <td>借阅历史:</td>
            <td>{{$store.state.studentinfo.allLendNum}}</td>
          </tr>    
           <tr>
            <td>剩余应还:</td>
            <td>{{$store.state.studentinfo.needreturn}}</td>
          </tr>      
        </table>
    </div>
</div>
  
</template>

<script>
import mainTopBar from '../../components/common/mainTopBar.vue';
export default {
   name:'myinfo',
  components: { mainTopBar },
  filters:{
        //日期处理函数
        formatDate(date){
            date=parseInt(date);
            let time=new Date(date);
            let y=time.getFullYear();
            let m=time.getMonth()+1;
            return y+'年'+m+'月'
        }
  }
}
</script>

<style scoped>
.myinfo{
  height: 100%;
}
.info{
  box-sizing: border-box;
  padding:50px 0 0 50px ;
  width: 100%;
  height: calc(100% - 60px);
}

</style>