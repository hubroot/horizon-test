import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.filter('humanize', function (date) {
  const delta = Math.round((+new Date - date) / 1000);

  const minute = 60,
    hour = minute * 60,
    day = hour * 24

  if (delta < 30)
    return 'just then.'
  else if (delta < minute)
    return delta + ' seconds ago.'
  else if (delta < 2 * minute)
    return 'a minute ago.'
  else if (delta < hour)
    return Math.floor(delta / minute) + ' minutes ago.';
  else if (Math.floor(delta / hour) == 1)
    return '1 hour ago.'
  else if (delta < day)
    return Math.floor(delta / hour) + ' hours ago.'
  else if (delta < day * 2)
    return 'yesterday'

})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')