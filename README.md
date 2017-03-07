# webpack-jQuery-cli
基于webpack的jQuery脚手架，快速进行移动端的jQuery页面开发。

## 运行效果

## 技术栈

* jQuery

![image](./jQuery.jpg)

## 运行效果

![image](./show.png)

## 项目结构

```
├── .eslintrc
├── .gitignore
├── package.json
├── app.js
├── webpack.config.js
├── LICENSE
├── src
│   ├── main.js
│   ├── normalize.css
│   ├── style.css
│   ├── lib
│   │   └── images
│   │       └── image.jpg
│   └── component
│       ├── Header
│       │    ├── Header.html
│       │    ├── index.js
│       │    └── style.css
│   	├─── Main
│   	│    ├── Main.html
│   	│    ├── index.js
│   	│    └── style.css
│   	└─── Footer
│   	     ├── Footer.html
│   	     ├── index.js
│   	     └── style.css
└── public
    ├── index.html
    └── bundle.js
```

## 用法

### `git clone https://github.com/xingbofeng/webpack-jQuery-cli.git`

下载本项目

### `npm start`

在开发环境运行项目，启动成功后，在浏览器打开http://localhost:2017可以访问。
当你修改项目中的文件并保存后，应用进程会重新加载，如果有错误会在终端显示。

### `npm run dist`

运行打包程序，将项目打包为静态资源文件。

## 代码检查

集成`eslint`代码风格检查工具，可在根目录下的[.eslintrc]查看具体配置项目。

## LICENSE
[MIT](LICENSE)