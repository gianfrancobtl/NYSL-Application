<template>
  <div>
    <button type="button" v-show="!is_signed" class="btn btn-light mx-1" data-toggle="modal" data-target="#signup-modal"
      id="toggle-btn">Registrarse</button>
  <div class="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalCenterTitle">Registrarse</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h5 class="modal-title">Nueva cuenta</h5>
      <br>
      <form>
        <div class="form-group">
            <input class="form-control" type="text" v-model="email" placeholder="Email">
          </div>
          <div class="form-group">
            <input class="form-control" type="password" v-model="password" placeholder="Password">
          </div>
          <button type="submit" data-dismiss="modal" class="btn btn-primary mx-3" @click="signUp">Registrarse</button>
          <button type="button" class="btn btn-secondary mx-3" data-dismiss="modal">Cancelar</button>
      </form>
      </div>
      
    </div>
  </div>
</div>
  </div>
</template>

<script>
  import firebase from 'firebase';
  export default {
    name: 'Signup',
    data() {
      return {
        email: '',
        password: '',
        is_signed: false
    } 
    },
    created: function(){
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        that.is_signed = true;        
      } else {
        that.is_signed = false;
      }
    });
  },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alertify.set('notifier','position', 'top-right');
            alertify.notify('User Successfully Created', 'success',4);
          },
          (err) => {
            alertify.alert('NYSL Schedule','Oops. ' + err.message)
          }
        );
      },
  }
  }
</script>

<style scoped>
</style>