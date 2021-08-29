<template>
  <div class="bookSearch">
        <main-top-bar classify='图书搜索'></main-top-bar>
        <div class="searchBox">
                <input type='text' class="search" v-model="input" placeholder="请输入图书名进行查询" @keyup="checkEnter">
                <el-button type="primary" icon="el-icon-search" @click="bookSearch(input)" ref="searchBtn">搜索</el-button>
        </div>
        <div class="bookBox">
             <div class="booksItem" v-for="(item,index) in searchResult" :key="item.id" :class='{bdline:index%2===1}'>
                <div id="boookIndex">序号：{{index+1}}</div>
                <div class="bookPic"><img :src="item.picname" alt=""></div>
                 <div class="bookInfo">
                     <div id="bookName">书名：{{item.bookname}}</div>
                     <div id="author">编者:{{item.author}}</div>
                     <div id="company"> 出版社：{{item.company}}</div>
                     <div id="bookNum">图书编号：{{item.booknumber}}</div>
                 </div>
                 <div class="price">价格：￥{{item.price}}</div>
              <div class="bookStatus">
                   <div id="num">馆藏数量:{{item.sum}}本</div>
                   <div id="isLend">剩余可借:{{item.remain}}本</div>
              </div>
            </div>           
        </div>
  </div>
</template>

<script>
import mainTopBar from '../../components/common/mainTopBar.vue';
import { Message } from 'element-ui';
export default {
    name:'bookSerarch',
    data(){
         return {
             input:'',
             searchResult:[],
        }
    },
    components:{
        mainTopBar,
    },
    methods:{
        // 搜索书籍
        bookSearch(bookname){          
            this.$axios.get('/booksearch',{params:{bookname,}}).then(res=>{
                this.searchResult=res.data.data;
                if(res.data.msg=='暂无该数据'){
                    Message.warning('暂无该书');
                }
            });
        },
        checkEnter(){
            if(event.keyCode==13){
                this.$refs.searchBtn.$el.click();
            }
        }
    }

}
</script>

<style scoped>
.bookBox{
    height:calc(100% - 60px - 90px);
    background-color: #fff;
    overflow: auto;
}
.bookSearch{
    height: 100%;
}
.searchBox{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
}
.search{
    padding-left: 20px;
    flex: 1;
    outline: none;
    border: 1px solid #409EFF;
    border-radius: 3px;
    font-size: 14px;
    height: 100%;
    color: #606266;
}
.booksItem{
    display: flex;
    justify-content:flex-start;
    padding: 0 10px;
    height: 100px;
    border-bottom: 2px solid #ccc;
    overflow: hidden;
    /* background-image: linear-gradient(-20deg, #ff8037d3 0%, #ff8c8c 70%); */
}
.bdline{
    background-color: #C0C4CC;
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
.bookStatus{
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100%;
    justify-content: center;

}
.bookStatus>div{
    margin:10px 0;
}
.price{
    line-height: 100px;
    margin-right: 30px;
}

</style>