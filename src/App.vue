<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <router-link to="/home" class="navbar-brand">Horizon Test</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li
              v-for="(link, index) in links"
              :key="index"
              class="nav-item"
              :class="{active: $route.name && $route.name.indexOf(link.route) == 0}"
            >
              <router-link class="nav-link" :to="link.route">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      links: [
        {
          title: 'Home',
          route: 'home'
        },
        {
          title: 'Location',
          route: 'location'
        },
        {
          title: 'Employees',
          route: 'employees'
        },
        {
          title: 'Editor',
          route: 'editor'
        }
      ]
    }
  }
}
</script>