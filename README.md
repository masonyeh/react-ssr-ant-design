# React SSR Ant Design
  一个基于React、Node.js基础框架，支持SSR渲染 同构、Redux、Router等功能,使用第三方组件包 Ant Design;

### 使用技术
    1.React^15.3.1      UI框架
    2.react-router^3.0  路由控制
    3.SSR               服务端渲染
    4.Redux^3.6         跨页面数据传输共享
    5.Node.js Koa^2.0   Server
    6.Sass4.1.1         预编译
    7.npm               依赖包管理
    8.Webpack^1.13.1    打包工具
    9.Eslint^3.19.0     代码检测
    10.开发环境Hot加载    Webpack-Hot-Middleware
    11.PM2^2.2.2        兼容
    12.Ant Design^3.4.2 组件包


### 环境版本
    1.npm@5.3.0
    2.Node@v8.6.0

### 代码规范
    JSX代码规范，查看根目录下“jsx.md”
    CSS代码规范，查看根目录下“css.md”
    * 注意：只编写部分，规范随时迭代开发、Code Review再做相应的调整。

### 要点  
    1.服务端渲染 Redux state共享，同构。
    2.Fetch 使用 isomorphic-fetch 同构Fetch。
    3.Webpack
        (1).按需加载
        (2).依赖包依赖引用绑定
        (3).postcss
    4.全使用ES6语法开发。

### 命令      

### 使用步骤
    git clone https://github.com/masonyeh/react-ssr-ant-design.git
    cd ./react-ssr-ant-design 
    npm install
    npm run dev

#### SSR编译        
    * npm run kill        杀掉8000端口      
    * npm run dev         开发环境状态        
    * npm run build       部署环境编译        
    * npm run clean       清除部署环境已编译文件  
    * npm run lint -- ./path/xx.js  Eslint 检测某个文件
    * npm run lint -- ./path/xx.js  --fix 修复代码非规范模块
    * npm run start       部署环境启动状态  
    * npm run pm2-start   PM2启动node服务  
    * npm run pm2         PM2监控  


    运行中时，按ctrl+c 退出服务，端口关闭；
              ctrl+x 退出服务，端口不关闭；

#### 开发、部署
    >环境分为 开发环境与部署环境。

    开发环境
      (1).使用:koa-webpack-dev-middleware内存中编译，不输出文件。
      (2).npm run dev

    部署环境
      (1).打包压缩
      (2).输出到dist/client、dist/server、dist/views
      (3).npm run start
