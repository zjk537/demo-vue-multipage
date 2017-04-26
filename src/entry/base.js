import Vue from 'vue'
import VueHttp from 'vue-resource'

//import Vuex from 'vuex'
//import store from './store'

import Mint from 'mint-ui'
import Toast from 'mint-ui'
import 'static/css/reset.css'
import 'mint-ui/lib/style.css'
import 'static/iconfont/iconfont.css'
import 'static/js/resetfontsize.js'
Vue.use(Mint)

Vue.use(VueHttp);
//Vue.use(Vuex);

require('jquery.cookie')
// 跨域请求配置
Vue.http.options.xhr = { withCredentials: true }
//Vue.http.options.root = '';
// if($.cookie('token'))
//   Vue.http.headers.common['token'] = $.cookie('token');

// Send request body as application/x-www-form-urlencoded content type
Vue.http.options.emulateJSON = true;

//Send PUT, PATCH and DELETE requests with a HTTP POST and set the X-HTTP-Method-Override header
//Vue.http.options.emulateHTTP = true;

Vue.http.interceptors.push((request, next)  => {
  // modify request
  //request.method = 'POST';
  //request.headers['token'] = $.cookie('token');
  // if($.cookie('token'))
  //   Vue.http.headers.common['token'] = $.cookie('token');

  let _timeout = setTimeout(() =>{
    next(request.respondWith(request.body,{
      status:408,
      statusText:'数据请求超时,请检查您的网络连接'
    }));
    request.abort();
  },1000 * 120);
  // continue to next interceptor
  next((response) => {
    // modify response
    //response.body = '...';
    clearTimeout(_timeout);
    if(response.data.code == 1030 || response.data.code == 1002){// 1030 单点登录被踢  1002 未登录
      //var redirectRouter = vm.$route.path;
      // window.localStorage.clear();
      $.cookie('token',null,{
                    expires: -1,
                    path:'/',
                    domain:'.xxx.com',
                    secure: false
                });
      //vm.$store.dispatch('clearPreBill');
      // vm.$store.dispatch('clearAllCache');
      location.href =  location.origin + "/login/";
    }
  });
});
