<template>
<div class="addBook">
    <div class="formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
           <el-form-item label="书名" prop="bookname">
             <el-input v-model="ruleForm.bookname"></el-input>
           </el-form-item>
           <el-form-item label="作者" prop="author">
             <el-input v-model="ruleForm.author"></el-input>
           </el-form-item>
           <el-form-item label="出版社" prop="company">
             <el-input v-model="ruleForm.company"></el-input>
           </el-form-item>
           <el-form-item label="图书编号" prop="bookid">
             <el-input v-model="ruleForm.bookid"></el-input>
           </el-form-item>
            <el-form-item label="价格" prop="price">
             <el-input v-model="ruleForm.price"></el-input>
           </el-form-item>
             <input type="file" accept="image/*" ref="file">
           <el-form-item>
             <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
           </el-form-item>
         </el-form>
    </div>

</div>
  
</template>

<script>
import { Message } from 'element-ui';
// import qs from 'qs'
export default {
    data() {
      return {
        ruleForm: {
          bookname: '',
          author:'',
          company: '',
          bookid:'',
          price:'',
          booknumber:''

        },
        rules: {
          bookname: [
            { required: true, message: '请输入书名', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' }
          ],
          company: [
            { required: true, message: '请输入出版社', trigger: 'blur' }
          ],
          bookid: [
            { required: true,pattern:/^\S{1,8}\-\d{1,5}$/, message: '图书编号须为xx-xx', trigger: 'blur' }
          ],
          price: [
            {required: true, pattern:/^\d{1,6}\.\d{2}$/, message: '价格须为x.xx', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$refs.file.files[0]==undefined ? Message.warning('还未上传图片'): this.sendBookData();           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 提交图书数据
      sendBookData(){
        let formData1=new FormData();
        formData1.append('data',JSON.stringify(this.ruleForm));
        formData1.append('picname',this.$refs.file.files[0]);
        this.$axios.post('/admin/addbooks',formData1,{headers:{'Content-Type':'multipart/form-data'}})
        .then(res=>Message.success(res.data.msg))
        .catch(err=>console.log(err))
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