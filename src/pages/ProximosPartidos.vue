<template>
  <div class="content">
    <div class="container-fluid">
      <card class="card-primary">
        <template slot="header">
          <h2 class="title">Próximos partidos</h2>
          <p class="category">Estos serán los siguientes partidos de la liga.</p>
        </template>
      </card>

      <card class="card-fourth">
        <div class="row d-block text-center mx-auto">
          <label for="month">
            <span class="card-span">Elegí el mes</span>
            <select id="month" class="col-6" v-model="selectedMonth">
              <option value="All">Todos</option>
              <option value="09">Septiembre</option>
              <option value="10">Octubre</option>
            </select>
          </label>
        </div>
      </card>

      <card class="card-fourth">
        <div class="row d-block text-center mx-auto">
          <label for="month">
            <span class="card-span">Elegí tu equipo</span>
            <select class="col-6" v-model="selectedTeam">
              <option value="All">Todos los equipos</option>
              <option value="U1">U1</option>
              <option value="U2">U2</option>
              <option value="U3">U3</option>
              <option value="U4">U4</option>
              <option value="U5">U5</option>
              <option value="U6">U6</option>
            </select>
          </label>
        </div>
      </card>

      <div class="row-xl-12 row-md-12 row-sm-12 justify-content-center mx-auto">
        <ul class="nostyle row d-block">
          <li class="d-block" v-for="partido in partidosFiltrados" style="margin-right: 35px">
            <game-card v-bind="partido"></game-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import GameCard from "src/components/GameCard";
