<template>
<div class="returnBook">
    <main-top-bar classify="图书归还"></main-top-bar>
    <div class="search">
        <el-input v-model="input" placeholder="请扫描条形码或输入图书编号" @keyup.native="checkEnter"></el-input>
        <el-button type="primary"  @click="returnClick">确认归还</el-button>
    </div>
    <div class="title">
       最近归还
        <span class="clear" @click="clearBooks">清空<i class="el-icon-s-open"></i></span>
    </div>
    <div class="bookBox">
        <book-exhibit :booksInfo="bookData"  :showReturn="true"></book-exhibit>
    </div>

            
</div>
  
</template>

<script>
import { Message } from 'element-ui';
import MainTopBar from '../../components/common/mainTopBar.vue';
import bookExhibit from '../../components/content/bookExhibit.vue';
export default {
    data(){
        return {
            input:'',
            bookData:[],
            returnRes:true,

        }
    },
    components:{
        bookExhibit,
        MainTopBar,
    },
    methods:{
        // 还书函数
        returnResult(){
            this.$axios.get('/books/bookreturn',{params:{bookid:this.input}})
            .then(res=>{
                if(res&&(res.data .msg=='还书成功'||res.data.msg=='还书成功，该书已逾期')){                  
                  const books=res.data.data;
                    res.data.msg=='还书成功' ? books.returnRes=true : books.returnRes=false;
                    books.returnRes ? Message.success(res.data.msg):Message.warning(res.data.msg);
                    this.bookData.unshift(books)
                }
            })
        },
        // 清除图书
        clearBooks(){
           this.bookData=[];
        },
        // 点击还书按钮
        returnClick(){
            this.returnResult();
            this.input='';            
        },
        // 检测回车按下
        checkEnter(){
            if(event.keyCode==13) this.returnClick()
        }
    },
}
</script>

<style scoped>
.returnBook{
    width: 100%;
}
.search{
    width: 100%;
    display: flex;
}
.bookBox{
    height: calc(100vh - 300px);
    overflow: auto;
}
.title{
    box-sizing: content-box;
    position: relative;
    padding-left:10px;
    height: 40px;
    background-color: #fff;
    margin-top: 20px;
    line-height: 40px;
    background-color: #67C23A;
}
.clear{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
}
.el-icon-s-open{
    margin-left: 8px;
}
</style>