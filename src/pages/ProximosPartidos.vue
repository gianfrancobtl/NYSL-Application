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
      <a class="dropdown-item" href="#">U5</a>
            <a class="dropdown-item" href="#">U6</a>

    </base-dropdown>
            </template>
      </card>
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive">
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: ['9 de septiembre', 'ola'],
          data: ['18:00']
        }
      }
    }
  }
</script>
<style>
</style>
