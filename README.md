# React SSR Ant Design

### 使用技术
    1.React UI框架
    2.react-router路由控制
    3.SSR 服务端渲染
    4.Redux 跨页面数据传输共享
    5.Node.js Koa
    6.Sass 预编译
    7.npm
    8.webpack
    9.Eslint 代码检测
    10.开发环境Hot加载
    11.pm2兼容


### 环境版本
    1.npm@5.3.0
    2.node@v8.6.0

### 代码规范
    jsx代码规范，查看根目录下“jsx.md”
    css代码规范，查看根目录下“css.md”
    * 注意：只编写部分，规范随时迭代开发、code review再做相应的调整。

### 要点  
    1.服务端渲染 Redux state共享，同构。
    2.fetch 使用 isomorphic-fetch 同构fetch。
    3.webpack
        (1).按需加载
        (2).依赖包依赖引用绑定
        (3).postcss
    4.全使用ES6语法开发。

### 命令      

### 安装步骤    
    根目录下 运行 npm install 安装依赖包

#### SSR编译        
    * npm run kill            ssr-杀掉8000端口      
    * npm run dev         ssr-开发环境状态        
    * npm run build       ssr-部署环境编译        
    * npm run clean       ssr-清除部署环境已编译文件  
    * npm run lint -- ./path/xx.js  eslint 检测某个文件
    * npm run lint -- ./path/xx.js  --fix 修复代码非规范模块
    * npm run start       ssr-部署环境启动状态  
    * npm run pm2-start   ssr-PM2启动node服务  
    * npm run pm2         ssr-PM2监控  

###Gulp
    * gulp      默认执行gulp dev；
    * gulp dev  开发模式下，支持HRM、代理http,https获取联调数据等操作；
    * gulp mock mock模式下，可代理读取swagger mock数据等;
    * gulp pro  pro模式下编译新版本上线;

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
