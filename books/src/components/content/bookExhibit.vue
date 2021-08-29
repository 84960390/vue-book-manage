<template>
  <div class="bookExhibit">
          <div class="lendBox">
          <div class="booksItem" v-for="(item,index) in booksInfo" :key="index">
            <div id="boookIndex">序号：{{index+1}}</div>
            <div class="bookPic"><img :src="item.picname" alt=""></div>
             <div class="bookInfo">
                 <div id="bookName">书名：{{item.bookname}}</div>
                 <div id="author">编者:{{item.author}}</div>
                 <div id="company"> 出版社：{{item.company}}</div>
                 <div id="bookNum">图书编号：{{item.bookid}}</div>
             </div>
             <div class="price">价格：￥{{item.price}}</div>
              <div class="bookDate" v-if="showDate">
                  <div id="lendDate">借阅日期:{{item.lenddate | formatDate}}</div>
                   <div id="returnDate">应还日期:{{item.returndate | formatDate}}</div>
              </div>   
              <div class="bookDate" v-if="showDate">
                  <div id="lendDate">借阅日期:{{item.lenddate | formatDate}}</div>
                   <div id="returnDate">应还日期:{{item.returndate | formatDate}}</div>
              </div> 
             <div class="bookReturnStatus" v-if="showReturn">
                <div :class="{overTime:!item.returnRes}">{{item.returnRes |status }}</div>
             </div>  
             <div class="state" v-if="showState">
                  <div :class="{overTime:item.status}">{{item.status |lendStatus }}</div>
             </div>
             <div class="delete" v-if="showDeleteBtn">
                 <el-button type="danger" @click="open(item.id,index,item.status,item.picname)">删除</el-button>
             </div>
                                
             <div class="other">
                 <slot></slot>
             </div>
      </div>
     </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
    name:'bookExhibit',
    props:{
        booksInfo:{
            type:Array,
            default(){
                return [];
            }

        },
        showDate:{
            type:Boolean,
            default(){
                return false;
            } 
        },
        showReturn:{
            type:Boolean,
            default(){
                return false;
            } 
        },
        showDeleteBtn:{
            type:Boolean,
            default(){
                return false;
            }
        },
        showState:{
            type:Boolean,
            default(){
                return false;
            }
        }        


    },
    filters:{
        //日期处理函数
        formatDate(date){
            date=parseInt(date);
            let time=new Date(date);
            let y=time.getFullYear();
            let m=time.getMonth()+1;
            let d=time.getDate();
            return y+'/'+m+'/'+d;
        },
        // 归还状态处理函数          
        status(a){
          return  a ? '还书成功':'该书已逾期';
        },
        lendStatus(a){
            return a==0 ? '未借出':'已借出'
        }
    },
    methods:{
        deleteBook(id,index,status,picname){
             return status==1? Message.warning('该书还未归还，请归还后再试'):this.getDelete(id,index,picname);
        },
        getDelete(id,index,picname){
            let fileName=picname.split('/');
            this.$axios.get('/admin/deletebook',{params:{bookid:id,pic:fileName[fileName.length-1]}})
            .then(res=>{
                Message.success(res.data.msg);
                this.$emit('delete-success',index);
            })
            .catch(err=>console.log(err))

        },
        open(id,index,status,picname) {
        this.$confirm('确认删除吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.deleteBook(id,index,status,picname)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }

}
</script>

<style scoped>
.lendBox{
    height:calc(100% - 60px - 30px);
    background-color: #fff;
    overflow: auto;
}
.booksItem{
    display: flex;
    justify-content:flex-start;
    padding: 0 10px;
    height: 100px;
    background-image: linear-gradient(to right, #fddb92 0%, #d1fdff 100%);
    border-bottom: 2px solid #ccc;
    overflow: hidden;
}
#boookIndex{
    line-height: 100px;
    margin-right: 20px;
}
.bookPic{
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 100px;
    margin: 0 20px;
    vertical-align: middle;
}
.bookPic img{
    height: 80%;
    
}
.bookInfo{
    flex: 1;
}
.bookDate{
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
}
.bookReturnStatus{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
    color: #67C23A;
}
.overTime{
    color: #E6A23C;
}
.delete{
    height: 100%;
    line-height: 100px;
}
.state{
    margin-right: 50px;
    line-height: 100px;
    color:#67C23A;
}

.other{
    display: flex;
    height: 100%;
    line-height: 100px;
}
#bookName{
    font-size: 18px;
    font-weight: 700;
}
#author,
#company,
#bookNum{
    font-size: 16px;
    color: rgb(92, 92, 86);
}
.price{
    margin-right: 30px;
    line-height: 100px;
}

</style>