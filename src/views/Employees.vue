<template>
  <div class="text-left employees">
    <h1 class="my-4">Employees</h1>
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
        <div class="alert alert-danger alert-dismissible fade show" v-show="error">
          {{ error }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="alert alert-success fade show" v-show="saved">The employee has been saved!</div>
        <form @submit.prevent="saveEmployee">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              required="required"
              v-model="form.name"
            />
          </div>
          <div class="form-group">
            <label for="photo">Photo</label>
            <input id="photo" type="file" class="form-control" />
            <span class="form-text text-muted">Any photo format</span>
          </div>
          <div class="form-group">
            <label for="phone">Phone number</label>
            <input id="phone" type="text" class="form-control" v-model="form.phone" />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              id="email"
              type="email"
              class="form-control"
              required="required"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <button name="submit" type="submit" class="btn btn-primary" :disabled="saving">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
                v-show="saving"
              ></span> Register Employee
            </button>
          </div>
        </form>
      </div>
      <div class="tab-pane fade" id="employees" role="tabpanel" aria-labelledby="employees-tab">
        <table class="table table-stripped table-bordered">
          <thead>
            <tr>
              <th class="d-none d-lg-table-cell">Created at</th>
              <th class="d-none d-lg-table-cell">Photo</th>
              <th>Name</th>
              <th class="d-none d-sm-table-cell">Phone</th>
              <th class="d-none d-md-table-cell">Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, counter) in employees" :key="counter">
              <td class="d-none d-lg-table-cell">{{ employee.created_at | humanize }}</td>
              <td class="photo d-none d-lg-table-cell">
                <img class="rounded" v-if="employee.photo" :src="employee.photo" />
              </td>
              <td>{{ employee.name }}</td>
              <td class="d-none d-sm-table-cell">{{ employee.phone }}</td>
              <td class="d-none d-md-table-cell">{{ employee.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../apis/firebase'
const firestore = firebase.firestore(),
  storage = firebase.storage().ref()

export default {
  name: 'Form',

  data() {
    return {
      employees: [],
      formTpl: {
        name: '',
        photo: '',
        email: '',
        phone: ''
      },
      form: this.newForm(),
      saving: false,
      saved: false,
      error: null
    }
  },

  async created() {
    this.fetchEmployees()
  },

  methods: {
    async fetchEmployees() {
      firestore
        .collection('employees')
        .orderBy('created_at', 'desc')
        .onSnapshot(querySnapshot => {
          this.employees = []
          querySnapshot.forEach(doc => {
            const data = doc.data()
            this.employees.push({
              created_at: data.created_at.toDate(),
              name: data.name,
              photo: data.photo,
              email: data.email,
              phone: data.phone
            })
          })
        })
    },

    async saveEmployee() {
      this.error = null
      this.saving = true
      this.saved = false

      try {
        const date = new Date()

        const file = document.querySelector('#photo').files[0]
        let photo_url = ''
        if (file) {
          const name = date.getTime() + '-' + file.name
          const metadata = { contentType: file.type }
          const task = await storage.child(name).put(file, metadata)
          photo_url = await task.ref.getDownloadURL()
          console.log(photo_url)
        }

        this.form.photo = photo_url
        this.form.created_at = date
        await firestore.collection('employees').add(this.form)
        this.form = this.newForm()
        this.saving = false
        this.saved = true
        let $this = this
        setTimeout(() => {
          $this.saved = false
        }, 1000)
        this.fetchEmployees()
      } catch (e) {
        this.error = e
        this.saving = false
      }
    },

    newForm() {
      return Object.assign({}, this.formTpl)
    }
  }
}
</script>

<style lang="scss">
.employees {
  .table {
    td.photo {
      text-align: center;
      img {
        width: 5em;
      }
    }
  }
}
</style>