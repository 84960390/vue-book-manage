import axios from 'axios'
import { Message } from 'element-ui';
let http=axios.create({
    baseURL:'http://127.0.0.1:8000'
})
http.interceptors.request.use(config=>{
    if(window.localStorage.token){
        
        config.headers.Authorization=window.localStorage.token;
    }
    return config
})
http.interceptors.response.use(res=>{
    if(res.data.msg=='登录成功'){
        Message.success('登录成功')
    }else if(res.data.msg=='token已过期'){
        Message.warning('登录已过期，请重新登录');
        return location.pathname='/login';
    }
    return res
},err=>{
    Message.error(err.response.data.msg);
    if(err.response.data.msg=='登录已过期'){
        location.pathname='/login';
    }
    return err
    
})
export default http;