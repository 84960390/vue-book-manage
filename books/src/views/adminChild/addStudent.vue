<template>
<div class="addStudent">
    <div class="formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
           <el-form-item label="姓名" prop="studentname">
             <el-input v-model="ruleForm.studentname"></el-input>
           </el-form-item>
                 <el-form-item label="性别" prop="gender">
             <el-select v-model="ruleForm.gender" placeholder="请选择性别">
               <el-option label="男" value="男"></el-option>
               <el-option label="女" value="女"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="班级" prop="class">
             <el-input v-model="ruleForm.class"></el-input>
           </el-form-item>
           <el-form-item label="入学时间">
             <el-col :span="11">
               <el-form-item prop="schooldate">
                 <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.schooldate" style="width: 100%;"></el-date-picker>
               </el-form-item>
             </el-col>
           </el-form-item>
           <el-form-item label="学号" prop="account">
             <el-input v-model.number="ruleForm.account" ></el-input>
           </el-form-item>
           <el-form-item label="密码" prop="password">
             <el-input v-model="ruleForm.password"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
           </el-form-item>
         </el-form>
    </div>

</div>
  
</template>

<script>
import { Message } from 'element-ui';
export default {
    data() {
      return {
        ruleForm: {
          studentname: '',
          gender: '男',
          schooldate: Date.now(),
          class:'',
          account:'',
          password:''
        },
        rules: {
          studentname: [
            { required: true, message: '请输入姓名名称', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          schooldate: [
            {required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          account: [
            {required: true,type: 'number',message: '请输入学号',trigger: 'change'},
            {pattern:/^\d{10}$/ ,message: '学号为10位数字', trigger: 'change' }
          ],
          password:[
              {required: true, min: 5, max: 16, message: '密码为5-16位', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/admin/addstudent',{data:this.ruleForm})
            .then(res=>{
              Message.success(res.data.msg);
              this.resetForm('ruleForm');
            })
            .catch(err=>console.log(err))
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
.addStudent{
    position: relative;
}
.formBox{
    margin-top: 80px;
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

}

</style>