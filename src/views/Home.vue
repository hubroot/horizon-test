<template>
  <div class="home">
    <h1 class="my-4">Home</h1>
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Total employees</h5>
            <div class="spinner-border spinner-border-sm" role="status" v-show="totalEmployees === null">
              <span class="sr-only">Loading...</span>
            </div>
            <p class="card-text">{{ totalEmployees }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 mt-1 mt-sm-0">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">New employees</h5>
            <div class="spinner-border spinner-border-sm" role="status" v-show="newEmployees === null">
              <span class="sr-only">Loading...</span>
            </div>
            <p class="card-text">{{ newEmployees }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../apis/firebase'

export default {
  name: 'Home',

  data() {
    return {
      totalEmployees: null,
      newEmployees: null
    }
  },

  async created() {
    const firestore = firebase.firestore()
    let querySnapshot = await firestore.collection('employees').get()
    this.totalEmployees = querySnapshot.size

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    querySnapshot = await firestore
      .collection('employees')
      .where('created_at', '>', date)
      .get()
    this.newEmployees = querySnapshot.size
  }
}
</script>
