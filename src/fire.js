import firebase from 'firebase'
var config = {
    apiKey: "{AIzaSyAi7EldMBFPa8qqP7AfZNWBfVeZSbfiico}",
    authDomain: "nysl-application-50d42.firebaseapp.com",
    databaseURL: "nysl-application-50d42.firebaseio.com",
    projectId: "nysl-application-50d42",
    storageBucket: "nysl-application-50d42.appspot.com",
    messagingSenderId: "{862996494531}"
};
var fire = firebase.initializeApp(config);
export default fire;