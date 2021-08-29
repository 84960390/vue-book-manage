<template>
  <div class="adminOption">
    <el-menu :default-openeds="['1','2','3','4']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>借阅管理</template>
          <el-menu-item index="1-1" @click="$router.replace(address[0])" :class="{'is-active':$route.path==address[0]}">借书</el-menu-item>
          <el-menu-item index="1-2" @click="$router.replace(address[1])" :class="{'is-active':$route.path==address[1]}">还书</el-menu-item>
    </el-submenu>
        <el-submenu index="2">
        <template slot="title"><i class="el-icon-notebook-1"></i>图书管理</template>
          <el-menu-item index="2-1" @click="$router.replace(address[2])" :class="{'is-active':$route.path==address[2]}">添加图书</el-menu-item>
          <el-menu-item index="2-2" @click="$router.replace(address[3])" :class="{'is-active':$route.path==address[3]}">图书搜索</el-menu-item>
          <el-menu-item index="2-3" @click="$router.replace(address[4])" :class="{'is-active':$route.path==address[4]}">图书管理</el-menu-item>
    </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-user"></i>用户管理</template>
          <el-menu-item index="3-1" @click="$router.replace(address[5])" :class="{'is-active':$route.path==address[5]}">添加用户</el-menu-item>
          <el-menu-item index="3-2" @click="$router.replace(address[6])" :class="{'is-active':$route.path==address[6]}">用户管理</el-menu-item>

    </el-submenu>
     <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>账号管理</template>
          <el-menu-item index="4-1" @click="$router.replace(address[7])" >修改密码</el-menu-item>
    </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'adminOption',
    data(){
        return {
            className:[{
                option:'借书',
                url:'/mylend',
                icon:'el-icon-reading'
            },{
                option:'还书',
                url:'/booksearch',
                icon:'el-icon-search'
            },
            {
                option:'图书查询',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
            {
                option:'书籍管理',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
              {
                option:'借阅管理',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
             {
                option:'用户管理',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
            {
                option:'学生信息查询',
                url:'/myinfo',
                icon:'el-icon-user-solid'
            },
            {
                option:'修改密码',
                url:'/changepsw',
                icon:'el-icon-s-tools',
            }],
            address:[
                '/admin/lendbook',
                '/admin/returnbook',
                '/admin/addbook',
                '/admin/booksearch',
                '/admin/bookmanage',
                '/admin/addstudent',
                '/admin/allstudent',
                '/admin/changepassword']
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

</style>