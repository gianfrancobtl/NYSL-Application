<template>
  <div id="app">
    <div v-if="!username">
      No puedes chatear sin nombre. ¿Cómo te llamas? <br />
      <input type="text" placeholder="Nombre" v-on:keyup.enter="updateUsername">
    </div>
    <div v-else>
      <div>
        De : {{username}}<br />
        Mensaje:<br />
        <textarea name="" id="" cols="30" rows="10" placeholder="Nuevo mensaje" v-on:keyup.enter="sendMessage">

        </textarea>
      </div>
      <hr>
      <div class="messages">
        <h3>Mensajes</h3>
        <div class="message" v-for="message in messages">
          <strong>{{message.username}}</strong>
          <p>{{message.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import Card from "src/components/Cards/Card.vue";
import fire from 'src/fire'

export default {
  components: {
    Card
  },
  name: "chat",
  data() {
    return {
      username: "",
      messages: []
    };
  },
  methods: {
    updateUsername(e) {
        e.preventDefault();
        if(e.target.value){
            this.username = e.target.value;
        }
  },
  sendMessage(e) {
        e.preventDefault();
        if(e.target.value){
            const message = {
                username: this.username,
                text: e.target.value
            }
            //Push message to firebase reference
            fire.database().ref('messages').push(message);
            e.target.value = ''
        }
    }
  },

  mounted() {
    let vm = this;
    const itemsRef = fire.database().ref('messages');
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let messages = [];
        Object.keys(data).forEach(key => {
            messages.push({
                id: key,
                username: data[key].username,
                text: data[key].text
            });
        });
        vm.messages = messages;
    });
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.messages {
  text-align: left;
}
.message {
  border: #000 solid 2px;
  padding: 5px;
  margin: 5px;
  width: 200px;
}

</style>