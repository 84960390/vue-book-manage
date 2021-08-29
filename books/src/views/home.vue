<template>
  <div class="home">
      <el-container>
  <el-header height='80px'><nav-bar></nav-bar></el-header>
  <el-container>
    <el-aside width="200px"><home-option></home-option></el-aside>
    <el-main><main-box></main-box></el-main>
  </el-container>
</el-container>
       
  </div>
</template>

<script>
import navBar from '../components/common/navbar.vue';
import homeOption from './homeChild/homeoption.vue';
import mainBox from '../components/common/mainBox.vue';
export default {
    name:'home',
    data(){
        return {
            user:'李明'
        }
    },
    components:{
        navBar,
        homeOption,
        mainBox,
    },
    created(){
        this.getUserInformation();
    },
    methods:{
        getUserInformation(){
            this.$axios.get('/student/studentinfo')
            .then(res=>{
                this.$store.commit('getStudentName',res.data.data);
            })
            .catch(err=>console.log(err.response));
        },
        checKAdminToken(){
            this.$axios.get('/checktoken')
            .then(res=>{
                if(res.data.data.user!=='student'){
                    window.localStorage.token='';
                    this.$router.replace('/login');
                }
            })
            .catch(err=>console.log(err))
    }
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