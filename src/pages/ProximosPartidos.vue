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
              <button type="button" class="btn btn-light">Ver mapa</button>
            </div>
              <gmap-map
                id="map"
                :center="center"
                :zoom="13"
                :options="options"
                map-type-id="terrain"
              >
                <gmap-marker :position="center"></gmap-marker>
              </gmap-map>
            
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
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-info btn-fill float-right"
                @click.prevent="updateProfile"
              >Update Profile</button>
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
import ChartCard from "src/components/Cards/ChartCard.vue";
import StatsCard from "src/components/Cards/StatsCard.vue";
import LTable from "src/components/Table.vue";
import {API_KEY} from './Maps/API_KEY'
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'
  Vue.use(VueGoogleMaps, {
    load: {
      key: API_KEY
    }
  })
  export default {
    components: {
    StatsCard
  },
    data () {
      return {
        center: {
          lat: 40.748817,
          lng: -73.985428
        },
        options: {
          styles: [{
            'featureType': 'water',
            'stylers': [{'saturation': 43}, {'lightness': -11}, {'hue': '#0088ff'}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [{'hue': '#ff0000'}, {'saturation': -100}, {'lightness': 99}]
          }, {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [{'color': '#808080'}, {'lightness': 54}]
          }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ece2d9'}]
          }, {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [{'color': '#ccdca1'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{'color': '#767676'}]
          }, {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [{'color': '#ffffff'}]
          }, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [{'visibility': 'on'}, {'color': '#b8cb93'}]
          }, {'featureType': 'poi.park', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.sports_complex',
            'stylers': [{'visibility': 'on'}]
          }, {'featureType': 'poi.medical', 'stylers': [{'visibility': 'on'}]}, {
            'featureType': 'poi.business',
            'stylers': [{'visibility': 'simplified'}]
          }]
        }
      }
    }
  }

</script>