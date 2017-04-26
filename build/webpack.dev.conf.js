var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

    // 入口页面
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // })
  ]
})

var pages = utils.getEntry(['./src/views/*.vue','./src/views/**/*.vue','./src/views/*.html','./src/views/**/*.html']);
for (var pathname in pages) {
  if(pathname == 'layout'){
    continue;
  }
  var inject = false;
  var tpHtml = pages[pathname]; 
  if(tpHtml.lastIndexOf('.html') === -1){
    inject = true;
    tpHtml = 'src/views/layout.html';
  }
  // 配置生成的html文件，定义路径等
  var conf = {
    favicon:'favicon.ico',
    filename: pathname + '.html',
    template: tpHtml,//pages[pathname],   // 模板路径
    inject: inject,              // js插入位置
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  };

  if (pathname in module.exports.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }

  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}