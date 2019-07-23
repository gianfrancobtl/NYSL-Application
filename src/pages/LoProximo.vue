<template>
  <div class="content">
    <div class="container-fluid">
      <card class="card-lo-proximo">
            <template slot="header">
              <h2 class="title">Lo próximo</h2>
              <p class="category">Esto está pasando en el club</p>
            </template>
      </card>

      <div class="row">
        <div class="col-xl-12 col-md-12">
          <card class="card plain">
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
            {date: 'August 4', title: 'NYSL Fundraiser'},
            {date: 'August 16', title: 'Season Kick-off: Meet the Teams'},
            {date: 'September 1', title: 'First Game of the Season (Check Game Schedule for details)'},
          ]
        }
      }
    }
  }
</script>
<style>

</style>
