# vue + webpack 多页面应用

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```
#### 针对在webstorm里面不能hot reload的问题大家可以按如下步骤设置一下就行：
> Please try turning 'Safe write' option ( Settings | Appearance & Behavior | System Settings | Use "safe write" (save changes to temporary file first)) off

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 插件介绍
1、[docs for vue 2](https://cn.vuejs.org/v2/api/#Vue-set)

2、[vue 论坛](https://forum.vuejs.org/)

3、mint-ui  弹框 tost loading 等 详情参见 
  [docs for mint-ui](http://mint-ui.github.io/docs)

4、jsencrypt rsa 加密插件

``` bash
# rsa加密
npm install jsencrypt --save-dev

# 使用
var jsencrypt = require('jsencrypt');
var plainText = 'xxxxx';
var encryptPK = 'XXXXXXXXX';
var encrypt = new jsencrypt.JSEncrypt();
encrypt.setPublicKey(encryptPK);
var encrypted = encrypt.encrypt(plainText);

# md5 加密
npm install md5 --save-dev

# 使用
var md5 = require('md5');
var md5Str = md5('xxxxx');
```

5、[docs for vuex](http://vuex.vuejs.org/zh-cn/intro.html)

6、[docs for vue-router](http://router.vuejs.org/zh-cn/)

7、vue-resource for ajax request



### layout 模板使用
1、HtmlWebpackPlugin 参数 filename 与 entry key 对应时，页面引入对应entry的js

``` bash
new HtmlWebpackPlugin({
	filename:'views/index.html',
	template:'xxxxx.html',
	inject:true
})

module.exports.entry = {
	'views/index': './src/js/index/index.js',
	'views/detail': './src/js/detail/detail.js'
}

# 这样webpack打包后 index.html 加载了index.js, 没有加载detail.js
```

2、js 中使用模板

``` bash
import Vue from 'vue'
import Index from 'src/views/index/index'

new Vue({
  el: '#app',
  template: '<Index/>', // 名称要与组件文件名相同，不区分大小写
  components: { Index }
})

```