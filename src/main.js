import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import * as VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

var firebaseConfig = {
  apiKey: "AIzaSyC5l-k6j7bFUreJhdyEXiwTfeZoRjLJ-iU",
  authDomain: "horizon-fc1c9.firebaseapp.com",
  databaseURL: "https://horizon-fc1c9.firebaseio.com",
  projectId: "horizon-fc1c9",
  storageBucket: "horizon-fc1c9.appspot.com",
  messagingSenderId: "354530515268",
  appId: "1:354530515268:web:a5b0d6ef2b435608c61f11"
};

firebase.initializeApp({
  projectId: firebaseConfig.projectId,
  databaseURL: firebaseConfig.databaseURL
})
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
