<template>
  <div class="allStudent">
      <div class="tableBox">
           <el-table
              :data="tableData.filter(data => !search || data.studentname.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
              max-height='880px'>
              <el-table-column
                label="学号"
                prop="account">
              </el-table-column>
              <el-table-column
                label="姓名"
                prop="studentname">
              </el-table-column>
              <el-table-column
                label="性别"
                prop="gender">
              </el-table-column>  
              <el-table-column
                label="班级"
                prop="class">
              </el-table-column>  
              <el-table-column
                label="总借阅"
                prop="lended">
              </el-table-column>  
              <el-table-column
                align="right">
                <template slot="header" >
                  <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入姓名进行搜索"/>
                </template>
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="open(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>        
      </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
 export default {
    data() {
      return {
        tableData: [],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      open(index, row) {
        this.$confirm('此操作将永久删除该用户,且该用户借阅的所有书籍都将变为已归还状态,是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteStudents(index,row)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },      
      getStudents(){
        this.$axios.get('/student/getallstudent')
        .then(res=>{
          const students=res.data.data.map(item=>{
           if(item.lendbook){
              let booksid=item.lendbook.split(',');
              item.lended=booksid.length;
           }else{
              item.lended=0
           }
            return item
          });
          this.tableData=students;
        })
        .catch(err=>console.log(err))
      },
      deleteStudents(index,row){
        this.$axios.get('/admin/deletestudent',{params:{userid:row.id}})
        .then(res=>{
          Message.success(res.data.msg);
          this.tableData.splice(index,1)
        })
        .catch(err=>console.log(err))
      }
    },
    activated(){
        this.getStudents();
    }
  }
</script>

<style scoped>
</style>