export default {
  data() {
    return {
      selectedMonth: "All",
      selectedTeam: "All",
      partidos: [
        {
          fecha: {
            month: "09",
            day: "01"
          },
          local: "U1",
          lugar: {
            name: "AJ Katzenmaier",
            address: "24 W. Walton St., Chicago, IL 60610",
            mapURL:
              "https://www.google.com/maps/place/AJ+Katzenmaier+Elementary/@41.900229,-87.629069,14z/data=!4m5!3m4!1s0x0:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5939.306985556562!2d-87.63333948094261!3d41.900308578146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1ses-419!2sar!4v1556575530951!5m2!1ses-419!2sar"
          },
          visitante: "U4",
          hora: "09:30 AM"
        },
        {
          fecha: {
            month: "09",
            day: "01"
          },
          local: "U3",
          lugar: {
            name: "Greenbay",
            address: "1734 N. Orleans St., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/Greenbay+Elementary/@41.913865,-87.637833,14z/data=!4m5!3m4!1s0x0:0xb351205fae50c6f3!8m2!3d41.9138647!4d-87.6378335?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.0051123739595!2d-87.64134185713635!3d41.9143037713579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1ses-419!2sar!4v1556575633803!5m2!1ses-419!2sar"
          },
          visitante: "U2",
          hora: "01:00 PM"
        },
        {
          fecha: {
            month: "09",
            day: "08"
          },
          local: "U5",
          lugar: {
            name: "Howard A Yeager",
            address: "2245 N. Southport Ave., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/Howard+A+Yeager+Elementary/@41.923261,-87.662921,14z/data=!4m5!3m4!1s0x0:0xb6cb22b2f0358874!8m2!3d41.923261!4d-87.6629215?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4992.601556981326!2d-87.66428867839021!3d41.9225560678641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward+A+Yeager+Elementary!5e0!3m2!1ses-419!2sar!4v1556575809222!5m2!1ses-419!2sar"
          },
          visitante: "U6",
          hora: "09:30 AM"
        },
        {
          fecha: {
            month: "09",
            day: "08"
          },
          local: "U6",
          lugar: {
            name: "Marjorie P Hart",
            address: "2625 N. Orchard St., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/Marjorie+P+Hart+Elementary/@41.929623,-87.645973,15z/data=!4m5!3m4!1s0x0:0xdbff5d5dfcfcfa35!8m2!3d41.9296229!4d-87.6459727?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.283306084207!2d-87.64718901787982!3d41.92976328386165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie+P+Hart+Elementary!5e0!3m2!1ses-419!2sar!4v1556575898303!5m2!1ses-419!2sar"
          },
          visitante: "U1",
          hora: "01:00 PM"
        },
        {
          fecha: {
            month: "09",
            day: "15"
          },
          local: "U2",
          lugar: {
            name: "North",
            address: "1409 N. Ogden Ave., Chicago, IL 60610",
            mapURL:
              "https://www.google.com/maps/place/North+Elementary/@41.907145,-87.646123,14z/data=!4m5!3m4!1s0x0:0x5736e62f19086c62!8m2!3d41.9071449!4d-87.6461229?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5935.135261549469!2d-87.6504430278821!3d41.90726461475383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af14860a5%3A0x5736e62f19086c62!2sNorth+Elementary!5e0!3m2!1ses-419!2sar!4v1556576504512!5m2!1ses-419!2sar"
          },
          visitante: "U4",
          hora: "09:30 AM"
        },
        {
          fecha: {
            month: "09",
            day: "15"
          },
          local: "U3",
          lugar: {
            name: "AJ Katzenmaier",
            address: "24 W. Walton St., Chicago, IL 60610",
            mapURL:
              "https://www.google.com/maps/place/AJ+Katzenmaier+Elementary/@41.900229,-87.629069,14z/data=!4m5!3m4!1s0x0:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5939.306985556562!2d-87.63333948094261!3d41.900308578146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1ses-419!2sar!4v1556575530951!5m2!1ses-419!2sar"
          },
          visitante: "U5",
          hora: "01:00 PM"
        },
        {
          fecha: {
            month: "09",
            day: "22"
          },
          local: "U1",
          lugar: {
            name: "South",
            address: "2101 N. Fremont St., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/2101+N+Fremont+St,+Chicago,+IL+60614,+EE.+UU./@41.919777,-87.651367,15z/data=!4m5!3m4!1s0x880fd3196fb41dc7:0x970be7f7d6336df5!8m2!3d41.9197768!4d-87.6513667?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.747764826565!2d-87.65355538505456!3d41.91978077078474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1556576874415!5m2!1ses-419!2sar"
          },
          visitante: "U3",
          hora: "09:30 AM"
        },
        {
          fecha: {
            month: "09",
            day: "22"
          },
          local: "U2",
          lugar: {
            name: "Howard A Yeager",
            address: "2245 N. Southport Ave., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/Howard+A+Yeager+Elementary/@41.923261,-87.662921,14z/data=!4m5!3m4!1s0x0:0xb6cb22b2f0358874!8m2!3d41.923261!4d-87.6629215?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4992.601556981326!2d-87.66428867839021!3d41.9225560678641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward+A+Yeager+Elementary!5e0!3m2!1ses-419!2sar!4v1556575809222!5m2!1ses-419!2sar"
          },
          visitante: "U6",
          hora: "01:00 PM"
        },
        {
          fecha: {
            month: "09",
            day: "29"
          },
          local: "U4",
          lugar: {
            name: "Greenbay",
            address: "1734 N. Orleans St., Chicago, IL 60614",
            mapURL:
              "https://www.google.com/maps/place/Greenbay+Elementary/@41.913865,-87.637833,14z/data=!4m5!3m4!1s0x0:0xb351205fae50c6f3!8m2!3d41.9138647!4d-87.6378335?hl=es-419",
            mapEmbed:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5938.0051123739595!2d-87.64134185713635!3d41.9143037713579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1ses-419!2sar!4v1556575633803!5m2!1ses-419!2sar"
          },
          visitante: "U5",
          hora: "09:30 AM"
        }
      ]
    };
  },
  computed: {
    // partidosFiltrados: function() {
    //   return this.partidos.filter(
    //     partido => partido.fecha.month === this.selectedDate
    //   );
    // }

    //Esta función filtra por Mes, o por Equipo, o combina ambos
    partidosFiltrados: function() {
      var month = this.selectedMonth;
      var team = this.selectedTeam;

      if (month === "All" && team === "All") {
        //save performance, juste return the default array:
        return this.partidos;
      } else {
        return this.partidos.filter(function(partido) {
          //return the array after passing it through the filter function:
          return (
            (month === "All" || partido.fecha.month === month) &&
            (team === "All" ||
              partido.local === team ||
              partido.visitante === team)
          );
        });
      }
    }
  },
  props: {},
  components: {
    GameCard
  },
  name: "Partidos"
};
</script>

<style scoped>
.content {
  background-color: #909c9a;
}

.card-primary {
  box-shadow: none;
  border-radius: 10;
  text-align: center;
  width: 100%;
  border-width: 2px;
  background-color: #A0AB42;
}

.card-fourth {
  background-color: #C6D2D2;
  box-shadow: none;
  border-radius: 10;
  border-color: #A0AB42;
  text-align: center;
  width: 100%;
  border-width: 2px;
}

</style>

