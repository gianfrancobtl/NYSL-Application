<template>
  <div class="content">
    <div class="container-fluid">
      <card class="card-primary">
            <template slot="header">
              <h2 class="title">Lo próximo</h2>
              <p class="category">Esto está pasando en el club</p>
            </template>
      </card>

      <div class="row">
        <div class="col-xl-12 col-md-12">
          <card class="card-secondary">
            <l-table :data="tableData.data"
                     :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>{{row.date}}</td>
                <td>{{row.title}}</td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Updated 3 minutes ago
              </div>
            </div>
          </card>

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
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      return {

        tableData: {
          data: [
            {date: '4 Agosto', title: 'Recaudación de fondos en el club'},
            {date: '16 Agosto', title: '¡Patada inicial: conocé a los equipos!'},
            {date: '1 Septiembre', title: 'Primer partido de la temporada. Más información en la página de horarios.'},
          ]
        }
      }
    }
  }
</script>
<style scoped>
.content{
  background-color:#909C9A;
}

.footer{
  background-color: #C6D2D2;
}

.card-primary {
  box-shadow: none;
  border-radius: 10;
  text-align: center;
  width: 100%;
  border-width: 2px;
  background-color: #A0AB42;
  
}

.card-secondary {
  background-color: #C6D2D2;
  box-shadow: none;
  border-radius: 10;
  border-color: #A0AB42;
  width: 100%;
  margin-bottom: 60px;
  border-width: 2px;
}

</style>
