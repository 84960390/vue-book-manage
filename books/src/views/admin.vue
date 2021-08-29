<template>
  <div class="admin">
      <el-container>
          <el-header height='80px'><nav-bar></nav-bar></el-header>
           <el-container>
              <el-aside width="200px"><admin-option></admin-option></el-aside>
              <el-main><main-box></main-box></el-main>
           </el-container>
      </el-container>
  </div>
</template>

<script>
import navBar from '../components/common/navbar.vue';
import adminOption from './adminChild/adminOption.vue';
import mainBox from '../components/common/mainBox.vue';
export default {
  name:'admin',
  components:{
    navBar,
    adminOption,
    mainBox
  },
  methods:{
    checKAdminToken(){
      this.$axios.get('/checktoken')
      .then(res=>{
          if(res.data.data.user!=='admin'){
              window.localStorage.token='';
              this.$router.replace('/login');
          }
      })
      .catch(err=>console.log(err))
    }
  }
  ,created(){
    this.checKAdminToken()
  }

}
</script>

<style scoped>
.home{
    width: 100vw;
    height: 100vh;
}
.el-main{
    padding: 0;
    overflow: hidden;
}
.el-header{
    padding: 0;
}

</style>