# Webpack4 升级踩坑小记

####                                                                               (yarn+webpack4+react)

 ## First Step - 升级Node.js

因为node4对于es6的支持不是很好，而webpack4及其附属插件使用了es6的语法，所以建议使用>=6.11.5的node版本，webpack官方推荐使用最新的node版本即可。

在这里，选了官网的`node v8.11.4长期维护版`。

## Second Step - 安装webpack

webpack 4+版本还需要安装CLI

```
// 安装webpack最新or指定版本
npm install --save-dev webpack
npm install --save-dev webpack@<version>

// 安装webpack-cli
npm install --save-dev webpack-cli
```

在这里，成功安装`webpack v4.17.1，webpack-cli v3.1.0`。

