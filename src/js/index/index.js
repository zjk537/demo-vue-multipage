import Vue from 'vue'
import Index from 'src/views/index/index'

require('src/scss/index/index.scss');
/* eslint-disable no-new */
new Vue({
  el: 'app',
  template: '<Index/>',
  components: { Index }
})
