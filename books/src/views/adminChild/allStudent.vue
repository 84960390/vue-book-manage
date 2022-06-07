<template>
  <div class="allStudent">
    <div class="tableBox">
      <el-table
        :data="tableData.filter(data => !search || data.studentname.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%" max-height='880px'>
        <el-table-column label="学号" prop="account">
        </el-table-column>
        <el-table-column label="姓名" prop="studentname">
        </el-table-column>
        <el-table-column label="性别" prop="gender">
        </el-table-column>
        <el-table-column label="班级" prop="class">
        </el-table-column>
        <el-table-column label="总借阅" prop="lended">
        </el-table-column>
        <el-table-column align="right">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入姓名进行搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="editStudentInfo(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="open(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="修改用户信息" :visible.sync="editDialogVisible" width="40%" @close="editformClosed">
        <!-- 表单 -->
        <el-form ref="editformRef" :model="editform">
          <el-form-item label="学号">
            <el-input v-model="editform.account"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="editform.studentname"></el-input>
          </el-form-item>
          <el-form-item label="班级">
            <el-input v-model="editform.class"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  data() {
    return {
      tableData: [],
      search: '',
      // 需要更改用户数据的表单数据
      editform: {
        id: '',
        studentname: '',
        class: '',
        account: ""
      },
      //进入编辑页面时，对该学生的信息进行深克隆，
      oldInfo:{},
      // 正在编辑的学生的下标
      selectIndex:0,
      // 控制更改用户数据的对话框的显示和隐藏
      editDialogVisible: false,
    }
  },
  methods: {
    deepClone(data){
      if(typeof data!=='object') return data;
      let res;
      if(Array.isArray(data)){
        res=[];
        for(let i=0;i<data.length;i++){
          res.push(this.deepClone(data[i]))
        }
      }else{
        res={};
        for(let k in data){
          res[k]=this.deepClone(data[k])
        }
      }
      return res;
    },
    open(index, row) {
      this.$confirm('此操作将永久删除该用户,且该用户借阅的所有书籍都将变为已归还状态,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteStudents(index, row)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    getStudents() {
      this.$axios.get('/student/getallstudent')
        .then(res => {
          const students = res.data.data.map(item => {
            if (item.lendbook) {
              let booksid = item.lendbook.split(',');
              item.lended = booksid.length;
            } else {
              item.lended = 0
            }
            return item
          });
          this.tableData = students;
        })
        .catch(err => console.log(err))
    },
    deleteStudents(index, row) {
      this.$axios.get('/admin/deletestudent', { params: { userid: row.id } })
        .then(res => {
          Message.success(res.data.msg);
          this.tableData.splice(index, 1)
        })
        .catch(err => console.log(err))
    },
    editStudentInfo(index) {
      this.selectIndex=index;
      this.editDialogVisible = true;
      this.editform = this.tableData[index];
      this.oldInfo=this.deepClone(this.tableData[index]);
    },
    editformClosed(){
      this.tableData.splice(this.selectIndex,1,this.oldInfo); //取消修改时，将修改之前的信息赋值给该学生，减少请求次数；
    },
    editUserInfo() {
      let regular=/^\d{10,10}$/;
      if(!regular.test(this.editform.account)) return Message.warning('学号需为10位数字');
      const data = {
        id: this.editform.id,
        studentname: this.editform.studentname,
        class: this.editform.class,
        account: this.editform.account
      };
      this.$axios
        .post('/student/changeStudentInfo', data)
        .then((res) => {
          if (!res.data) return;
          Message.success(res.data.msg);
          this.getStudents();
        })
        .catch((err) =>{
          //修改失败时，将修改之前得信息赋值给该学生，减少请求次数；
           this.tableData.splice(this.selectIndex,1,this.oldInfo);
          //  Message.error('修改失败');

        }) 
        .finally(() => {
          this.editDialogVisible = false;
        })
    }
  },
  activated() {
    this.getStudents();
  }
}
</script>

<style scoped>
</style>