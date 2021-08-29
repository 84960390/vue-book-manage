<template>
<div class="login" >
    <h2>图书管理系统</h2>
    <div class="loginMethod">
        <span @click='studentLogin' :class="{loginMethodselect:loginMethods!='学生'}">学生账号登录</span>
        |<span @click='adminLogin' :class="{loginMethodselect:loginMethods!='管理员'}">管理员登录</span>
        </div>
        <main class="loginbox">
            <h4 class="title">{{loginMethods}}账号登录</h4>
              <table width='100%' cellspacing='15'>
                  <tr>
                      <td width='40'>学号:</td>
                      <td><input type='text' class="account" placeholder="请输入账号" name="account" v-model="account" @keyup="checkAccount"></td>
                        <td width='80'><span class="accountRemind" v-show="!accountFormat">学生账号需为10位数字</span></td>
                  </tr>
                  <tr>
                     <td width='40'>密码:</td>
                     <td> <input type="password" class="psw" placeholder="请输入密码" name="password" v-model="password" @keyup="checkPsw"></td>
                     <td width='80'><span class="pswRemind" v-show="!pswFormat">密码须为5-16位</span></td>
                  </tr>
              </table>
              <div class="subbox"><input type="submit" class="submit" value='登录' ref="submit" @click="submit(account,password)"></div>
              <div class='forgetPsw' v-if="loginMethods=='学生'"><span id="resetPsw" @click="resetPsw">忘记密码</span></div>
        </main>
</div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            loginMethods:'学生',
            accountFormat:true,
            pswFormat:true,
            account:'',
            password:'',
            


        }
    },
    mounted(){
        this.$refs.submit.disabled=true;
    },
    methods:{
        // 选择学生登录
        studentLogin(){
            this.loginMethods='学生';
        },
        // 管理员身份登录
        adminLogin(){
            this.loginMethods='管理员';
        },
        // 忘记密码跳转路由
        resetPsw(){
            alert('请联系后台管理');
        },
        // 检查账号是否符合规范
        checkAccount(){
            let checkAccount=/^\d{10}$/;
            let accountTest=checkAccount.test(event.target.value);
            if(!accountTest&&this.loginMethods=='学生'){
                this.$refs.submit.disabled=true;
                 return this.accountFormat=false;               
            }
            this.accountFormat=true;
             this. btndisabled();
             this.checkEnter()
        },
        // 检查密码是否符合规范
        checkPsw(){
              let checkPsw=/^\S{5,16}$/;
            let pswTest=checkPsw.test(event.target.value)
              if(!pswTest){
                this.$refs.submit.disabled=true;
                return this.pswFormat=false;
            }
            this.pswFormat=true;
            this. btndisabled();
            this.checkEnter()
        },
        // 按下回车实现登录
         checkEnter(){
            if(event.keyCode==13){
                this.$refs.submit.click();
            }
        },
        // 提交按钮启用函数
        btndisabled(){
            if(this.accountFormat&&this.pswFormat){
                 this.$refs.submit.disabled=false;
            }
        },
         submit(account,password){
             if(this.loginMethods==='学生'){
                  this.$axios.post('/login/studentlogin',{
                  account,
                  password,
               })
               .then(res=>{
                  if(res.data.msg=='登录成功'){
                      window.localStorage.token=res.data.token;
                      this.$router.replace('/home');
                    }
                  
                  })
                .catch(err=>console.log(err));
             }
             if(this.loginMethods==='管理员'){
                this.$axios.post('/login/adminlogin',{
                account,
                password,
            }).then(res=>{
                if(res.data.msg=='登录成功'){
                    window.localStorage.token=res.data.token;
                    this.$router.replace('/admin');
                }
                
            }).catch(err=>{
                console.log(err)
            });
             }
        }

    }


}
</script>

<style scoped>
h2{
    margin-top: 5vh;
    text-align: center;
    color: yellowgreen;
}
.login{
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    overflow: hidden;
}
.loginMethod{
    margin: 0 10px;
    text-align: right;
    cursor:pointer;
}
.loginbox{
    width: 30vw;
    min-width: 200px;
    max-width: 500px;
    margin:auto;
    margin-top: 20vh;
    padding:30px 20px;
    border-radius:10px;
    background-color: #fff;
}
.title{
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
}
tr td:nth-child(2){
    display: block;
    width: 100%;
}
.account,
.psw{
    width:90%;
    height: 40px;
    outline: none;
    padding-left: 20px;
    border: 1px solid rgb(0, 132, 255);
    border-radius: 8px;
}
.subbox{
    margin-top: 20px;
    text-align: center;
}
.submit{
    text-align: center;
    padding:10px 15px;
    border-radius: 3px;
    outline: none;
    border: none;
    background-color: rgb(0, 162, 255);
    cursor:pointer;
}
.forgetPsw{
    font-size:12px;
    color: #aaa;
    text-align: right;
}
.loginMethodselect{
    color: rgb(24, 197, 240);
}
#resetPsw{
    cursor: pointer;
}
.accountRemind,
.pswRemind{
    font-size: 10px;
    color: red;
}
.accountRemind::before,
.pswRemind::before{
    content: 'x';
    display: inline-block;
    color: #fff;
    margin-right: 2px;
    line-height: 16px;
    text-align: center;
    width: 16px;
    height: 16px;
    background-color: #e00;
    border-radius: 8px;
}

</style>