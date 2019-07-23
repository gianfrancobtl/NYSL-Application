<template>
  <div class="content">
    <div class="container-fluid">
      <card class="card-proximos-partidos">
            <template slot="header">
              <h4 class="card-title">Próximos partidos</h4>
              <p class="card-category">Siguientes compromisos</p>

    <base-dropdown title="Elegí tu club">
            <a class="dropdown-item" href="#">U1</a>
            <a class="dropdown-item" href="#">U2</a>
            <a class="dropdown-item" href="#">U3</a>
            <a class="dropdown-item" href="#">U4</a>
    </base-dropdown>
            </template>
    </card>

            <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-notes"></i>
            </div>
            <div slot="content">
              <p class="card-category">18:00</p>
              <h4 class="card-title">U1 vs. U2</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>1° de septiembre
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-notes"></i>
            </div>
            <div slot="content">
              <p class="card-category">20:00</p>
              <h4 class="card-title">U3 vs. U4</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>2° de septiembre
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-notes"></i>
            </div>
            <div slot="content">
              <p class="card-category">18:00</p>
              <h4 class="card-title">U1 vs. U4</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>2 de octubre
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-notes"></i>
            </div>
            <div slot="content">
              <p class="card-category">20:00</p>
              <h4 class="card-title">U2 vs. U3</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>5 de octubre
            </div>
          </stats-card>
        </div>

      </div>
      </div>

      
    </div>
</template>

<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'

  export default {
    components: {
      StatsCard
    },
  }
</script>