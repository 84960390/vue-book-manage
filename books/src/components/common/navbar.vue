<template>
  <div class="navbar">
    <header class="nav">
        <div class="logo">
            <img src="~assets/logo/logo.png" alt="" class="logoimg">
            <span>图书管理系统<i class="el-icon-reading"></i></span>
            
        </div>
        <div class="user">欢迎你&nbsp;&nbsp;{{$store.state.studentinfo.studentname}},
            <span class="exit" @click="loginExit">退出登录</span>
        </div>
    </header>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
    name:'navbar',
    data(){
        return {
            user:'',
        }
    },
    methods:{
        loginExit(){
            localStorage.token=null;
             Message.success('退出登录成功')
            this.$router.push('/login');
        }
    }

}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100vw;
    height: 80px;
    line-height: 80px;
    background-color: #07c4a8;
    padding: 0 10px;
    color: #fff;
}
.logo{
    display: flex;
    overflow: hidden;
    font-size: 23px;
    font-weight: 500;
    height: 100%;
    align-items: center;
}
.user{
    height: 100%;
    font-size: 16px;
}
.exit{
    cursor: pointer;
    font-size: 13px;
    color: rgb(68, 83, 19);
}
.logoimg{
    height: 70%;
    
}
</style>