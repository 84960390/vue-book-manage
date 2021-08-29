<template>
  <div class="findBook">
      <main-top-bar classify="所有图书"></main-top-bar>
        <div class="searchBox">
             <input type='text' class="search" v-model="input" placeholder="请输入图书名进行查询" @keyup="checkEnter">
             <el-button type="primary" icon="el-icon-search" @click="bookSearch" ref="findBook1">搜索</el-button>
        </div>
        <div class="books">
          <book-exhibit :booksInfo="booksInfo" :showDeleteBtn="true" :showState="true" @delete-success='removeBook'></book-exhibit>
        </div>
  </div>
</template>

<script>
import mainTopBar from '../../components/common/mainTopBar.vue';
import BookExhibit from '../../components/content/bookExhibit.vue';
import {Message} from 'element-ui';
export default {
  data(){
    return {
      input:'',
      booksInfo:[],
      searchResult:[],
      allBooks:[],
    }
  },
  components: { mainTopBar, BookExhibit },
  methods:{
    // 获取所有图书
    getAllBooks(){
      this.$axios.get('/admin/allbooksinfo')
      .then(res=>{
        this.allBooks=res.data.data;
        this.booksInfo=this.allBooks;
      })
      .catch(err=>console.log(err))
    },
    // 删除数据
    removeBook(index){
      this.booksInfo.splice(index,1);
    },
    // 图书搜索
    bookSearch(){
         this.$axios.get('/booksearchNoMerge',{params:{bookname:this.input}}).then(res=>{
          this.searchResult=res.data.data;
          this.booksInfo=this.searchResult;
         if(res.data.msg=='暂无该数据'){
             Message.warning('暂无该书');
         }
     });
    },
    // 检测是否按下回车
    checkEnter(){
      if(event.keyCode==13){
        this.$refs.findBook1.$el.click();
      }
    }

  },
  activated(){
    this.getAllBooks();
  }

}
</script>

<style scoped>
.searchBox{
  display: flex;
  width: 100%;
}
.search{
  padding-left: 20px;
  height: 40px;
  flex: 1;
}
.books{
  margin-top: 30px;
  height: calc(100vh - 280px);
  overflow: auto;
}

</style>