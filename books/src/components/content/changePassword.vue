<template>
<div class="changepsw">
    <main-top-bar classify='修改密码'></main-top-bar>
     <div class="formBox">
        <table cellspacing='15'>
            <tr>
                <td width='40'>旧密码:</td>
                <td><input type='text' class="oldPass" placeholder="请输入旧密码" name="oldpass" v-model="oldPassword" @keyup="oldPass"></td>
                  <td><span v-show="!oldPassFormat">密码须为5-16位</span></td>
            </tr>
            <tr>
               <td width='40'>新密码:</td>
               <td> <input type="password" class="psw" placeholder="请输入新密码" v-model="password" name="pass" @keyup="pass"></td>
               <td><span v-show="!pswFormat">密码须为5-16位</span></td>
            </tr>
              <tr>
               <td width='40'>确定密码:</td>
               <td> <input type="password" class="psw" placeholder="确认密码" v-model="checkPassword" name="checkpass" @blur="checkPass"></td>
               <td><span v-show="!checkPswFormat">两次输入密码不相同</span></td>
            </tr>
        </table>
        <div class="subbox"><input type="submit" class="submit" value='确认修改' ref="submit1" @click="changePassword"></div>
       </div>  
    
    
</div>
  
</template>

<script>
import mainTopBar from '../common/mainTopBar.vue';
import { Message } from 'element-ui';
export default {
  naem:'changePsw',
  components: { mainTopBar },
  data(){
    return {
      oldPassFormat:true,
      pswFormat:true,
      checkPswFormat:true,
      oldPassword:'',
      password:'',
      checkPassword:''
    }
  },
 props:{
     url:{
         type:String,
         default(){
             return '/student/changepassword';
         }

     },
 },
  mounted(){
    this.$refs.submit1.disabled=true;
  },
  methods:{
    // 密码格式验证
    oldPass(){
        let check=/^\S{5,16}$/;
        this.oldPassFormat=check.test(this.oldPassword);
        this.btndisabled()

    },
    pass(){
      let check=/^\S{5,16}$/;
      this.pswFormat=check.test(this.password);
      this.btndisabled()
    },
    checkPass(){
      this.checkPswFormat=(this.checkPassword===this.password)
      this.btndisabled()
    },
    // 提交按钮启用检测
    btndisabled(){
        (this.oldPassFormat&&this.pswFormat&&this.checkPswFormat)?this.$refs.submit1.disabled=false:this.$refs.submit1.disabled=true; 
   },
  //  修改密码
   changePassword(){
      if(this.oldPassword==this.password){
         return alert('新密码不能与旧密码相同');  
      }
        this.$axios.post(this.url,{
          oldPassword:this.oldPassword,
          password:this.password
          })
        .then(res=>{
          if(res.data.status==200){          
            localStorage.token=null;
            Message.success(res.data.msg);
            this.$router.push('/login');
          }else{
             Message.error(res.data.msg);
          }
        })
      
     
   }
  }
}
</script>

<style scoped>
.formBox{
  width: 40vw;
  margin: 100px auto;
}
table tr td:nth-child(1){
  width: 80px;
  text-align: left;
}
table tr td{
  height: 35px;
}
table tr input{
  padding-left:10px ;
  height: 35px;
  width: 20vw;
  outline: none;
  border: 1px solid #409EFF;
  border-radius: 3px;
}
table tr td:nth-child(1){
  display: block;
  width: 70px;
}
table tr td:nth-child(3){
  display: block;
  line-height: 35px;
  width: 8vw;
  overflow: hidden;
 white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: red;
}
.subbox{
  margin-top: 20px;
}
.submit{
  padding:7px 12px;
  background-color: #409EFF;
  margin-left: 30%;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
}

</style>