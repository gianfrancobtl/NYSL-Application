<template>
  <!--<footer class="page-footer font-medium special-color-dark pt-4 fixed-bottom">
    <div class="container">
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <sidebar-link to="/admin/lo-proximo">
            <i class="nc-icon nc-chart-pie-35"></i>
          </sidebar-link>
        </li>
        <li class="list-inline-item">
          <sidebar-link to="/admin/proximos-partidos">
            <i class="nc-icon nc-notes"></i>
          </sidebar-link>
        </li>
        <li class="list-inline-item">
          <sidebar-link to="/admin/chat">
            <i class="nc-icon nc-chat-round"></i>
          </sidebar-link>
        </li>
      </ul>
    </div>wr
  </footer>-->
  <div class>
    <nav id="footer" class="navbar navbar-expand-sm bg-light justify-content-center fixed-bottom">
      <ul class="navbar-nav">
        <li class="nav-item">
          <sidebar-link to="/admin/lo-proximo">
            <i class="nc-icon nc-chart-pie-35"></i>
          </sidebar-link>
        </li>
        <li class="nav-item">
          <sidebar-link to="/admin/proximos-partidos">
            <i class="nc-icon nc-notes"></i>
          </sidebar-link>
        </li>
        <li class="nav-item">
          <sidebar-link to="/admin/chat">
            <i class="nc-icon nc-chat-round"></i>
          </sidebar-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footer {
  bottom: 0px;
  z-index: 100;
  width: 100%;
}
</style>
