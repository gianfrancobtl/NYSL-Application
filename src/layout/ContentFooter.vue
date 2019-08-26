<template>
  <div>
    <nav id="footer" class= "row pt-3 pb-4 d-flex justify-content-center align-items-start bg-light fixed-bottom">
      <sidebar-link class="d-block" to="/admin/lo-proximo">
        <i class="nc-icon nc-chart-pie-35"></i>
      </sidebar-link>
      <sidebar-link class="d-block" to="/admin/proximos-partidos">
        <i class="nc-icon nc-notes"></i>
      </sidebar-link>
      <sidebar-link class="d-block" to="/admin/chat">
        <i class="nc-icon nc-chat-round"></i>
      </sidebar-link>
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
  z-index: 1;
  height: 10%;
}
</style>
