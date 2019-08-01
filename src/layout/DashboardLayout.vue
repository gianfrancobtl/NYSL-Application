<template>
  <div class="wrapper">
    <side-bar>
      <sidebar-link to="/admin/sobre-nosotros">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Sobre nosotros</p>
      </sidebar-link>
      <sidebar-link to="/admin/inscribirse-en-NYSL">
        <i class="nc-icon nc-notes"></i>
        <p>Inscribirse en NYSL</p>
      </sidebar-link>
      <sidebar-link to="/admin/conoce-las-reglas">
        <i class="nc-icon nc-bell-55"></i>
        <p>Conocé las reglas</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>
      
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
 
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      DashboardContent,
      
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
