<template>
  <div class="text-left">
    <h1 class="my-4">Registration form</h1>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="employee-tab"
          data-toggle="tab"
          href="#employee"
          role="tab"
          aria-controls="employee"
          aria-selected="true"
        >employee</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="employees-tab"
          data-toggle="tab"
          href="#employees"
          role="tab"
          aria-controls="employees"
          aria-selected="false"
        >employees</a>
      </li>
    </ul>
    <div class="tab-content p-3" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="employee"
        role="tabpanel"
        aria-labelledby="employee-tab"
      >
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" class="form-control" required="required" />
          </div>
          <div class="form-group">
            <label for="photo">Photo</label>
            <input if="photo" type="file" class="form-control" />
            <span class="form-text text-muted">Any photo format</span>
          </div>
          <div class="form-group">
            <label for="phone">Phone number</label>
            <input id="phone" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input id="email" type="email" class="form-control" required="required" />
          </div>
          <div class="form-group">
            <button name="submit" type="submit" class="btn btn-primary">Register data</button>
          </div>
        </form>
      </div>
      <div class="tab-pane fade" id="employees" role="tabpanel" aria-labelledby="employees-tab">
        <table class="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>87878</td>
              <td>q8zdqz8d7zd</td>
              <td>8qd8qzdqz7d8qz</td>
              <td>q8zd78qz</td>
              <td>8qzd8qz7d8qz</td>
            </tr>
            <tr>
              <td>87878</td>
              <td>q8zdqz8d7zd</td>
              <td>8qd8qzdqz7d8qz</td>
              <td>q8zd78qz</td>
              <td>8qzd8qz7d8qz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)

var firebaseConfig = {
  apiKey: 'AIzaSyC5l-k6j7bFUreJhdyEXiwTfeZoRjLJ-iU',
  authDomain: 'horizon-fc1c9.firebaseapp.com',
  databaseURL: 'https://horizon-fc1c9.firebaseio.com',
  projectId: 'horizon-fc1c9',
  storageBucket: 'horizon-fc1c9.appspot.com',
  messagingSenderId: '354530515268',
  appId: '1:354530515268:web:a5b0d6ef2b435608c61f11'
}

firebase.initializeApp({
  projectId: firebaseConfig.projectId,
  databaseURL: firebaseConfig.databaseURL
})

let db = firebase.firestore()

export default {
  name: 'Form'
}
</script>
