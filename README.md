# webpack-jQuery-cli
基于webpack的jQuery脚手架，快速进行移动端的jQuery页面开发。

## 技术栈

* jQuery

![image](./jQuery.jpg)

## 运行效果

![image](./show.png)

## 项目结构

```
├── .eslintrc :eslint代码检查规范
├── .gitignore
├── package.json
├── app.js :项目入口文件
├── webpack.config.js :webpack 相关配置文件
├── LICENSE :项目LICENSE
├── src
│   ├── main.js :组件分发入口文件
│   ├── routes.js :路由配置文件
│   ├── normalize.css :css reset
│   ├── style.css :全局样式文件
│   ├── lib :存放静态资源文件
│   │   └── images :存放
│   │       └── image.jpg
│   └── components :存放项目组件，集成jQuery
│       ├── Header
│       │    ├── Header.html
│       │    ├── index.js
│       │    └── style.css
│   	  ├─── Main
│   	  │    ├── Main.html
│   	  │    ├── index.js
│   	  │    └── style.css
│   	  └─── Footer
│   	      ├── Footer.html
│   	      ├── index.js
│   	      └── style.css
└── public :打包后的项目代码
    ├── index.html
    └── bundle.js
```

## 用法

### `git clone https://github.com/xingbofeng/webpack-jQuery-cli.git`

下载本项目

### `npm install`

安装依赖

### `npm start`

在开发环境运行项目，启动成功后，在浏览器打开`http://localhost:2017`可以访问。
当你修改项目中的文件并保存后，应用进程会重新加载，如果有错误会在终端显示。

### `npm run dist`

运行打包程序，将项目打包为静态资源文件。

## 代码检查

集成`eslint`代码风格检查工具，可在根目录下的[.eslintrc]查看具体配置项目。

## LICENSE
[MIT](LICENSE)
