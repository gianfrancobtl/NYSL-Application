<template>
    <div class="container-fluid">
      <card class="card-third text-center">
        <h4 class="card-title">{{fecha.month}}/{{fecha.day}} - {{hora}}</h4>
        <h4 class="card-subtitle">{{local}} vs. {{visitante}}</h4>
        <button class="bg-white btn text-secondary m-3" @click="details=!details">Detalles del partido</button>
        <div v-show="details">
          <div class="embed-responsive embed-responsive-4by3">
            <iframe
              class="iframe"
              v-bind:src="lugar.mapEmbed"
              height="300"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <a :href="lugar.mapURL" class="bg-white btn text-secondary m-3">Abrir en Google Maps</a>
        </div>
      </card>
    </div>
</template>

<script>
export default {
  props: {
    fecha: String,
    local: String,
    visitante: String,
    lugar: String,
    hora: String
  },
  name: "GameCard",
  data() {
    return {
      details: false
    };
  }
};
</script>
<style scoped>

.card-third {
  background-color: #C6D2D2;
  box-shadow: none;
  border-radius: 20;
  border-color: #A0AB42;
  text-align: center;
  width: 100%;
  border-width: 3px;
}

</style>
