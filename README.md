# vue-book-manage
基于vue+mysql+node+express+elementui的前后端分离图书管理系统
使用步骤:  
本地运行方法  
&ensp;1.新建一个名为books_manage_system的数据库  
&ensp;2.将根目录下books_manage_system.sql文件导入到该数据库中，   
&ensp;3.在node/sql/booksystem.js文件内根据自己的数据库情况进行修改    
&ensp;4.解压文件后,依次在当前文件夹cmd输入    
&ensp;&ensp;cd node    
&ensp;&ensp;npm install    
&ensp;&ensp;nodemon index.js    
&ensp;5.在当前文件夹新建一个cmd，依次输入    
&ensp;&ensp;cd books  
&ensp;&ensp;npm install  
&ensp;&ensp;npm run serve  
&ensp;6.打开提示的网址既可运行，目前只能访问localhost开头的那个网址  
&ensp;7.如需通过ip地址访问，请在vue.config.js文件中修改配置  
打包运行，及线上运行方法：  
&ensp;1.将根目录下books_manage_system.sql文件导入到数据库中    
&ensp;2.在node/sql/booksystem.js文件内根据自己的数据库情况进行修改    
&ensp;3.在books文件夹和node文件夹下分别执行npm install安装插件  
&ensp;4.注释掉books/src/network/request.js文件中的第4行代码  
&ensp;5.在books文件夹下执行npm run build打包前端文件，打包完成后将该目录新增的dist文件夹复制到node文件夹中  
&ensp;6.打包完成后将dist文件夹复制到node文件夹下   
&ensp;7.在node文件夹下执行node index.js  
&ensp;8.之后在处于同一网络中的设备下，输入ip及端口号即可访问页面 eg:192.168.1.133:8000   
展示：    
![image](https://github.com/84960390/vue-book-manage/blob/main/exhibit/1.png)
![image](https://github.com/84960390/vue-book-manage/blob/main/exhibit/2.png)
![image](https://github.com/84960390/vue-book-manage/blob/main/exhibit/3.png)
