import Vue from 'vue';
import VueRouter from 'vue-router';
// 用户路由
const Home=()=>import('../views/home.vue');
const login=()=>import('../views/login.vue');
const bookSearch=()=>import('../components/content/bookSearch.vue');
const myLend=()=>import('../views/homeChild/mylend.vue');
const myInfo=()=>import('../views/homeChild/myInfo.vue');
const changePsw=()=>import('../views/homeChild/studentChangePsw.vue');

// 管理员路由
const admin=()=>import('../views/admin.vue');
const lendBook=()=>import('../views/adminChild/lendBook.vue');
const addBook=()=>import('../views/adminChild/addBook.vue');
const addStudent=()=>import('../views/adminChild/addStudent.vue');
const allStudent=()=>import('../views/adminChild/allStudent.vue');
const bookManage=()=>import('../views/adminChild/bookManage.vue');
const returnBook=()=>import('../views/adminChild/returnBook.vue');
const changePassWord=()=>import('../views/adminChild/adminChangePassWord.vue')
Vue.use(VueRouter);

// 解决重复跳转路由报错问题
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};


const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'mylend'
      },
      {
        path:'mylend',
        component:myLend
      },
      {
        path:'booksearch',
        component:bookSearch
      },{
        path:'myInfo',
        component:myInfo
      },{
        path:'changepsw',
        component:changePsw
      }
    ]
  },
  {
    path: '/admin',
    component:admin,
    children:[
      {
        path:'',
        redirect:'lendbook'
      },
      {
        path:'booksearch',
        component:bookSearch
      },
      {
        path:'lendbook',
        component:lendBook
      },
      {
        path:'addbook',
        component:addBook
      },
      {
        path:'addstudent',
        component:addStudent
      },
      {
        path:'allstudent',
        component:allStudent
      },
      {
        path:'bookmanage',
        component:bookManage
      },
      {
        path:'returnbook',
        component:returnBook
      },
      {
        path:'changepassword',
        component:changePassWord
      }
      
    ]
  },{
    path:'/login',
    component:login
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
