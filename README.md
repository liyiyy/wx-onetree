# wx-onetree
### 现状:
微信小程序+vue+koa2+mongoose 搭建的前后台demo，尚不完善，只有小部分接口实现，先留存下

前台:微信小程序 代码在oneTreeFont文件夹下

后台：vue + koa2 + mongoose 代码在oneTreeAdmin下

项目本地运行：
环境：安装好mongodb ,node > v7.6

### 运行：  
在oneTreeAdmin中执行```npm install```，然后进入service目录下 ```npm install```  将依赖的资源下载下来  

1、开启数据库 系统中cmd中运行 ```mongod``` ，然后运行 ```mongo```

2、开启后台管理 oneTreeAdmin目录运行 ```npm run dev``` 端口：1177

3、开启接口服务 在oneTreeAdmin/service 运行 ```node index.js``` 端口：1122





