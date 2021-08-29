<template>
  <div class="homeOption">
    <div class="classify">
        <div v-for="item  in className" :key="item.url" @click="classifyChange(item.url)" :class="{selected:$route.path=='/home'+item.url}">
            <i :class="item.icon"></i>
            <span class="option"> {{item.option}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'homeOption',
    data(){
        return {
            className:[{
                option:'我的借阅',
                url:'/mylend',
                icon:'el-icon-reading'
            },{
                option:'图书查询',
                url:'/booksearch',
                icon:'el-icon-search'
            },
            {
                option:'个人信息',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
            {
                option:'修改密码',
                url:'/changepsw',
                icon:'el-icon-s-tools',
            }]
        }
    },
    methods:{
        // 点击跳转路由
        classifyChange(url){
            this.$router.replace('/home'+url);
        }
    }
}
</script>

<style scoped>
.classify{
    height: calc(100vh - 50px);
    line-height: 40px;
    background-color: #324157;
    justify-content: space-between;
    color: #E4E7ED;
    padding-top:30px;
    overflow: hidden;
}
.classify>div{
    text-align: left;
    box-sizing: border-box;
    padding-left: 30px;
    margin-bottom:20px;
}
.classify span{
    padding: 5px;
}
.selected{
    color: #46A3FF;
    
}
.option{
    cursor: pointer;
}

</style>