# product-page

> 学习vue.js试做的一个产品销售单页面应用

## Build Setup

``` bash

# 全局安装vue脚手架
npm install -g vue-cli 

# 创建项目
vue init webpack ProductPage

# 安装vuex
npm install vuex --save

# 安装json-server
npm install json-server --save

# 安装vue-resource
npm install vue-resource

# 安装lodash
npm install lodash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Mark Down

json-server模拟api设置(用POST请求会出错，使用express启动)

``` bash

// build/dev-server.js
var jsonServer = require('json-server')
var apiServer = jsonServer.create()
var apiRouter = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use('/api', apiRouter)
apiServer.listen(port + 1, function () {
  console.log('JSON Server is running')
})

// config/index.js
proxyTable: {
      '/api/': 'http://localhost:8081/'
    },

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
